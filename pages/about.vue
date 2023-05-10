<template>
  <SectionBannerImage
    v-if="banner"
    :text="banner.content"
    :image="banner.image"
    :isHeading="banner.isHeading"
  />
  <SectionAboutUsMission />
  <SectionTeam />
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
    missionSection(id: "3VcqMjd0WQW3mM9raCIETM") {
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
const banner = data.value?.missionSection;
</script>
