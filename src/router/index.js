import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Index from '@/views/index'

const Login = r => require.ensure([], () => r(require('@/views/Login/index.vue')), 'login')

// 找回密码
const ResetPassword = r => require.ensure([], () => r(require('@/views/Login/ResetPassword.vue')), 'ResetPassword')
// 注册
const Register = r => require.ensure([], () => r(require('@/views/Login/register.vue')), 'Register')
// 用户使用协议
const Agreement = r => require.ensure([], () => r(require('@/views/Login/agreement.vue')), 'Agreement')

// 商品
const Shop = r => require.ensure([], () => r(require('@/views/shop/index.vue')), 'Shop')
// 购物车
const Cart = r => require.ensure([], () => r(require('@/views/cart/index.vue')), 'Cart')
// 我的页面
const Mine = r => require.ensure([], () => r(require('@/views/mine/index.vue')), 'Mine')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'index',
          component: Index
        }, {
          path: '/shop',
          name: 'shop',
          component: Shop
        }, {
          path: '/cart',
          name: 'cart',
          component: Cart
        }, {
          path: '/mine',
          name: 'mine',
          component: Mine
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/ResetPassword',
      name: 'reset-password',
      component: ResetPassword
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/agreement',
      name: 'agreement',
      component: Agreement
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
