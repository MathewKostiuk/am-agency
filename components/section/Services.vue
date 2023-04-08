<template>
  <section
    v-if="ourServices"
    class="max-w-[550px] m-auto text-center lg:px-8 lg:max-w-[1200px]"
  >
    <h2 class="text-4xl font-bold text-gray-800">
      {{ ourServices.heading }}
    </h2>
    <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
      <div
        v-for="service in ourServices.serviceCollection.items"
        :key="service?.heading"
        class="flex flex-col justify-center items-center"
      >
        <img
          v-if="service.image"
          :src="service.image?.url"
          :alt="service.image?.description"
          :width="service.image?.width"
          :height="service.image?.height"
          class="object-cover w-full h-full aspect-square"
        />
        <h3 class="mt-4 text-2xl font-bold text-gray-800">
          {{ service?.heading }}
        </h3>
        <p class="mt-4 text-gray-600">
          {{ service?.description }}
        </p>
        <button class="mt-4 btn btn-primary w-auto">
          {{ service?.button }}
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type OurServicesSectionResponse = {
  ourServicesSection: {
    heading: string
    serviceCollection: {
      items: {
        heading: string
        description: string
        button: string
        image: {
          url: string
          width: number
          height: number
          description: string
          title: string
        }
      }[]
    }
  }
}

const query = gql`
  query ourServicesSectionEntryQuery {
    ourServicesSection(id: "6N0sTzoriK8AVg9mMF1V81") {
      heading
      serviceCollection {
        items {
          ...on Service {
            heading
            description
            button
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
`

const { data } = await useAsyncQuery<OurServicesSectionResponse>(query)
const ourServices = data.value?.ourServicesSection
</script>
