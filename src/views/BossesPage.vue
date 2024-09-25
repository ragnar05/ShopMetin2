<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <!-- Título de la sección -->
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Bosses</h1>

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
  </div>
</template>

<script setup>
import { ref } from "vue";

// Ejemplo de datos de categorías y productos
const categories = ref([
  {
    name: "Bosses",
    products: [
      {
        id: 01,
        name: "Boss01",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "/img/boss01.jpg",
      },
      {
        id: 02,
        name: "Boss02",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss02.jpg",
      },
      {
        id: 03,
        name: "Boss03",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss03.jpg",
      },
      {
        id: 04,
        name: "Boss04",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss04.jpg",
      },
      {
        id: 05,
        name: "Boss05",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss05.jpg",
      },
      {
        id: 06,
        name: "Boss06",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss06.jpg",
      },
      {
        id: 07,
        name: "Boss07",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss07.jpg",
      },
      {
        id: 08,
        name: "Boss08",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss08.jpg",
      },
      {
        id: 09,
        name: "Boss09",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss09.jpg",
      },
      {
        id: 10,
        name: "Boss10",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss10.jpg",
      },
      {
        id: 11,
        name: "Boss11",
        description: "Model Boss in Gr2 with animations",
        price: "5€",
        image: "ShopMetin2/public/img/boss11.jpg",
      },
    ],
  },
]);
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
