<template>
  <Header />
  <main class="px-8 max-w-[1200px] m-auto">
    <slot />
  </main>
</template>

<style>
.btn {
  @apply px-4 py-2 text-white bg-blue-500 rounded-md;
}
</style>
