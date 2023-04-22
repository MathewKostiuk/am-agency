<template>
  <section
    class="section bg-primary grid md:grid-cols-2 gap-8 pt-8 pb-[145px]"
    v-if="hero"
  >
    <div
      class="flex flex-col justify-center text-white items-center text-center"
    >
      <h1 class="text-heading-3 lg:text-heading-1 font-bold">
        {{ hero.heading }}
      </h1>
      <p class="mt-4 text-body-2 lg:text-body-1">
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
        class="object-cover w-full h-full aspect-square rounded-full border-8 border-white"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
type HeroSectionResponse = {
  heroSection: {
    heading: string;
    buttonText: string;
    content: string;
    image: {
      url: string;
      width: number;
      height: number;
      description: string;
      title: string;
    };
  };
};

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
`;

const { data } = await useAsyncQuery<HeroSectionResponse>(query);
const hero = data.value?.heroSection;
</script>
