const loadingStore = {
  namespaced: false,
  state: () => ({
    active: false,
  }),
  mutations: {
    LOADING(state: any, payload: any[]) {
      state.active = payload;
    },
  },
};

export default loadingStore;
