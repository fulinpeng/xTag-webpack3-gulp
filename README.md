## gulp

* 安装
  * 本地安装 gulp：`npm i gulp -D`
  * gulp 编译 es6：`npm i gulp-babel babel-core babel-preset-env -D`
* 用 gulp 编译除了 public 以外所有 es6 文件，代替`手动编译与System.js`
* 用 gulp.watch 监听文件变化自动执行 task
* clean 这个任务不能和其他任务写在一起
  * 这里是异步执行的，若需要写在一起，必须先改成同步执行
  * 需要引入同步执行的插件`未实现`

## webpack

* 插件
  * better-npm-run 方便配置自定义命令
    * 可以代替 webpack.DefinePlugin 配置环境变量，webpack3 自带的插件
  * webpack-livereload-plugin 实时刷新页面
    * 安装时注意版本，加上@1
    * 浏览器要安装 livereload 插件，配合该 webpack 插件使用 `代替devServer`
  * webpack.optimize.UglifyJsPlugin 压缩 js
  * OptimizeCssAssetsPlugin 压缩 css
    * 安装时注意版本，加上@3.2.0

## 按照 chuck 规律分发文件并编译进 swig 中

* webAssetsHelp.js 是 HtmlWebpackPlugin 的辅助函数，用于提取并修改 chunk 文件路径，修改 script、link 标签的插入位置

## 运行

* 打开 php 服务器运行对应文件
* 根目录下执行 gulp
* 进入 build 目录执行 npm run dev
