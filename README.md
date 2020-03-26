# Spring-boot-Vue
---
# 该项目用于展示如何通过前后端分离技术创建web工程,前端使用Vue+Elementui,后端使用Spring boot,数据库使用MySQL</br>
---
* 生产环境：windows+Vue2.x+Elementui+Spring Boot+mysql8.0</br>
* 生产工具IDEA</br>
---
# 准备工作</br>
---
### 一、安装Vue及Elementui:</br>
1. 先下载node.js,[下载node.js](https://nodejs.org/zh-cn/).下载完成后输入node -v若出现版本号，则说明安装成功</br>
2. 设置淘宝NPM镜像源：`npm install -g cnpm --registry=https://registry.npm.taobao.org`</br>
3. Vue-cli:`cnpm install vue-cli -g`</br>
4. `npm install -g @vue/cli`使用该命令升级cli版本，3.x版本后的Vue支持GUI操作,输入`Vue -V`确认Vue是否安装成功
5. 在Vue中安装Elementui:`cnpm install element-ui --save`</br>
---
### 二、创建一个Vue工程：</br>
* 方式一：cd 命令进入想要存放vue项目的文件夹，然后输入：`vue init webpack firstapp`(创建一个名为firstapp的Vue项目)</br>
其中几个相应选项的设置见下图：
![](https://upload-images.jianshu.io/upload_images/11329965-88a69349b40ee7fe.png?imageMogr2/auto-orient/strip|imageView2/2/w/937/format/webp)
* 方式二：输入：`vue ui`(进入图形化操作界面)</br>
会在浏览器中看到一个图形化界面:![Vue ui](https://github.com/Gaoshiguo/Spring-boot-Vue/blob/master/%E6%88%AA%E5%9B%BE/1.png)GUI的相应操作比较直观，不做过多赘述，相应的配置与方式一基本一致。</br>
---
** 待项目创建完毕后，cd进入项目所在的文件夹下输入命令：`npm run dev`如果是3.x的cli则需输入：`npm run serve`</br>
在浏览器中输入：`http://localhost:8080`若可以看到如下画面,则说明第一个vue项目已经运行起来了。</br>
![Vue ui](https://github.com/Gaoshiguo/Spring-boot-Vue/blob/master/%E6%88%AA%E5%9B%BE/2.png)
