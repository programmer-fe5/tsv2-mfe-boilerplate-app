<script setup lang="ts">
import { computed } from 'vue';
import { useLoadingStore } from '@/store';
import { TSToast } from 'tsv2-library';

const { loading } = useLoadingStore();
const isLoading = computed(() => loading);
</script>

<template>
  <router-view />
  <TSToast />
  <Loading v-model:active="isLoading" />
</template>
