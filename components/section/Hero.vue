<template>
  <section
    class="section bg-primary grid md:grid-cols-2 gap-8 pt-8 pb-[145px]"
    v-if="hero"
  >
    <div
      class="flex flex-col gap-4 justify-center text-white items-center text-center lg:text-left lg:items-start"
    >
      <h1 class="text-heading-3 lg:text-heading-1 font-bold">
        {{ hero.heading }}
      </h1>
      <p class="text-body-2 lg:text-body-1">
        {{ hero.content }}
      </p>
      <a class="btn btn-primary" :href="hero?.buttonUrl">
        {{ hero.buttonText }}
      </a>
    </div>
    <div class="flex justify-center">
      <img
        :src="hero.image.url"
        :alt="hero.image.description"
        class="object-cover h-full aspect-square rounded-full border-8 border-white max-h-[345px]"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
type HeroSectionResponse = {
  heroSection: {
    heading: string;
    buttonText: string;
    buttonUrl: string;
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
      buttonUrl
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
