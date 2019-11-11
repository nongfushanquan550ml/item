//引入组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'
import Home from '../pages/Home.vue'
import Recover from '../pages/Recover.vue'
import Dail from '../pages/Dail.vue'
import Topone from '../pages/Topone.vue'
import List from '../pages/list.vue'
import Logi from '../pages/Login_d.vue'
import Mo from '../pages/MoreC.vue'
import Quit from '../pages/Quit.vue'
Vue.use(VueRouter)
//创建路由
const routes = [
    //当页面为http://localhost:8080/home,在<router-view>加载Home组件
    {
        path: '/main', component: Main, name: 'main',
        children:
            [{
                path: 'home', component: Home, name: 'home',
                // 别名
                alias: 'h',
            },
            { path: 'recover', component: Recover, name: 'recover' },
            { path: 'list', component: List, name: 'list' },
            { path: 'topone', component: Topone, name: 'topone' },
            ]
    },
    //动态路由 
    { path: '/dail/:id', component: Dail, name: 'dail' },
      // 默认重定向
    {
        path: '/',
        redirect: '/main/home'
    },
    { path: '/logi', component: Logi, name: 'logi' },
    { path: '/more', component: Mo, name: 'more' },
    { path: '/quit', component: Quit, name: 'quit' },

]
const router = new VueRouter({
    routes
})
export default router