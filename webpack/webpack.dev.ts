import path from 'path';
// import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServerConfiguration;
}
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: '白紫',
  filename: 'index.html',
  template: path.resolve(__dirname, './../public/index.html')
})
const config: Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, './../src/main.ts'),
  output: {
    path: path.resolve(__dirname, './../dist'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './../dist'),
    hot: true,
    inline: true,  //缺少该配置，会出现上面的错误
    historyApiFallback: true
  },
  plugins: [htmlWebpackPlugin, new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      //resolve 获取绝对路径的API，join也可以获取; @ 也可以用 $,就是个 别名
      '@': path.resolve(__dirname, './../src')   // 设置 src的绝对路径 
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

    ],

  }
};

export default config;