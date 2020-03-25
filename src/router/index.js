import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/Postlist'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      name:'root',
      path:'/',
      components:{
        main:PostList
      }
    },
    {
    name:'post_content',
    path:'/topic/:id&author=:name',
    components:{
      main:Article,
      slidebar:SlideBar
    }},
    {
    name:'user_info',
    path:'/userinfo/:name',
    components:{
      main:UserInfo
    }
  }]
})

export default router
