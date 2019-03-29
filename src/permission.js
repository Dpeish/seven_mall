import router from './router'

router.beforeEach((to, from, next) => {
  // 顶部进度条
  var userToken = localStorage.getItem('welcome');
  if (userToken) {
    // 如果存在用户的Token 则不用再次登录
    if (to.path == '/login') {
      // 如果用户已经登录过了，进入login路由的话 免登陆进入首页
      next('/')
    } else {
      next()
    }
  } else {
    // 用户Token 不存在的话重定向到登录页面
    if (to.path == '/login') {
      next();
    } else {
      next('/login');
    }
  }

})