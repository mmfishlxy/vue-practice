import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './home'
import Page1 from './page1'
import Page2 from './page2'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            // 为Page1设置路由参数
            path: '/page1:color',
            name: 'Page1',
            component: Page1
        },
        // {
        //     // 为Page1设置路由参数
        //     path: '/page2:id:name',
        //     name: 'Page2',
        //     component: Page2
        // },
        {
            path: '/page2',
            name: 'Page2',
            component: Page2
        }
    ]
})