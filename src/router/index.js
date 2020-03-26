import Vue from 'vue'
import Router from 'vue-router'  // 引入vue-router

// 引入要跳转的vue组件
import Manage from '@/page/admin/Manage'
import userList from '@/page/admin/userList'
import addUser from '@/page/admin/addUser'
import shopList from '@/page/admin/shopList'
import addShop from '@/page/admin/addShop'

Vue.use(Router)  // 在vue中注入Router
// 配置路由路径
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login  // 需要跳转的组件
    },
    // {
    //     path: '/Manage',
    //     name: 'Manage',
    //     component: Manage,
    //     children: [{
    //         path: '/userList',
    //         component: userList,
    //         meta: ['数据管理', '用户列表']
    //     },
    //     {
    //         path: '/shopList',
    //         component: shopList,
    //         meta: ['数据管理', '商品列表']
    //     },
    //     {
    //         path: '/addUser',
    //         component: addUser,
    //         meta: ['添加数据', '添加用户']
    //     },
    //     {
    //         path: '/addShop',
    //         component: addShop,
    //         meta: ['添加数据', '添加商品']
    //     }
    //     ]
    // },
]
// 将路径注入到Router中
var router = new Router({
    'mode': 'history',
    routes
})
// 导出路由
export default router;