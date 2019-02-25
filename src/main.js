// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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

import components from '@/components/';
//动态挂载组件库中的组件
Object.keys(components).forEach((key) => {
	var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
	Vue.component(`o${name}`, components[key])
});

Vue.use(Directives)
FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$toast = Alert;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
