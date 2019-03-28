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


export function findTarget (arr, attr, val) { 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][attr] == val) {
      return true;
    }
  }
  return false;
};