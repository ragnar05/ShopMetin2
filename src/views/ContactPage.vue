<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
    <div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold mb-2"
            >Name</label
          >
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2"
            >Email</label
          >
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-semibold mb-2"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.message"
            class="w-full border border-gray-300 rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>

    <div class="mt-8 max-w-lg mx-auto text-center">
      <p class="text-gray-700 mb-4">Or reach us through:</p>
      <a
        href="mailto:Shopmetin2.sales@gmail.com"
        class="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 4a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2H3z"
          />
        </svg>
        Email Us
      </a>
      <a
        href="https://discord.gg/your-invite-link"
        target="_blank"
        class="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4z"
          />
        </svg>
        Join Us on Discord
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = async () => {
  try {
    // Enviar el correo electrónico a través de EmailJS
    const response = await emailjs.send(
      "service_ucc464r",
      "template_vekl8ww",
      form.value,
      "xZnsq8T-AaPhxG6tD"
    );

    // Mostrar mensaje de éxito
    console.log("Email sent successfully:", response.status, response.text);
    // Limpia el formulario
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
</script>
