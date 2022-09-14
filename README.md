## 构建现代前端项目要哪三步？

1. 模块打包器(webpack、snowpack、vite...) 说到底就是允许我们分模块写, 然后打包器们帮助我们打包到一起, 加上loader加载其他 css 和 img等其他非js文件的打包
2. 代码转义器(babel、swc...)  也叫js编译器, 将jsx、ts等非js语言和js新特性编译成浏览器支持的模样
3. 前端框架

## 构建一个 swc 的react项目

### 新建一个文件夹 安装必要包

安装 react 组件
`yarn add react react-dom`

安装webpack相关
`yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin`

安装 swc
`yarn add -D @swc/cli @swc/core swc-loader`

### 写配置文件

1. webpack
之前使用babel-loader 的地方现在使用 swc-loader[配置方法](https://swc.rs/docs/usage/swc-loader)
2. swc
[配置文档](https://swc.rs/docs/configuration/compilation)

### 添加一些细节

typescript 使用ts进行开发

eslint,prettier 规范美化代码格式

husky,lint-staged 实现提交前的统一优化

