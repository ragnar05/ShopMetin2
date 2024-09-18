<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <!-- Título de la sección -->
    <h1 class="text-4xl font-bold text-gray-800 mb-8">NPC</h1>

    <!-- Sección de agrupación de subgrupos -->
    <div v-for="category in categories" :key="category.name" class="mb-12">
      <!-- Título del subgrupo -->
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">
        {{ category.name }}
      </h2>

      <!-- Contenedor de productos del subgrupo -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <div
          v-for="product in category.products"
          :key="product.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="product.image"
            alt="Product Image"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">
              {{ product.name }}
            </h3>
            <p class="text-gray-600 mt-2">{{ product.description }}</p>
            <p class="text-gray-800 font-bold mt-2">{{ product.price }}</p>
            <a
              :href="`mailto:Shopmetin2.sales@gmail.com?subject=Inquiry about ${product.name}&body=I'm interested in ${product.name} for ${product.price}.`"
              class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Ejemplo de datos de categorías y productos
const categories = ref([
  {
    name: "Mounts",
    products: [
      {
        id: 1,
        name: "Steel Armor",
        description: "Durable steel armor.",
        price: "$120",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 2,
        name: "Leather Armor",
        description: "Lightweight leather armor.",
        price: "$80",
        image: "https://via.placeholder.com/400x200",
      },
    ],
  },
  {
    name: "Pets",
    products: [
      {
        id: 3,
        name: "Iron Sword",
        description: "Sharp iron sword.",
        price: "$100",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 4,
        name: "Wooden Bow",
        description: "Sturdy wooden bow.",
        price: "$70",
        image: "https://via.placeholder.com/400x200",
      },
    ],
  },
  {
    name: "NPC",
    products: [
      {
        id: 3,
        name: "Iron Sword",
        description: "Sharp iron sword.",
        price: "$100",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 4,
        name: "Wooden Bow",
        description: "Sturdy wooden bow.",
        price: "$70",
        image: "https://via.placeholder.com/400x200",
      },
    ],
  },
]);
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
