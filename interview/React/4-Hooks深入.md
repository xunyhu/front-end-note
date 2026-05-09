1. 为什么 React Hooks 不能在条件语句或循环中使用？

   因为Hooks依赖稳定的调用顺序。React内部通过链表或数组来存储每个Hook的状态（state，effect等），依靠Hook的调用顺序来正确匹配状态。

   ```js
   // React 内部简化示意
   let hooksList = []; // 存储所有 Hook 状态
   let currentIndex = 0; // 当前执行的 Hook 索引

   function useState(initialValue) {
     const index = currentIndex; // 记住当前索引
     const state = hooksList[index] || initialValue;
     const setState = (newValue) => {
       hooksList[index] = newValue;
       // 触发重新渲染
     };
     currentIndex++; // 移到下一个
     return [state, setState];
   }
   ```

2. useEffect 的依赖数组为 `[]`、`[a, b]` 和不传时的执行时机分别是怎样的？如何实现只执行一次的 effect？为什么 React 18 下 `useEffect` 会执行两次（开发环境）？

**执行时机**

| 依赖形式               | 执行时机                         | 典型场景                   |
| ---------------------- | -------------------------------- | -------------------------- |
| **不传**（无依赖数组） | **每次渲染后**都执行             | 极少使用（会导致性能问题） |
| **`[]`**（空数组）     | **只执行一次**：组件首次挂载后   | 初始化请求、订阅事件等     |
| **`[a, b]`**（有依赖） | **首次挂载** + **a 或 b 变化时** | 依赖特定数据变化时同步操作 |

**只执行一次的 effect**

标准方式：空数组 []

**React 18 下为什么执行两次（开发环境）**

React 18 的严格模式中增加了调试性重渲染

```js
// 开启严格模式后（开发环境）
root.render(
    {/* 这里 */}
  <StrictMode>
    <App />
  </StrictMode>,
);
```

React 18 引入了并发特性（Concurrent Features），组件可能会被暂停、中止、恢复。这个机制是为了：暴露副作用不完善的组件;模拟快速挂载/卸载;只在开发环境生效，生产环境不会出现

3. 如何自定义一个 Hook？请举例说明。

核心规则

- 命名必须以 use 开头（React 靠这个识别 Hook 规则）
- 内部可以调用其他 Hook（useState、useEffect、useContext 等）
- 遵循所有 Hook 规则（只能在顶层调用，不能在条件语句中）

**基础示例：useWindowSize（监听窗口尺寸）**

```js
// 自定义 Hook 文件：useWindowSize.js
import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // 清理函数：避免内存泄漏
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 空依赖：只监听一次

  return windowSize;
}

// 使用示例
function MyComponent() {
  const { width, height } = useWindowSize();
  return (
    <div>
      窗口大小：{width} x {height}
    </div>
  );
}
```

**带参数的自定义 Hook：useLocalStorage**

```js
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // 惰性初始化：从 localStorage 读取
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 当 key 或 storedValue 变化时，同步到 localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// 使用示例
function Settings() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguage] = useLocalStorage("lang", "zh-CN");

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option>light</option>
        <option>dark</option>
      </select>
    </div>
  );
}
```

**异步数据请求 Hook：useFetch**

```js
import { useState, useEffect } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // 防止组件卸载后 setState
    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          ...options,
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      abortController.abort(); // 取消请求
    };
  }, [url, JSON.stringify(options)]); // 注意：options 需要序列化

  return { data, loading, error };
}

// 使用示例
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`/api/users/${userId}`);

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误：{error}</div>;
  return <div>{data.name}</div>;
}
```

**事件监听 Hook：useEventListener**

```js
import { useEffect, useRef } from "react";

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef(handler);

  // 更新最新的 handler，避免 effect 频繁重新绑定
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

// 使用示例
function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return <div>滚动距离：{scrollY}px</div>;
}
```
