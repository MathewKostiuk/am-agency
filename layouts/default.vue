<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
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

  &-heading {
    @apply relative inline-block text-heading-4 sm:text-heading-2 font-semibold font-kumbh-sans;

    &::after {
      @apply absolute left-0 bottom-[-20px] block w-[60px] h-[2px] bg-accent;
      content: "";
    }
  }
}

.card {
  @apply flex flex-col gap-4 items-start rounded-lg px-[32px] py-[40px] max-w-[450px];
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}
</style>
