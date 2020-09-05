// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'

// Routering
export default new Router({
    // mode: 'history', //контроль ставить ли хэш или нет
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/shop/:id',
            name: 'product',
            component: Product
        },
    ]
})