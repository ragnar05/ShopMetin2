<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <!-- Título de la sección -->
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Armors</h1>

    <!-- Sección de agrupación de subgrupos -->
    <div v-for="category in categories" :key="category.name" class="mb-12">
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
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Armors</h2>
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
            :images="['/img/Armors/White_King1.jpg']"
            :urlIngameVideo="'https://www.youtube.com/watch?v=6v2L2UGZJAM'"
          />
        </div>

        <!-- ESTE DIV ES EL QUE SE COPIA-->
        <div class="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <ProductCard
            :productTitle="'King Monkey'"
            :features="[
              'Costume (+hairstyle, icons, msm)',
              'Weapons',
              'Wings',
              'Effects',
            ]"
            :images="['/img/Armors/King_Monkey2.jpg']"
            :urlIngameVideo="'https://www.youtube.com/watch?v=6v2L2UGZJAM'"
          />
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <ProductCard
            :productTitle="'Red Bull'"
            :features="[
              'Costume (+hairstyle, icons, msm)',
              'Weapons',
              'Wings',
              'Effects',
            ]"
            :images="['/img/Armors/Red_Bull3.jpg']"
            :urlIngameVideo="'https://www.youtube.com/watch?v=6v2L2UGZJAM'"
          />
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <ProductCard
            :productTitle="'Blood Moon'"
            :features="[
              'Costume (+hairstyle, icons, msm)',
              'Weapons',
              'Wings',
              'Effects',
            ]"
            :images="['/img/Armors/Blood_Moon4.jpg']"
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
    name: "Armors",
    products: [
      {
        id: 1,
        name: "White King",
        description: "Model Gr2 with textures HD",
        price: "30€",
        image: "/img/Armors/White_King1.jpg",
      },
      {
        id: 2,
        name: "King Monkey",
        description: "Model Gr2 with textures HD",
        price: "30€",
        image: "/img/Armors/King_Monkey2.jpg",
      },
      {
        id: 3,
        name: "Red Bull",
        description: "Model Gr2 with textures HD",
        price: "30€",
        image: "/img/Armors/Red_Bull3.jpg",
      },
      {
        id: 4,
        name: "Blood Moon",
        description: "Model Gr2 with textures HD",
        price: "30€",
        image: "/img/Armors/Blood_Moon4.jpg",
      },
    ],
  },
]);
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
