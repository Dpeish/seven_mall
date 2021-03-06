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

// 商品页面主页面
const ShopParent = r => require.ensure([], () => r(require('@/views/shop/index.vue')), 'ShopParent')
// 商品
const Shop = r => require.ensure([], () => r(require('@/views/shop/children/shop.vue')), 'Shop')
// 商品搜索
const ShopSearch = r => require.ensure([], () => r(require('@/views/shop/children/shopsearch.vue')), 'ShopSearch')
// 商店信息
const ShopInfo = r => require.ensure([], () => r(require('@/views/shop/children/shopinfo.vue')), 'ShopInfo')
// 商品详情
const ShopGoods = r => require.ensure([], () => r(require('@/views/shop/children/goodsDetail.vue')), 'ShopGoods')
// 选择店铺
const ChooseStore = r => require.ensure([], () => r(require('@/views/shop/children/chooseStore.vue')), 'ChooseStore')


// 购物车主界面
const CartParent = r => require.ensure([], () => r(require('@/views/cart/index.vue')), 'CartParent')
// 购物车
const Cart = r => require.ensure([], () => r(require('@/views/cart/children/cart.vue')), 'Cart')

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
// 我的页面 我的积分
const MineIntegral = r => require.ensure([], () => r (require('@/views/mine/children/integral.vue')) , 'MineIntegral')
// 我的页面 我的优惠券
const MineCoupon = r => require.ensure([], () => r (require('@/views/mine/children/coupon.vue')) , 'MineCoupon')
// 我的页面 订单评价
const MineComments = r => require.ensure([], () => r (require('@/views/mine/children/comments.vue')) , 'MineComments')
// 我的页面 我的收藏
const MineCollect = r => require.ensure([], () => r (require('@/views/mine/children/collect.vue')) , 'MineCollect')
// 我的页面 收货地址
const MineAddress = r => require.ensure([], () => r (require('@/views/mine/children/address.vue')) , 'MineAddress')
// 我的页面 新增收货地址
const MineAddressAdd = r => require.ensure([], () => r (require('@/views/mine/children/address-add.vue')) , 'MineAddressAdd')
// 我的页面 使用反馈
const MineFeedback = r => require.ensure([], () => r (require('@/views/mine/children/feedback.vue')) , 'MineFeedback')
// 我的页面 系统设置
const MineSetting = r => require.ensure([], () => r (require('@/views/mine/children/setting.vue')) , 'MineSetting')


// 测试页面
const MyTest = r => require.ensure([], () => r (require('@/views/test/index.vue')) , 'MyTest')

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
          path: '/ShopParent',
          meta: {
            navShow: true // 导航是否显示
          },
          redirect: '/shop',
          component: ShopParent,
          children: [
            {
              // 商铺
              path: '/shop',
              name: 'shop',
              component: Shop,
              meta: {
                id: 1,
                navShow: true
              }
            }, {
              // 商品搜索
              path: '/shopsearch',
              name: 'shopsearch',
              component: ShopSearch
            }, {
              // 店铺信息
              path: '/shopinfo',
              name: 'shopinfo',
              component: ShopInfo
            }, {
              // 商品详情
              path: '/goodsDetail',
              name: 'goodsDetail',
              component: ShopGoods
            }, {
              // 选择店铺
              path: '/chooseStore',
              name: 'ChooseStore',
              component: ChooseStore
            }
          ]
        }, {
          path: '/cartParent',
          meta: {
            navShow: true // 导航是否显示
          },
          redirect: '/cart',
          component: CartParent,
          children: [
            {
              // 购物车
              path: '/cart',
              name: 'cart',
              component: Cart,
              meta: {
                id: 2,
                navShow: true
              }
            }
          ]
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
            }, {
              // 我的 我的积分
              path: '/mine/integral',
              name: 'integral',
              component: MineIntegral
            }, {
              // 我的 我的优惠券
              path: '/mine/coupon',
              name: 'coupon',
              component: MineCoupon
            }, {
              // 我的 订单评价
              path: '/mine/comments',
              name: 'comments',
              component: MineComments
            }, {
              // 我的 我的收藏
              path: '/mine/collect',
              name: 'collect',
              component: MineCollect
            }, {
              // 我的 收货地址 
              path: '/mine/address',
              name: 'address',
              component: MineAddress
            }, {
              // 我的 新增收货地址
              path: '/mine/address-add',
              name: 'addressAdd',
              component: MineAddressAdd
            }, {
              // 我的 使用反馈 
              path: '/mine/feedback',
              name: 'feedback',
              component: MineFeedback
            }, {
              // 我的 系统设置 
              path: '/mine/setting',
              name: 'setting',
              component: MineSetting
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
    }, {
      path: '/test',
      name: 'test',
      component: MyTest
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})


