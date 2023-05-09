<template>
  <section v-if="priceSection" class="bg-border-primary max-w-[100vw] mt-16">
    <div class="section px-[20px] py-20 mx-auto lg:px-[100px]">
      <div class="heading flex justify-center">
        <h2
          class="section-heading text-heading-4 text-primary sm:text-heading-2 font-semibold text-center font-kumbh-sans"
          v-if="priceSection.heading"
        >
          {{ priceSection.heading }}
        </h2>
      </div>
      <div class="hidden gap-6 mt-20 sm:grid sm:grid-cols-3">
        <div
          v-for="(priceObject, index) in priceSection.priceObjectsCollection
            .items"
          :key="index"
          class="flex flex-col snap-center bg-white rounded-lg py-8 px-[34px]"
        >
          <h3
            class="text-body-2 text-accent-dark font-medium font-hanken-grotesk"
            v-if="priceObject.heading"
          >
            {{ priceObject.heading }}
          </h3>
          <h4
            class="text-body-4 text-neutral font-medium font-hanken-grotesk mt-6"
            v-if="priceObject.startingAt"
          >
            {{ priceObject.startingAt }}
          </h4>
          <h4
            class="text-heading-4 text-neutral font-medium mt-1 font-kumbh-sans"
            v-if="priceObject.price"
          >
            {{ priceObject.price }}
          </h4>
          <ul
            class="flex flex-col gap-4 w-full text-body-3 text-body-text mt-6"
          >
            <li
              v-for="(bulletPoint, index) in priceObject.bulletPointsCollection
                .items"
              :key="index"
              class="flex gap-2 items-center font-hanken-grotesk"
            >
              <Checkmark class="shrink-0" />
              {{ bulletPoint.content }}
            </li>
          </ul>
        </div>
      </div>
      <div class="sm:hidden mt-12">
        <Swiper
          :modules="[SwiperPagination]"
          :slides-per-view="1"
          :space-between="16"
          :pagination="{ clickable: true, type: 'bullets' }"
          :style="{
            '--swiper-pagination-color': '#00677F',
            '--swiper-pagination-bottom': '2px',
          }"
          class="pricing-swiper"
          @init="updateSlidesHeight"
        >
          <SwiperSlide
            v-for="(priceObject, index) in priceSection.priceObjectsCollection
              .items"
            :key="index"
            class="pricing-card h-full bg-white rounded-lg py-8 px-[34px]"
          >
            <h3
              class="text-body-2 text-accent-dark font-medium font-hanken-grotesk"
              v-if="priceObject.heading"
            >
              {{ priceObject.heading }}
            </h3>
            <h4
              class="text-body-4 text-neutral font-medium font-hanken-grotesk mt-6"
              v-if="priceObject.startingAt"
            >
              {{ priceObject.startingAt }}
            </h4>
            <h4
              class="text-heading-4 text-neutral font-medium mt-1 font-kumbh-sans"
              v-if="priceObject.price"
            >
              {{ priceObject.price }}
            </h4>
            <ul
              class="flex flex-col gap-4 w-full text-body-3 text-body-text mt-6 sm:w-auto"
            >
              <li
                v-for="(bulletPoint, index) in priceObject
                  .bulletPointsCollection.items"
                :key="index"
                class="flex gap-2 items-center font-hanken-grotesk"
              >
                <Checkmark class="shrink-0" />
                {{ bulletPoint.content }}
              </li>
            </ul>
          </SwiperSlide>
        </Swiper>
      </div>
      <p
        class="text-body-4 text-body-text mt-6 font-hanken-grotesk"
        v-if="priceSection.disclaimer"
      >
        {{ priceSection.disclaimer }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Checkmark from "../../assets/svg/checkmark.svg?component";

type PriceSectionResponse = {
  priceSection: {
    heading: string;
    disclaimer: string;
    priceObjectsCollection: {
      items: {
        heading: string;
        startingAt: string;
        price: string;
        bulletPointsCollection: {
          items: {
            content: string;
          }[];
        };
      }[];
    };
  };
};

const query = gql`
  query priceSectionEntryQuery {
    priceSection(id: "2rosJN3C991vXn3CXDF9rq") {
      sys {
        id
      }
      heading
      disclaimer
      priceObjectsCollection {
        items {
          ... on PricingCard {
            heading
            startingAt
            price
            bulletPointsCollection {
              items {
                ... on BulletPoint {
                  content
                }
              }
            }
          }
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery<PriceSectionResponse>(query);
const priceSection = data.value?.priceSection;

const updateSlidesHeight = (swiper: { slides: any }) => {
  const slides = swiper.slides;
  let maxHeight = 0;

  // Loop through slides to find the maximum height
  slides.forEach((slide: { clientHeight: any }) => {
    const slideHeight = slide.clientHeight;
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight;
    }
  });

  // Set the maximum height for all slides
  slides.forEach((slide: { style: { height: string } }) => {
    slide.style.height = maxHeight + "px";
  });
};
</script>

<style lang="scss" scoped>
.pricing-swiper {
  @apply pb-[32px];
}
</style>
