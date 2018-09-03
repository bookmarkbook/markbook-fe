export default {
  namespaced: true,
  mutations: {
    startDragTree(state, { e, id }) {
      state.movingTreeItem = id;
      state.movingCurrentX = e.pageX;
      state.movingCurrentY = e.pageY;
      state.movingStartX = e.pageX;
      state.movingStartY = e.pageY;
      state.isMovingTree = true;
    },
    updateDragPosition(state, e) {
      state.movingCurrentX = e.pageX;
      state.movingCurrentY = e.pageY;
    },
    endDragTree(state) {
      state.movingTreeItem = undefined;
      state.isMovingTree = false;
    }
  },
  state: {
    active: 4,
    isMovingTree: false,
    movingTreeItem: undefined,
    movingStartX: 0,
    movingStartY: 0,
    movingCurrentX: 0,
    movingCurrentY: 0,
    tree: {
      name: 'computer',
      id: 1,
      open: true,
      children: [
        {
          name: 'graphics',
          id: 2,
          open: true,
          children: [
            {
              name: 'opengl',
              id: 4,
              open: false,
              children: [],
            },
            {
              name: 'd3d',
              id: 5,
              open: false,
              children: [],
            }
          ]
        },
        {
          name: 'internet',
          id: 3,
          open: false,
          children: [],
        }
      ]
    },
    filteredList: [
      {
        id: 0,
        title: 'GLSL type checker and minifier online demo',
        link: 'http://evanw.github.io/glslx/'
      },
      {
        id: 1,
        title: 'MCMC和Gibbs Sampling算法 - 简书',
        link: 'http://evanw.github.io/glslx/'
      },
      {
        id: 2,
        title: 'webgl insights',
        link: 'http://evanw.github.io/glslx/'
      },
      {
        id: 3,
        title: 'online demo',
        link: 'http://evanw.github.io/glslx/'
      },
      {
        id: 4,
        title: 'GLSL type checker ',
        link: 'http://evanw.github.io/glslx/'
      },
    ]
  }
}