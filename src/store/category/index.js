export default {
  namespaced: true,
  state: {
    active: 4,
    tree: {
      name: 'cate',
      id: 1,
      open: false,
      children: [
        {
          name: 'cate2',
          id: 2,
          open: false,
          children: [
            {
              name: 'cate4',
              id: 4,
              open: false,
              children: [],
            },
            {
              name: 'cate5',
              id: 5,
              open: false,
              children: [],
            }
          ]
        },
        {
          name: 'cate3',
          id: 3,
          open: false,
          children: [],
        }
      ]
    }
  }
}