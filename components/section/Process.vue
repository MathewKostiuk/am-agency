<template>
  <section
    v-if="processSection"
    class="flex flex-col gap-[78px] items-center m-auto text-center px-[20px] lg:px-8 text-primary"
  >
    <h2 class="section-heading">
      {{ processSection.heading }}
    </h2>

    <div class="flex flex-col items-center gap-[40px]">
      <div
        v-for="({ heading, content, image }, index) in processSection
          ?.processesCollection.items"
        :key="heading"
        class="flex flex-col items-center gap-[8px] max-w-[407px]"
      >
        <div class="relative">
          <img
            v-if="image"
            :src="image?.url"
            :alt="image?.description"
            :width="image?.width"
            :height="image?.height"
            class="object-cover w-[115px] h-[115px] aspect-square"
          />
          <span
            class="absolute inset-0 block w-full h-full bg-primary rounded-full opacity-10"
          ></span>
        </div>
        <h3 class="text-body-1 md:text-heading-4 font-bold" v-if="heading">
          {{ heading }}
        </h3>
        <p class="text-body-3 text-body-text" v-if="content">
          {{ content }}
        </p>
        <DoubleArrow
          v-if="index !== processSection.processesCollection.items.length - 1"
          class="mt-[32px]"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import DoubleArrow from "../../assets/svg/double-arrow.svg?component";

type ProcessSectionResponse = {
  processSection: {
    heading: string;
    processesCollection: {
      items: {
        heading: string;
        content: string;
        image: {
          description: string;
          url: string;
          width: number;
          height: number;
        };
      }[];
    };
  };
};

const query = gql`
  query processSectionEntryQuery {
    processSection(id: "63BquoiB9TZEiJrWipUihj") {
      heading
      processesCollection {
        items {
          ... on Process {
            heading
            content
            image {
              description
              url
              width
              height
            }
          }
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery<ProcessSectionResponse>(query);
const processSection = data.value?.processSection;
</script>
