# [node.js](https://nodejs.org/zh-cn/about/previous-releases)

1. [node.js 版本切换](https://juejin.cn/post/7178172786421006392)
2. [快速删除 node_modules](https://cloud.tencent.com/developer/article/1997812)

   npm install rimraf -g

   rimraf node_modules

   [rimraf](https://www.npmjs.com/package/rimraf)

## [npm](https://www.npmjs.com/)

## nvm

`nvm install 8.9.4`

`nvm use 8.9.4`

`nvm list`

## 安装 NRM

```zsh
npm install -g nrm --registry https://registry.npmmirror.com
nrm --version
1.2.1

安装指定nrm版本
npm install -g nrm@1.2.0 --registry https://registry.npmmirror.com
```

1. [node 版本管理 nvm，npm 源管理 nrm](https://juejin.cn/post/6957376590133231652)

### 降级 nrm 的版本

1. 卸载当前版本

   ```bash
    npm uninstall -g nrm
   ```

2. 安装低版本

   ```bash
    npm install -g nrm@latest-legacy
   ```

   [nrm Versions](https://www.npmjs.com/package/nrm?activeTab=versions)

### 常用 NRM 命令

```md
# 查看当前仓库地址列表

nrm ls
\*npm -------- https://registry.npmjs.org/
yarn ------- https://registry.yarnpkg.com/
cnpm ------- http://r.cnpmjs.org/
taobao ----- https://registry.npm.taobao.org/
nj --------- https://registry.nodejitsu.com/
npmMirror -- https://skimdb.npmjs.com/registry/
edunpm ----- http://registry.enpmjs.org/

# 查看当前仓库地址

nrm current
npm

# 切换仓库地址

nrm use taobao
Registry has been set to: https://registry.npm.taobao.org/
nrm current
taobao

# 添加新仓库地址

nrm add my http://xxxx.registry.com/
add registry my success

# 删除仓库地址

nrm del my
delete registry my success
```
