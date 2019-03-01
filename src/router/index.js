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
// 我的页面主页面
const MineParent = r => require.ensure([], () => r(require('@/views/mine/index.vue')), 'MineParent')
// 我的
const Mine = r => require.ensure([], () => r(require('@/views/mine/children/mine.vue')), 'Mine')
// 我的页面-我的账号信息
const MineProfiles = r => require.ensure([], () => r (require('@/views/mine/children/profiles.vue')) , 'MineProfiles')
// 我的页面 二维码
const MineQrcode = r => require.ensure([], () => r (require('@/views/mine/children/qrcode.vue')) , 'MineQrcode')
// 我的页面 全部订单
const MineOrder = r => require.ensure([], () => r (require('@/views/mine/children/orderManag.vue')) , 'MineOrder')

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
          meta: {
            id: 0,
            navShow: true // 导航是否显示
          },
          component: Index
        }, {
          path: '/shop',
          name: 'shop',
          meta: {
            id: 1,
            navShow: true // 导航是否显示
          },
          component: Shop
        }, {
          path: '/cart',
          name: 'cart',
          meta: {
            id: 2,
            navShow: true // 导航是否显示
          },
          component: Cart
        }, {
          path: '/mineParent',
          meta: {
            id: 3,
            navShow: true // 导航是否显示
          },
          redirect: '/mine',
          component: MineParent,
          children: [
            {
              // 我的页面 - 我的
              path: '/mine',
              name: 'mine',
              component: Mine,
              meta: {
                id: 4,
                navShow: true
              }
            }, {
              // 我的页面 - 我的
              path: '/mine/profiles',
              name: 'profiles',
              component: MineProfiles
            }, {
              // 我的   二维码
              path: '/mine/qrcode',
              name: 'qrcode',
              component: MineQrcode
            }, {
              // 我的 全部订单
              path: '/mine/order',
              name: 'orderManag',
              component: MineOrder
            }
          ]
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
