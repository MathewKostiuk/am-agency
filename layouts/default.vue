<template>
  <Header />
  <main class="grid gap-8">
    <slot />
  </main>
</template>

<style lang="scss">
.btn {
  @apply px-8 py-4 text-white bg-accent rounded-lg uppercase;

  &:hover,
  &:active {
    @apply bg-accent-dark;
  }

  &:focus {
    @apply border-[4px] border-focus outline-none;
  }
}

.section {
  @apply px-[20px] mx-auto lg:px-[100px];
}
</style>
