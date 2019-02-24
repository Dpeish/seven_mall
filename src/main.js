// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui' // mint-ui
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'

import Alert from '@/components/alert/alert.js';

import '@/utils/validate.js' // 表单验证

import '@/utils/rem.js'; // rem2px
import FastClick from 'fastclick' // 消除移动的300ms点击延迟
import '@/assets/styles/iconfont.css' // 图标
import '@/styles/index.scss' // global css
import '@/icons'

import Directives from '@/utils/Directives';

Vue.use(MintUI)
Vue.use(Directives)
FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$Alert = Alert;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
