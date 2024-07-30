<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue';
import { TSToast, TSLoading, useLoadingStore } from 'tsv2-library';
import ExampleComponent from './components/common/ExampleComponent.vue';

const { setLoading } = useLoadingStore();

onBeforeMount(() => {
  setLoading(true); // Start Loading
});

onMounted(() => {
  /**
   * This is an example only. You may remove this.
   */
  setTimeout(() => {
    setLoading(false); // Stop Loading
  }, 1000);
});
</script>

<template>
  <ExampleComponent @update:model-value="console.log($event)" foo="product" />
  <router-view />
  <TSToast />
  <TSLoading />
</template>
