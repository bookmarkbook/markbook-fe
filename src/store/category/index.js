export default {
  namespaced: true,
  state: {
    active: 4,
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
    }
  }
}