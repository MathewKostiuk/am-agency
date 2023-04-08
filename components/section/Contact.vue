<template>
  <section class="section">
    <h2 class="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
    <form @submit.prevent="sendEmail" class="flex flex-col gap-2">
      <input class="border-2 rounded-sm p-2" type="text" name="Name" id="name" placeholder="Name" v-model="formData.name" required>
      <input class="border-2 rounded-sm p-2" type="email" name="Email" id="email" placeholder="Email" v-model="formData.email" required>
      <textarea class="border-2 rounded-sm p-2" name="Message" id="message" cols="30" rows="10" placeholder="Message" v-model="formData.message" required></textarea>
      <button type="submit" class="btn btn-primary w-full">Send</button>
    </form>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type EmailFormData = {
  name: string;
  email: string;
  message: string;
};

const formData = ref<EmailFormData>({
  name: '',
  email: '',
  message: '',
});

const sendEmail = async () => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData.value),
  });

  let data;
  try {
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  console.log(data);
};
</script>
