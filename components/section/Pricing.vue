<template>
  <section v-if="priceSection" class="bg-border-primary max-w-[100vw]">
    <div class="section px-[20px] py-[80px] mx-auto lg:px-[100px]">
      <h2
        class="text-heading-4 text-primary sm:text-heading-2 font-semibold text-center"
        v-if="priceSection.heading"
      >
        {{ priceSection.heading }}
      </h2>
      <div class="flex overflow-x-auto snap-x gap-16 mt-[32px] lg:grid-cols-3">
        <div
          v-for="(priceObject, index) in priceSection.priceObjectsCollection
            .items"
          :key="index"
          class="flex flex-col items-center min-w-[374px] snap-center bg-white rounded-lg py-[32px] px-[34px]"
        >
          <h3
            class="text-body-2 text-accent-dark font-medium"
            v-if="priceObject.heading"
          >
            {{ priceObject.heading }}
          </h3>
          <h4
            class="text-body-4 text-neutral font-medium mt-[24px]"
            v-if="priceObject.startingAt"
          >
            {{ priceObject.startingAt }}
          </h4>
          <h4
            class="text-heading-4 text-neutral font-medium mt-[4px]"
            v-if="priceObject.price"
          >
            {{ priceObject.price }}
          </h4>
          <ul
            class="flex flex-col gap-4 w-full text-body-3 text-body-text mt-[24px]"
          >
            <li
              v-for="(bulletPoint, index) in priceObject.bulletPointsCollection
                .items"
              :key="index"
              class="flex gap-2 items-center"
            >
              <Checkmark class="shrink-0" />
              {{ bulletPoint.content }}
            </li>
          </ul>
        </div>
      </div>
      <p
        class="text-body-4 text-body-text mt-[24px]"
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
</script>