import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// 本地中文化
const i18n = new VueI18n({
  locale: 'zh_CN'
})

Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});


// 配置默认提示信息
Validator.localize({
  zh_CN: {
    messages: {
      required: (name) => { return name + '不能为空' },
      email: () => '邮箱格式错误'
    }
  }
})

// 自定义验证规则

// 密码
VeeValidate.Validator.extend('password',{
  getMessage: () => { return "请输入正确的密码" },
  validate: (value) => { return /^(?:0|[1-9][0-9]?|100)$/.test(value);}
});


