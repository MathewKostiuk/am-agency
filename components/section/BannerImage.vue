<template>
  <section
    class="section bg-primary text-white bg-cover bg-center relative h-[280px] w-full"
    v-if="text && image"
    :style="{
      backgroundImage: `url(${image.url})`,
    }"
  >
    <div
      class="absolute inset-0 bg-primary opacity-80 text-center flex items-center justify-center py-[56px] sm:py-[80px] px-[40px]"
    >
      <p
        class="font-kumbh-sans max-w-4xl"
        :class="
          isHeading
            ? 'text-heading-1 font-semibold'
            : 'text-body-1 lg:text-heading-4 font-medium'
        "
      >
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
type BannerImageProps = {
  text: string;
  isHeading: boolean;
  image: {
    url: string;
    description: string;
  };
};
defineProps<BannerImageProps>();
</script>
