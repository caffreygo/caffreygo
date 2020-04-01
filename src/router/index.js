import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)  // 在vue中注入Router

// 路由懒加载
const Login = () => import("@c/login/Login")
const PageHeader = () => import("@c/PageHeader")
const ScheduleView = () => import("@c/ScheduleView")


const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/schedule/my',
        name: 'schedule',
        meta: {
            requireAuth: true
        },
        components: {
            default: ScheduleView,
            header: PageHeader
        }
    }
    // {
    //     path: '/Manage',
    //     name: 'Manage',
    //     component: Manage,
    //     children: [{
    //         path: '/userList',
    //         component: userList,
    //         meta: ['数据管理', '用户列表']
    //     }
    //     ]
    // },
]


// 将路径注入到Router中
var router = new Router({
    'mode': 'history',
    routes
})

const isLogin = () => Boolean(localStorage.getItem('token'))
router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.requireAuth)) {
        if (!isLogin()) {
            next({
                path: '/',
                replace: true
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
// 导出路由
export default router;