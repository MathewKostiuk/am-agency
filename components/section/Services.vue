<template>
  <section
    v-if="ourServices"
    class="m-auto text-center px-[20px] lg:px-8 text-primary"
  >
    <h2 class="section-heading">
      {{ ourServices.heading }}
    </h2>
    <div class="grid grid-cols-1 gap-[20px] mt-[86px] lg:grid-cols-3">
      <div
        v-for="{ heading, subheading, image, description } in ourServices
          .serviceCollection.items"
        :key="heading"
        class="card"
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
        <h4 class="text-body-2" v-if="subheading">
          {{ subheading }}
        </h4>
        <p class="text-body-3 text-body-text" v-if="description">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type OurServicesSectionResponse = {
  ourServicesSection: {
    heading: string;
    serviceCollection: {
      items: {
        heading: string;
        subheading: string;
        description: string;
        image: {
          url: string;
          width: number;
          height: number;
          description: string;
          title: string;
        };
      }[];
    };
  };
};

const query = gql`
  query ourServicesSectionEntryQuery {
    ourServicesSection(id: "6N0sTzoriK8AVg9mMF1V81") {
      heading
      serviceCollection {
        items {
          ... on Service {
            heading
            subheading
            description
            image {
              url
              height
              width
              title
              description
            }
          }
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery<OurServicesSectionResponse>(query);
const ourServices = data.value?.ourServicesSection;
</script>
