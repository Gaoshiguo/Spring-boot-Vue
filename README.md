# Spring-boot-Vue
---
# <font color='red'>该项目用于展示如何通过前后端分离技术创建web工程,前端使用Vue+Elementui,后端使用Spring boot,数据库使用MySQL</font></br>
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
![Vue ui](https://github.com/Gaoshiguo/Spring-boot-Vue/blob/master/%E6%88%AA%E5%9B%BE/2.png)</br>
### 三、引入Elementui前端模板</br>
打开[Elementui网址](https://element.eleme.cn/#/zh-CN/component/container)</br>
我们在容器布局中选择一个布局与我们需求类似的Elementui模板源码
```Vue
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
该代码的布局格式如下图所示：
![Element](https://github.com/Gaoshiguo/Spring-boot-Vue/blob/master/%E6%88%AA%E5%9B%BE/3.png)</br>
我们将上述Elementui模板放入刚刚新建的Vue工程里的App.vue</br>
可以看到该模板已经被我们成功导入了</br>
***
<font face='宋体'><font color='red'>Elementui相关标签的说明：</font></br>
`el-container:`构建整个页面框架</br>
>`el-aside`:构建左侧菜单</br>
>`el-menu`:左侧菜单，常用属性说明：</br>
>>`default-openeds`:默认展开的菜单，通过index关联，用法如下：`<el-menu :default-openeds="['1', '2','3']">`</br>
>>`default-active`:默认选中的菜单，通过index关联，用法同`default-openeds`</br>
>`el-submenu`:可展开的菜单，其常用的属性有：</br>
>>`index`:菜单的下标，属于文本类型</br>

***
