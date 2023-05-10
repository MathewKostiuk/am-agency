<template>
  <section
    v-if="content"
    class="section bg-secondary flex flex-col lg:flex-row gap-[100px] lg:gap-[200px] items-start py-16 lg:py-32"
  >
    <h2 class="section-heading whitespace-nowrap text-primary">
      {{ content.heading }}
    </h2>
    <div
      class="whitespace-pre-line font-hanken-grotesk text-body-3"
      v-html="content.content"
    ></div>
  </section>
</template>

<script lang="ts" setup>
type AboutUsMissionResponse = {
  aboutUsMission: {
    heading: string;
    content: string;
  };
};

const query = gql`
  query aboutUsMissionEntryQuery {
    aboutUsMission(id: "5QBakR0Yso4eiUKtNDagNY") {
      heading
      content
    }
  }
`;

const { data } = await useAsyncQuery<AboutUsMissionResponse>(query);
const content = data.value?.aboutUsMission;
</script>
