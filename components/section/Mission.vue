<template>
  <div class="mt-16">
    <SectionBannerImage
      v-if="mission"
      :text="mission.content"
      :image="mission.image"
      :isHeading="mission.isHeading"
    />
  </div>
</template>

<script lang="ts" setup>
type BannerImageSectionResponse = {
  missionSection: {
    content: string;
    image: {
      url: string;
      width: number;
      height: number;
      description: string;
      title: string;
    };
    isHeading: boolean;
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
      isHeading
    }
  }
`;

const { data } = await useAsyncQuery<BannerImageSectionResponse>(query);
const mission = data.value?.missionSection;
</script>
