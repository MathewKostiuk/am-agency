<template>
  <Header />
  <main class="grid gap-8">
    <slot />
  </main>
</template>

<style>
.btn {
  @apply px-4 py-2 text-white bg-blue-500 rounded-md;
}

.section {
  @apply px-8 max-w-[1200px] m-auto;
}
</style>
