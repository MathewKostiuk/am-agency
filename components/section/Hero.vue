<template>
  <section class="section grid md:grid-cols-2 gap-8" v-if="hero">
    <div class="flex flex-col justify-center row-start-2 md:row-start-1">
      <h1 class="text-4xl font-bold text-gray-800">
        {{ hero.heading }}
      </h1>
      <p class="mt-4 text-gray-600">
        {{ hero.content }}
      </p>
      <button class="mt-4 btn btn-primary">
        {{ hero.buttonText }}
      </button>
    </div>
    <div class="flex justify-center">
      <img
        :src="hero.image.url"
        :alt="hero.image.description"
        :width="hero.image.width"
        :height="hero.image.height"
        class="object-cover w-full h-full aspect-square"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
type HeroSectionResponse = {
  heroSection: {
    heading: string
    buttonText: string
    content: string
    image: {
      url: string
      width: number
      height: number
      description: string
      title: string
    }
  }
}

const query = gql`
  query heroSectionEntryQuery {
    heroSection(id: "2Cro3fZCrmepEmJqeb1LS8") {
      heading
      buttonText
      content
      image {
        url
        width
        height
        description
        title
      }
    }
  }
`

const { data } = await useAsyncQuery<HeroSectionResponse>(query)
const hero = data.value?.heroSection
</script>
