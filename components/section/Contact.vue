<template>
  <section class="section my-16">
    <form
      @submit.prevent="sendEmail"
      class="grid grid-cols-2 gap-x-5 gap-y-10 max-w-[450px] m-auto"
    >
      <div class="field">
        <label for="FirstName" class="label">First name*</label>
        <input
          class="input"
          type="text"
          name="FirstName"
          id="FirstName"
          placeholder="First name"
          v-model="formData.firstName"
          required
        />
      </div>
      <div class="field">
        <label for="LastName" class="label">Last name*</label>
        <input
          class="input"
          type="text"
          name="LastName"
          id="LastName"
          placeholder="Last name"
          v-model="formData.lastName"
          required
        />
      </div>
      <div class="field col-span-2">
        <label for="Email" class="label">Email*</label>
        <input
          class="input"
          type="email"
          name="Email"
          id="email"
          placeholder="Email"
          v-model="formData.email"
          required
        />
      </div>
      <div class="field col-span-2">
        <label for="Message" class="label">How can we help you?*</label>
        <textarea
          class="input"
          name="Message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          v-model="formData.message"
          required
        ></textarea>
      </div>
      <div class="field">
        <button type="submit" class="btn btn-primary w-full">Send</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.field {
  @apply flex flex-col gap-1;
}

.label {
  @apply font-hanken-grotesk text-body-3;
}

.input {
  @apply bg-input rounded-lg text-body-3 p-3 border;
  border-color: #00000017;
}
</style>

<script lang="ts" setup>
import { ref } from "vue";

type EmailFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const formData = ref<EmailFormData>({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

const sendEmail = async () => {
  const response = await fetch("/.netlify/functions/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
