import webpack, { Configuration } from "webpack";
import webpackPaths from "./webpack.paths";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const config: Configuration = merge(baseConfig, {
  mode: "development", // 开发模式,打包更加快速,省了代码优化步骤
  devtool: "source-map", // 源码调试模式,后面会讲

  // @ts-ignore
  devServer: {
    port: 3000,
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    // webpack5 只要devServer.hot 为 true, webpack5 已经内置了 HotModuleReplacementPlugin ,webpack4 需要添加该插件
    hot: true, // 开启热更新，后面会讲react模块热替换具体配置
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: webpackPaths.publicPath, //托管静态资源public文件夹
    },
  },

  plugins: [
    // hot:true 只会生效 style-laoder 的热替换，并且修改App.tsx,浏览器会自动刷新后再显示修改后的内容
    // ReactRefreshWebpackPlugin 是在不需要刷新浏览器的前提下模块热更新,并且能够保留react组件的状态。
    // ReactRefreshWebpackPlugin 需要配合 react-refresh/babel 实现
    new ReactRefreshWebpackPlugin(), // 添加热更新插件
  ],
});

export default config;
