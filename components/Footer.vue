<template>
  <footer
    class="bg-primary flex flex-col items-center justify-center py-[77px] gap-[28px]"
  >
    <ul class="flex gap-[43px]">
      <li
        v-for="(link, index) in menu?.linksCollection.items"
        :key="index"
        class="text-body-4 text-white font-semibold font-hanken-grotesk"
      >
        <a :href="link.url">{{ link.title }}</a>
      </li>
    </ul>
    <p class="text-body-4 text-background text-center font-hanken-grotesk">
      © 2023 AM agency - All rights reserved
    </p>
  </footer>
</template>

<script lang="ts" setup>
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
</script>
