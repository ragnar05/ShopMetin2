<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <!-- Título de la sección -->
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Costumes</h1>

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

    <!-- Sección de Ofertas -->
    <section class="mt-12 bg-gray-200 p-4 md:p-8 rounded-lg">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
        Special Offers
      </h2>
      <div class="grid grid-cols-1 gap-8">
        <!-- Contenedor del ProductCard -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <ProductCard
            :productTitle="'Bone of Golry Set'"
            :features="[
              'Costume (+hairstyle, icons, msm)',
              'Weapons',
              'Wings',
              'Effects',
            ]"
            :images="[
              '/img/Armors/White_King1.jpg',
              '/img/Armors/White_King1.jpg',
            ]"
            :urlIngameVideo="'https://www.youtube.com/watch?v=6v2L2UGZJAM'"
          />
        </div>

        <!-- ESTE DIV ES EL QUE SE COPIA-->
        <div class="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <ProductCard
            :productTitle="'Ejemplo'"
            :features="[
              'Costume (+hairstyle, icons, msm)',
              'Weapons',
              'Wings',
              'Effects',
            ]"
            :images="[
              '/img/Armors/White_King1.jpg',
              '/img/Armors/White_King1.jpg',
            ]"
            :urlIngameVideo="'https://www.youtube.com/watch?v=6v2L2UGZJAM'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "@/components/productCard.vue";

// Ejemplo de datos de categorías y productos
const categories = ref([
  {
    name: "Costumes",
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
    name: "Armors",
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
    name: "Weapons",
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
    name: "Sashes",
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
    name: "Wings",
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
    name: "Hair",
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
