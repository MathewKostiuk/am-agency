<template>
  <section
    class="section bg-primary text-white pt-[40px] sm:pt-[80px]"
    v-if="mission"
  >
    <div class="text-center">
      <p class="text-body-1 lg:text-heading-4">
        {{ mission.content }}
      </p>
    </div>
    <div class="flex justify-center">
      <img
        :src="mission.image?.url"
        :alt="mission.image?.description"
        class="object-cover h-full"
      />
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
