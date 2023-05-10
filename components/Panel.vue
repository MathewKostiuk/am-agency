<template>
  <div
    class="panel absolute top-full left-0 w-full border-border-primary overflow-hidden max-h-0 z-10"
    :class="{ 'panel--open border-y-[1px]': open, 'panel--closed': !open }"
  >
    <ul
      class="flex flex-col gap-[38px] justify-center items-center py-[98px] bg-white"
    >
      <li
        v-for="link in links"
        :key="link.title"
        class="text-primary text-body-2 font-bold font-hanken-grotesk"
      >
        <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  open: boolean;
  links: {
    title: string;
    url: string;
  }[];
}>();
</script>

<style lang="scss" scoped>
.panel {
  transition: max-height 0.3s ease-in-out;

  &--open {
    max-height: 450px;
  }
}
</style>
