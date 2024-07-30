<script setup lang="ts">
import { onMounted, shallowRef } from 'vue';
import { useBreadcrumbStore } from '@/store';
import { TSButton } from 'tsv2-library';

const { setBreadcrumbs } = useBreadcrumbStore();

const menus = shallowRef([
  {
    name: 'Home',
  },
  {
    name: 'Another Tab',
  },
]);

onMounted(() => {
  setBreadcrumbs(menus.value);
});
</script>
<template>
  <div class="flex flex-row items-center text-800">
    <div class="relative z-10 p-16 w-9/12 text-left flex align-items-center">
      <section>
        <span class="block text-3xl font-bold mb-3">
          Introduce Your Product Quickly & Effectively
        </span>
        <p class="mt-0 mb-4 text-700 line-height-3 text-gray-500">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <p class="mt-0 mb-4 text-700 line-height-3 text-gray-500">
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>

        <TSButton
          class="p-button-outlined mt-8 mr-3"
          label="Purchase UI Kit"
          type="button"
        />
        <TSButton
          class="p-button-outlined mt-8"
          label="Learn More"
          type="button"
        />
      </section>
    </div>
    <div class="relative right-0 w-2/3 z-0">
      <img alt="cover" class="" src="../assets/img/bg.png" />
    </div>
  </div>
</template>
