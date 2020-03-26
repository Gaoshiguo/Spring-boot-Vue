# Spring-boot-Vue
---
#该项目用于展示如何通过前后端分离技术创建web工程,前端使用Vue+Elementui,后端使用Spring boot,数据库使用MySQL</br>
---
*生产环境：windows+Vue2.x+Elementui+Spring Boot+mysql8.0</br>
*生产工具IDEA</br>
---
#准备工作</br>
##一、安装Vue及Elementui:</br>
1.先下载node.js,[下载node.js](https://nodejs.org/zh-cn/).下载完成后输入node -v若出现版本号，则说明安装成功</br>
2.设置淘宝NPM镜像源：`npm install -g cnpm --registry=https://registry.npm.taobao.org`</br>
3.Vue-cli:`cnpm install vue-cli -g`</br>
4.`npm install -g @vue/cli`使用该命令升级cli版本，3.x版本后的Vue支持GUI操作,输入`Vue -V`确认Vue是否安装成功
5.在Vue中安装Elementui:`cnpm install element-ui --save`</br>
---
##二、创建一个Vue工程：</br>
*方式一：输入：`vue init webpack firstapp`(创建一个名为firstapp的Vue项目)</br>
