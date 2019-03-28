/**
 * 手机号格式化
 * @param {String} phone
 */
const formatPhone = (phone) => {
  phone = phone.toString();
  return phone.substr(0, 3) + '****' + phone.substr(7, 11);
};

/**
 * 4位一空格（格式化银行卡）
 * @param {String} val
 */
const formatBank = (val) => {
  if (val) {
      return val.toString().replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
  }
};

/**
 * 价格格式化
 * @param {String} val
 */
const formatPrice = (val) => {
  if (val) {
    val = Number(val)
    return `￥${val.toFixed(2)}`
  }
};

export default {
  formatPhone,
  formatBank,
  formatPrice
}