#### 1. **无 key 时的默认行为（使用索引）**
当没有指定 `key` 时，React 会默认使用**数组索引**作为 key，这会导致严重的性能问题和状态错误。
```js
// ❌ 不推荐：没有指定 key（React 会警告）
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li>{todo.text}</li>  // React 会警告：Each child should have a unique "key" prop
      ))}
    </ul>
  );
}
```
#### 2. **React 的对比算法**
```js
// 原始列表（使用索引作为 key）
<ul>
  <li key="0">任务 A</li>  // 索引 0
  <li key="1">任务 B</li>  // 索引 1
  <li key="2">任务 C</li>  // 索引 2
</ul>

// 在头部插入新任务后
<ul>
  <li key="0">新任务</li>   // 原索引 0 → 新任务（错误复用）
  <li key="1">任务 A</li>   // 原索引 1 → 任务 A（状态错乱）
  <li key="2">任务 B</li>   // 原索引 2 → 任务 B
  <li key="3">任务 C</li>   // 新增
</ul>

// 使用稳定 ID 作为 key
<ul>
  <li key="id-1">任务 A</li>
  <li key="id-2">任务 B</li>
  <li key="id-3">任务 C</li>
</ul>

// 插入新任务后
<ul>
  <li key="id-4">新任务</li>   // 新增
  <li key="id-1">任务 A</li>   // 正确复用
  <li key="id-2">任务 B</li>   // 正确复用
  <li key="id-3">任务 C</li>   // 正确复用
</ul>
```
### 不使用 key 或使用错误 key 的具体问题
#### 1. **组件状态错乱**
```js
// ❌ 使用索引作为 key（危险示例）
function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 React', completed: false },
    { id: 2, text: '写代码', completed: false }
  ]);
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index}  // ❌ 使用索引
          todo={todo}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);  // 内部状态
  
  // 问题：当在列表头部插入新任务时
  // 原来索引 0 的组件会变成新任务的组件
  // 但 isEditing 状态会保留下来，导致状态错乱
  return (
    <li>
      {isEditing ? <input defaultValue={todo.text} /> : <span>{todo.text}</span>}
      <button onClick={() => setIsEditing(!isEditing)}>编辑</button>
    </li>
  );
}
// 初始状态
任务1（编辑中）✅ 任务2（未编辑）
// 删除任务1，或者在头部插入新任务
新任务（继承了"编辑中"状态）❌ 任务1（恢复为未编辑）
```
#### 2. **性能严重下降**
```js
// ❌ 使用索引导致不必要的重新渲染
function ListWithIndex() {
  const [items, setItems] = useState(['A', 'B', 'C']);
  
  const addAtBeginning = () => {
    setItems(['New', ...items]);  // 头部插入
  };
  
  return (
    <>
      <button onClick={addAtBeginning}>头部添加</button>
      {items.map((item, idx) => (
        <ExpensiveComponent key={idx} data={item} />  // ❌ 全部重新创建
      ))}
    </>
  );
}

// ✅ 使用稳定 ID 复用组件
function ListWithId() {
  const [items, setItems] = useState([
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' }
  ]);
  
  const addAtBeginning = () => {
    setItems([{ id: Date.now(), value: 'New' }, ...items]);
  };
  
  return (
    <>
      <button onClick={addAtBeginning}>头部添加</button>
      {items.map(item => (
        <ExpensiveComponent key={item.id} data={item.value} />  // ✅ 复用原有组件
      ))}
    </>
  );
}
```
### 正确的 key 使用方式
#### 1. **使用数据中的唯一 ID**
#### 2. **没有 ID 时生成稳定的 key**
```js
// ✅ 使用内容组合（内容稳定时）
function ArticleList({ articles }) {
  return (
    <div>
      {articles.map(article => (
        <ArticleCard 
          key={`${article.title}-${article.date}`}  // 组合多个字段
          article={article}
        />
      ))}
    </div>
  );
}

// ✅ 使用哈希函数（需要时）
import hash from 'object-hash';

function ComponentList({ items }) {
  return (
    <div>
      {items.map(item => (
        <ItemComponent key={hash(item)} data={item} />  // 基于内容生成哈希
      ))}
    </div>
  );
}
```
### 高级场景和注意事项
#### 1. **key 只在数组上下文中有意义**
#### 2. **key 不能通过 props 访问**
```js
// ❌ 子组件无法获取 key
function Child(props) {
  console.log(props.key);  // undefined！key 是 React 内部使用
  return <div>{props.value}</div>;
}

// ✅ 需要显式传递
function Parent({ items }) {
  return (
    <>
      {items.map(item => (
        <Child 
          key={item.id}      // React 使用
          id={item.id}       // 组件需要
          value={item.value}
        />
      ))}
    </>
  );
}
```