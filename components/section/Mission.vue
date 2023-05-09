<template>
  <section
    class="section bg-primary text-white bg-cover bg-center relative h-[280px] w-full"
    v-if="mission"
    style="background-image: url('/img/sunrise.png')"
  >
    <div
      class="absolute inset-0 bg-primary opacity-80 text-center py-[56px] sm:py-[80px] px-[40px]"
    >
      <p class="text-body-1 lg:text-heading-4 font-kumbh-sans">
        {{ mission.content }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
type MissionSectionResponse = {
  missionSection: {
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
  query missionSectionEntryQuery {
    missionSection(id: "1EEiW7hsZoBk06RPL90z5K") {
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

const { data } = await useAsyncQuery<MissionSectionResponse>(query);
const mission = data.value?.missionSection;
</script>
