import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from '../views/BookManage'
import AddBook from '../views/AddBook'
import BookEdit from '../views/BookEdit'
import DeleteBook from '../views/DeleteBook'
import App from "../App";
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'图书管理',
    component:Index,
    redirect:'/BookManage',
    children:[
      {
        path:'/BookManage',
        name:'查询书籍',
        component:BookManage
      },
      {
        path:'/AddBook',
        name:'增加书籍',
        component:AddBook
      },
    ],

  },
  {
    path:'/BookEdit',
    component:BookEdit
  },
  {
    path:'/DeleteBook',
    component:DeleteBook
  },
  {
    path:'/navigation',
    name:'导航2',
    component:App,
    children:[
      {
        path:'/PageThree',
        name:'页面3',
        component:BookEdit
      },
      {
        path:'/PageFour',
        name:'页面4',
        component:DeleteBook
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
