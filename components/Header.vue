<template>
  <nav
    v-if="menu"
    class="bg-gray-800 text-white p-4 flex items-center justify-between"
  >
    <h1>AM Agency</h1>
    <ul class="flex gap-2 justify-end">
      <li v-for="link in menu?.linksCollection?.items" :key="link.title">
        <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
type NavigationMenuResponse = {
  navigationMenu: {
    title: string
    linksCollection: {
      total: number
      items: {
        title: string
        url: string
      }[]
    }
  }
}

const query = gql`
  query navigationMenuEntryQuery {
    navigationMenu(id: "4fpc6jyxf5H5dqFaTtdf6L") {
      title
      linksCollection {
        total
        items {
          ...on NavigationLink {
            title
            url
          }
        }
      }
    }
  }
`


const { data } = await useAsyncQuery<NavigationMenuResponse>(query)
const menu = data.value?.navigationMenu
</script>
