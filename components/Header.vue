<template>
  <nav
    v-if="menu"
    class="relative text-white px-[20px] lg:px-[100px] py-[30px] flex items-center justify-between"
    :class="{ 'bg-primary': !open, 'bg-white': open }"
  >
    <h1>
      <NuxtLink to="/">
        <Logo v-if="!open" />
        <LogoSecondary v-if="open" />
      </NuxtLink>
    </h1>
    <ul class="hidden gap-[43px] justify-end hidden lg:flex">
      <li
        v-for="link in menu?.linksCollection?.items"
        :key="link.title"
        class="text-body-2 font-bold"
      >
        <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
      </li>
    </ul>
    <button class="lg:hidden" @click="toggle">
      <Hamburger v-if="!open" />
      <Close v-if="open" />
    </button>
    <Panel :links="menu?.linksCollection?.items" :open="open" />
  </nav>
</template>

<script lang="ts" setup>
import Logo from "../assets/svg/logo.svg?component";
import LogoSecondary from "../assets/svg/logo-secondary.svg?component";
import Hamburger from "../assets/svg/hamburger.svg?component";
import Close from "../assets/svg/close.svg?component";

const open = ref(false);

type NavigationMenuResponse = {
  navigationMenu: {
    title: string;
    linksCollection: {
      total: number;
      items: {
        title: string;
        url: string;
      }[];
    };
  };
};

const query = gql`
  query navigationMenuEntryQuery {
    navigationMenu(id: "4fpc6jyxf5H5dqFaTtdf6L") {
      title
      linksCollection {
        total
        items {
          ... on NavigationLink {
            title
            url
          }
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery<NavigationMenuResponse>(query);
const menu = data.value?.navigationMenu;

const toggle = () => {
  open.value = !open.value;
};
</script>
