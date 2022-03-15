# approval-process-fe

#### 介绍
工作室官网后台前端部分

#### 软件架构
软件架构说明


#### 安装教程

1.  安装node -- 安装细节请自寻搜索教程（node@14.18.1 cnpm@7.1.0 npm@6.14.15）
2.  安装cnpm


#### 使用说明

1.  使用cnpm i安装依赖
2.  如果出现(in ./node_modules/_vuex@4.0.2@vuex/dist/vuex.esm-browser.js 1077:9-14 ")报错，则是vuex版本问题，使用cnpm uninstall vuex 卸载当前vuex版本，使用cnpm i vuex@3 --save 安装3版本的vuex
3.  package-lock.json请勿删除，这个是用于锁定插件版本使用的
4.  npm run dev 启动项目
5.  接口掉调用先使用mock数据，这是一个mock平台（https://www.fastmock.site/#/)
6.  在axios中开发环境是默认是用mock数据，在生产环境一定是使用线上接口，如果想要在测试环境不使用mock，只需在请求params中传入mock: false

## 项目目录结构
``` javascript
//    -index.html                页面入口
//    build                      打包输出文件
//    config                     全局配置文件
//    
//    src
//        |-api                       获取接口数据
//            |-login.js              登录页面的相关接口
//        |-assets                    静态文件
//        |-components                公用组件
//        |-router                    路由
//        |-store                     全局状态管理
//        |-utils                     全局公共方法
//        |-views
//            |-login            登录页面
//                      |-coms        登录页面组件
//                      |-utils       登录页面工具函数、变量参数、请求等
//                      |-index.vue   登录首页
//                      |-xxxxx.vue   注册页面
//            |-home             首页       
//        |-App.vue                   根实例
//        |-main.js                   入口js
```
## 代码提交说明
``` javascript
//    master                            生产分支
//    release                           预生产分支
//    feature                           版本分支
//            v1.0.0(第一个0是大版本迭代时才会累加，第二个0是小版本功能迭代就累加)
//    hotfix                            bug修复分支
//            20220302(bug修复按照日期命名)
//    代码提交规范：先是在master拉取新的功能分支，例如：feature/v1.0.1
//   （在拉取新分支之前一定要先把线上最新的代码拉取下来）,然后在拉取的分支
//    中进行开发，开发完之后合并代码到test测试分支并且部署到测试环境，测试
//    环境没问题之后在将代码合并到预生产分支，也就是stagin分支，再将其部
//    署到预生产环境，测试验证，经过两轮测试没问题之后，再将代码合并到生产分支
//    master，再让运维将代码部署到生产环境，最后测试进行生产回归测试，若没问题
//    上线结束，若有bug（生产代码回滚，同时拉取hotfix/20220303分支进行bug修复）
//   
```

# approval-process-fe

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
