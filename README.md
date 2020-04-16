# 项目学习笔记

## MPA（Multi-page application）
- 多页应用，做了很多的单页应用，尤其是用react的时候，
但是当一个SPA，太大太重的时候，配置webpack，利用多页应用，分散逻辑是一个不错的选择

### MPA 配置步骤
- 先执行 npm eject 把 react-scripts 分解后 生成一个config 文件
- 

## react hooks
- 这个趋势看来势不可挡， 很多第三方的库都变成hooks了比如antd，如果不跟着改，很难跟上时代。

### hook规则
- https://zh-hans.reactjs.org/docs/hooks-rules.html

### 自定义Hook
- https://zh-hans.reactjs.org/docs/hooks-custom.html

### hook Api 索引
- https://zh-hans.reactjs.org/docs/hooks-reference.html

## memo
- 一个组件如果只用到props 或者 没有依赖外部变量，可以利用memo 来改善描画。

- React.memo 为高阶组件。它与 React.PureComponent 非常相似，但只适用于函数组件，而不适用 class 组件。

- 如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

## PWA
- 在react生成的文件里面有一个serviceWorker 文件它就是已经写好的PWA
    + 它可以缓存数据，达到，离线应用的能力，但是它只适用于https所有占时还用不到

## eject
- 在create-react-app 之后 有一个 eject命令，这个命令会把react-scripts 这个包分解导入到项目中去，如果项目的构建很复杂不能够满足自己的需求（比如MPA），可以考虑eject但是这个命令无法回滚，执行前清先保存代码。
