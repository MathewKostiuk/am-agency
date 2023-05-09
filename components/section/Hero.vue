<template>
  <section
    class="section bg-primary grid grid-cols-1 sm:grid-cols-2 gap-8 py-[83px] bg-cover"
    v-if="hero"
    style="background-image: url('/img/hero-background.png')"
  >
    <div
      class="flex flex-col justify-center text-white items-center text-center lg:text-left lg:items-start"
    >
      <h1
        class="text-heading-3 lg:text-heading-1 font-semibold font-kumbh-sans"
      >
        {{ hero.heading }}
      </h1>
      <p class="text-body-2 lg:text-body-1 font-hanken-grotesk mt-8">
        {{ hero.content }}
      </p>
      <a
        class="btn btn-primary font-hanken-grotesk mt-10"
        :href="hero?.buttonUrl"
      >
        {{ hero.buttonText }}
      </a>
    </div>
    <div class="flex justify-center">
      <div class="relative">
        <img
          :src="hero.image.url"
          :alt="hero.image.description"
          class="object-cover h-full aspect-square rounded-full border-[11px] border-white max-h-[463px]"
        />
        <div
          class="absolute w-[29px] h-[29px] bg-accent rounded-full top-[12.5%] right-[12.5%]"
        ></div>
      </div>
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
