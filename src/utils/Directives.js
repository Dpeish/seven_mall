// 自定义图片占位加载组件
import Vue from 'vue';

import loadImg from '@/assets/common/pictureLoad.gif';
import errorUrl from '@/assets/common/notimg.png';

var Directives = {};

Directives.install = (Vue) => {
  // 图片占位加载
  Vue.directive('imgload', {
    bind(el, url) {
      el.src = loadImg;
      el.vdom = new Image();
      console.log(url)
      el.vdom.src = url.value;
      el.vdom.onload = () => {
        el.src = url.value;
      };
      el.vdom.onerror = () => { 
        el.src = errorUrl;
      }
    },
    update(el, url) {
      if (url.value !== url.oldvalue) {
        el.src = loadImg;
        el.vdom = new Image();
        el.vdom.src = url.value;
        el.vdom.onload = () => {
          el.src = url.value;
        };
        el.vdom.onerror = () => { 
          el.src = errorUrl;
        }
      }
    }
  });
}

export default Directives;