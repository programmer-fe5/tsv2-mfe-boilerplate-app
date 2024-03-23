<script lang="ts" setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
  window.addEventListener('breadcrumb:updateContentKey', () => {
    key.value++;
  });
});

const key = ref(0);
</script>

<template>
  <div>
    <div class="">
      <!-- Breadcrumb here -->
    </div>

    <Card :key="key">
      <template #content>
        <router-view />
      </template>
    </Card>
  </div>
</template>
