<script setup lang="ts">
import { ref } from 'vue';
import { TSBreadcrumb, TSCard, TSTabMenu } from 'tsv2-library';
// eslint-disable-next-line capitalized-comments
// import { BreadcrumbMenu } from 'tsv2-library/dist/src/components/v2/Breadcrumb/Breadcrumb.vue';
import { useBreadcrumbStore } from '@/store';

const { breadcrumbs } = useBreadcrumbStore();

const tabMenuItems = ref([
  {
    label: 'Tab',
    to: 'tab',
  },
  {
    label: 'Another Tab',
    to: 'another-tab',
  },
]);
</script>

<template>
  <TSBreadcrumb :menus="breadcrumbs" />

  <TSCard>
    <template #content>
      <TSTabMenu :active-index="0" :menu="tabMenuItems" type="tab" />
      <router-view />
    </template>
  </TSCard>
</template>
