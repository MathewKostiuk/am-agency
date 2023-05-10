<template>
  <section
    v-if="teamSection"
    class="section flex flex-col lg:flex-row gap-[100px] lg:gap-[200px] items-start justify-between py-16 lg:py-20"
  >
    <h2 class="section-heading whitespace-nowrap text-primary">
      {{ teamSection.heading }}
    </h2>
    <div class="grid grid-cols-2 gap-16">
      <article
        v-for="(card, index) in teamSection.teamCardsCollection.items"
        :key="index"
        class="flex flex-col max-w-[360px]"
      >
        <img
          :src="card.image.url"
          class="object-cover aspect-square rounded-full"
        />
        <h3
          class="font-kumbh-sans text-primary text-heading-4 mt-4 font-semibold"
        >
          {{ card.name }}
        </h3>
        <h4 class="font-hanken-grotesk text-primary text-body-2 mt-2">
          {{ card.jobTitle }}
        </h4>
        <div class="whitespace-pre-line mt-4">{{ card.content }}</div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
type TeamSectionResponse = {
  teamSection: {
    heading: string;
    teamCardsCollection: {
      items: {
        name: string;
        image: {
          url: string;
          height: number;
          width: number;
        };
        jobTitle: string;
        content: string;
      }[];
    };
  };
};

const query = gql`
  query teamSectionEntryQuery {
    teamSection(id: "75eGv0cqYHuE3FCWBiTPNx") {
      heading
      teamCardsCollection {
        items {
          ... on TeamCard {
            name
            image {
              url
              height
              width
            }
            jobTitle
            content
          }
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery<TeamSectionResponse>(query);
const teamSection = data.value?.teamSection;
</script>
