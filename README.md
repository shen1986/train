# 项目学习笔记

## MPA（Multi-page application）
- 多页应用，做了很多的单页应用，尤其是用react的时候，
但是当一个SPA，太大太重的时候，配置webpack，利用多页应用，分散逻辑是一个不错的选择

### MPA 配置步骤
- 先执行 npm eject 把 react-scripts 分解后 生成一个config 文件
- 其中 paths.js 中配置 所有项目路径相关的情报
- 修改后
```javaScript
// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appQueryHtml: resolveApp('public/query.html'),  // 加入query入口
  appTicketHtml: resolveApp('public/ticket.html'), // 加入ticket入口
  appOrderHtml: resolveApp('public/order.html'), // 加入order入口
  appIndexJs: resolveModule(resolveApp, 'src/index/index'),
  appQueryJs: resolveModule(resolveApp, 'src/query/index'), // 加入queryJS
  appTicketJs: resolveModule(resolveApp, 'src/ticket/index'), // 加入ticketJS
  appOrderJs: resolveModule(resolveApp, 'src/order/index'), // 加入orderJS
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrlOrPath,
};
```
- 改完路径当然就要改 webpack 配置文件
- 修改前只有一个入口
```javaScript
    entry: [
      // Include an alternative client for WebpackDevServer. A client's job is to
      // connect to WebpackDevServer by a socket and get notified about changes.
      // When you save a file, the client will either apply hot updates (in case
      // of CSS changes), or refresh the page (in case of JS changes). When you
      // make a syntax error, this client will display a syntax error overlay.
      // Note: instead of the default WebpackDevServer client, we use a custom one
      // to bring better experience for Create React App users. You can replace
      // the line below with these two lines if you prefer the stock client:
      // require.resolve('webpack-dev-server/client') + '?/',
      // require.resolve('webpack/hot/dev-server'),
      isEnvDevelopment &&
        require.resolve('react-dev-utils/webpackHotDevClient'),
      // Finally, this is your app's code:
      paths.appIndexJs,
      // We include the app code last so that if there is a runtime error during
      // initialization, it doesn't blow up the WebpackDevServer client, and
      // changing JS code would still trigger a refresh.
    ].filter(Boolean),
```
- 修改后
```javaScript
    entry: {
      index: [
          paths.appIndexJs,
          isEnvDevelopment &&
          require.resolve('react-dev-utils/webpackHotDevClient'),
      ].filter(Boolean),
      query:[
          paths.appQueryJs,
          isEnvDevelopment &&
          require.resolve('react-dev-utils/webpackHotDevClient'),
      ].filter(Boolean),
      ticket: [
          paths.appTicketJs,
          isEnvDevelopment &&
          require.resolve('react-dev-utils/webpackHotDevClient'),
      ].filter(Boolean),
      order: [
          paths.appOrderJs,
          isEnvDevelopment &&
          require.resolve('react-dev-utils/webpackHotDevClient'),
      ].filter(Boolean),
    },
```
- webpackPlugin 改成多个
```javaScript
new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml,
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
```
- 修改后
```javaScript
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml,
            filename: 'index.html',
            chunks:['index'],
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml,
            filename: 'query.html',
            chunks:['query'],
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml,
            filename: 'ticket.html',
            chunks:['ticket'],
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml,
            filename: 'order.html',
            chunks:['order'],
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
```

- 这还能遇到坑，我也是服了
- https://github.com/timarney/react-app-rewired/issues/421

- 还有一个不是坑，但是容易忽视
```javaScript
    output: {
      filename: isEnvProduction
        ? 'static/js/[name].[contenthash:8].js'
        : isEnvDevelopment && 'static/js/[name].js', // <-- 一定要改output的名字，不然固定一个名字，除了index以外的画面无法显示。
    }
```

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
    + 但是它提供了一种解决方案，在关闭浏览器的同时，还能持续工作，你可以给他推送消息。

## eject
- 在create-react-app 之后 有一个 eject命令，这个命令会把react-scripts 这个包分解导入到项目中去，如果项目的构建很复杂不能够满足自己的需求（比如MPA），可以考虑eject但是这个命令无法回滚，执行前清先保存代码。

## hooks 中绑定redux的另一种写法
- 在最外层绑定所有的
```javaScript
// 在最外层直接传递 state 和 dispatch
export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch };
    }
)(App);

// 在函数中通过useMemo 和 bindActionCreators 来绑定redux
const highSpeedCbs = useMemo(() => {
    return bindActionCreators(
        {
            toggle: toggleHighSpeed,
        },
        dispatch
    );
}, []);


// 最后在组件参数中解构
<HighSpeed highSpeed={highSpeed} {...highSpeedCbs} />

// redux 的 state 的值 是通过 上层 props 一层一层传递下来的
```