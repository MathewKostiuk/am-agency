<template>
  <SectionBannerImage
    v-if="banner"
    :text="banner.content"
    :image="banner.image"
    :isHeading="banner.isHeading"
  />
  <SectionContact />
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
    missionSection(id: "1L0PAWmWIvtsDgGe1GGLIF") {
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
