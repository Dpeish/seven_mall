import Vue from 'vue';
// 判断参数是否是其中一个
export function oneOf (value, valueList) {
  for (let i = 0; i < valueList.length; i++) {
    if (value === valueList[i]) {
      return true;
    }
  }
  return false;
}