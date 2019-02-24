import Alert from './alert.vue';
import Vue from 'vue';

/*
 * @newInstance 创建一个新实例
 * @param { Object } properties 属性
*/

Alert.newInstance = properties => {
  const props = properties || {};
  // 创建一个vue实例
  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props: props
      })
    }
  });
  
  // 手动挂载 在body上生成一个alert
  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  // 组件实例
  const alert = Instance.$children[0];

  return {
    add (noticeProps) {
      alert.add(noticeProps);
    },
    remove (name) {
      alert.remove(name);
    }
  }
};

export default Alert;