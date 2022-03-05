import Vue from 'vue'
import VueRouter from 'vue-router'


// import Msite from '../pages/Msite/Msite'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Search from '../pages/Search/Search'
const Msite = () => import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
Vue.use(VueRouter)
//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,//返回路由组件的函数，只有执行函数才会加载,第一次请求对应的路由路径时执行
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'goods',
                    component:ShopGoods
                },
                {
                    path:'ratings',
                    component:ShopRatings
                },
                {
                    path:'info',
                    component:ShopInfo
                },
                {
                    path:'',
                    redirect:'/shop/goods'
                },
            ]
        }
    ]
})