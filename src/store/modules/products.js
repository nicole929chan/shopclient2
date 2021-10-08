export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        slug: 'fake-product-1',
        title: 'Fake Product 1',
      },
    ],
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {
    add(state, payload) {
      state.products.push(payload);
    },
  },
  actions: {
    addProduct({ commit }, payload) {
      commit('add', payload);
    },
  },
};
