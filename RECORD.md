搭建文章：https://juejin.cn/post/7111922283681153038?searchId=2024010913400102D358BAAFEEDD7CBF2A
react-router 文章：https://juejin.cn/post/7142675624321089566#heading-7

## 包含的内容

1. webpack 搭建的 react + ts
2. react-router-dom 的 demo

### 合理配置打包文件 hash

- hash：跟整个项目的构建相关,只要项目里有文件更改,整个项目构建的 hash 值都会更改,并且全部文件都共用相同的 hash 值
- chunkhash：不同的入口文件进行依赖文件解析、构建对应的 chunk,生成对应的哈希值,文件本身修改或者依赖文件修改,chunkhash 值会变化
- contenthash：每个文件自己单独的 hash 值,文件的改动只会影响自身的 hash 值

- ext 文件后缀名
- name 文件名
- path 文件相对路径
- folder 文件所在文件夹
- hash 每次构建生成的唯一 hash 值
- chunkhash 根据 chunk 生成 hash 值
- contenthash 根据文件内容生成 hash 值

### 资源预加载

可以借助 link 标签的 rel 属性 prefetch 与 preload,link 标签除了加载 css 之外也可以加载 js 资源,设置 rel 属性可以规定 link 提前加载资源,但是加载资源后不执行,等用到了再执行。

rel 的属性值

preload 是告诉浏览器页面必定需要的资源,浏览器一定会加载这些资源。
prefetch 是告诉浏览器页面可能需要的资源,浏览器不一定会加载这些资源,会在空闲时加载。
对于当前页面很有必要的资源使用 preload ,对于可能在将来的页面中使用的资源使用 prefetch。

webpack v4.6.0+ 增加了对预获取和预加载的支持,使用方式也比较简单,在 import 引入动态资源时使用 webpack 的魔法注释

```js
import(
/_ webpackChunkName: "my-chunk-name" _/ // 资源打包后的文件 chunkname
/_ webpackPrefetch: true _/ // 开启 prefetch 预获取
/_ webpackPreload: true _/ // 开启 preload 预获取
'./module'
);
```
