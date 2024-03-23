import { Menus } from '@/types/breadcrumb';

const breadcrumbStore = {
  namespaced: false,
  state: () => ({
    menus: [],
  }),
  mutations: {
    SET_BREADCRUMB(state: any, payload: Menus[]) {
      state.menus = payload;
    },
  },
};

export default breadcrumbStore;
