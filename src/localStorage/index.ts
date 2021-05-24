/*
  @file: localStorage 本地存储
 */
const get = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

const set = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

const del = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

export default {
  get,
  set,
  del,
};