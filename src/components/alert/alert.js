import Notification from './notification.js';

let messageInstance;

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance();
  // 获取alert实例并返回
  return messageInstance;
}

/**
 * @param {String} type 弹窗类型
 */
const iconTypes = {
  'info': 'icon-alert-info',
  'success': 'icon-alert-success',
  'warning': 'icon-alert-warning',
  'error': 'icon-alert-error',
  'loading': 'icon-alert-loading'
}

/**

 * 方法说明

 * @method notice 

 * @for 所属类名

 * @param {String} content 显示的提示信息，默认为空

 * @param {Number} duration 显示时间 默认1.5s

 * @param {Boolean} closable 是否显示关闭按钮 默认false

 * @param {String} type 弹窗类型

 * @param {String} position 弹窗位置默认top

 * @return {返回值类型} 返回值说明

 */

function notice(content = '', duration = 1.5, closable = false, type) {
  const iconType = iconTypes[type]
  let instance = getMessageInstance();

  instance.add({
    content: content,
    duration: duration,
    closable: closable,
    type: iconType
  });
}

export default {
  info (options) {
    return this.message('info', options)
  },
  success (options) {
    return this.message('success', options)
  },
  warning (options) {
    return this.message('warning', options)
  },
  error (options) {
    return this.message('error', options)
  },
  loading (options) {
    return this.message('loading', options)
  },
  message (type, options) {
    if (typeof options === 'string') {
      // 如果用户只传了字符串进来,就直接显示，其他选中都默认
      options = { content: options }
    };
    return notice(options.content, options.duration, options.closable, type)
  }
}