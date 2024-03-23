import { ref } from 'vue';

export interface LoadingStore {
  loading: boolean;
  setLoading: (state: boolean) => void;
}

const loading = ref<boolean>(false);

const useLoadingStore = (): LoadingStore => {
  const setLoading = (state: boolean): void => {
    Object.assign(loading, state);
  };

  return {
    loading: loading.value,
    setLoading,
  };
};

export default useLoadingStore;
