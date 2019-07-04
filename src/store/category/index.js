function getViewData(data) {
  function extract(node) {
    const ret = {};
    ret.name = node.categoryName;
    ret.id = Math.random().toString();
    ret.open = true;
    ret.bookmarks = node.bookmarks.map(bookmark => { return { id: Math.random().toString(), ...bookmark } });
    ret.children = [];
    if (node.children) {
      node.children.forEach(item => {
        ret.children.push(extract(item));
      });
    }
    return ret;
  }
  const root = extract(data)
  return root;
}

import {data as D} from './data'


export default {
  namespaced: true,
  mutations: {
  },
  state: {
    active: null,
    tree: getViewData(D),
  }
}