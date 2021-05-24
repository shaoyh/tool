/**
 * 防抖
 * @param func {*}  执行函数
 * @param wait {*}  节流时间,毫秒
 */
const debounce = (func, wait) => {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait);
  }
};

export default debounce;