export default {
  namespaced: true,
  state: {
    categories: [
      { id: 1, slug: 'fake-category-1', title: 'Fake Category 1' },
      { id: 2, slug: 'ake-category-2', title: 'Fake Category 2' },
    ],
  },
  getters: {
    categories(state) {
      return state.categories;
    },
  },
  mutations: {
    //
  },
  actions: {
    //
  },
};
