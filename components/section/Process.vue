<template>
  <section
    v-if="processSection"
    class="m-auto text-center px-[20px] lg:px-8 text-primary mt-16"
  >
    <h2 class="section-heading">
      {{ processSection.heading }}
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 items-center gap-[78px] mt-20 sm:px-[80px] xl:px-[225px]"
    >
      <div class="h-full relative hidden sm:block">
        <div
          v-for="({ heading }, index) in processSection?.processesCollection
            .items"
          :key="heading"
          class="flex items-center justify-center text-2xl font-semibold font-kumbh-sans absolute right-0"
          :class="determineTransform(index)"
        >
          <ProcessArrow :class="buildClass(index)" />
          <div
            class="absolute top-1/2 -translate-y-1/2 z-10 pt-4 whitespace-nowrap"
            :class="{
              'text-white':
                index === processSection.processesCollection.items.length - 1,
            }"
          >
            {{ heading }}
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start gap-[50px]">
        <div
          v-for="({ heading, content, image }, index) in processSection
            ?.processesCollection.items"
          :key="heading"
          class="flex items-start gap-[11px] relative"
        >
          <div class="flex flex-col gap-[11px]">
            <div class="flex items-center gap-4">
              <span
                class="bg-primary text-white w-[32px] h-[32px] rounded-full inline-flex items-center justify-center"
                >{{ index + 1 }}</span
              >
              <h3
                class="text-body-1 md:text-heading-4 font-semibold font-kumbh-sans"
                v-if="heading"
              >
                {{ heading }}
              </h3>
            </div>
            <p
              class="text-body-3 text-body-text text-left font-hanken-grotesk"
              v-if="content"
            >
              {{ content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProcessArrow from "../../assets/svg/process-arrow.svg?component";

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

type TransformClass = "top-0" | "top-[130px]" | "top-[260px]" | "top-[390px]";

const determineTransform = (index: number): TransformClass | undefined => {
  const options: Record<number, TransformClass> = {
    0: "top-0",
    1: "top-[130px]",
    2: "top-[260px]",
    3: "top-[390px]",
  };

  return options[index];
};

type BgProcessClass =
  | "text-process-100"
  | "text-process-200"
  | "text-process-300"
  | "text-process-400";

const buildClass = (index: number): BgProcessClass | undefined => {
  const options: Record<number, BgProcessClass> = {
    0: "text-process-100",
    1: "text-process-200",
    2: "text-process-300",
    3: "text-process-400",
  };

  return options[index];
};

const { data } = await useAsyncQuery<ProcessSectionResponse>(query);
const processSection = data.value?.processSection;
</script>
