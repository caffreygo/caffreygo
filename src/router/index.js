import Vue from 'vue'
import Router from 'vue-router'

import PageOne from 'components/PageOne'
import PageTwo from 'components/PageTwo'

Vue.use(Router)  // 在vue中注入Router

const routes = [
    {
        path: '/pageone',
        name: 'one',
        component: PageOne
    },
    {
        path: '/pagetwo',
        name: 'two',
        component: PageTwo
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