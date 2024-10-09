<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <!-- Título de la sección -->
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Mobs</h1>

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
    name: "Mobs",
    products: [
      {
        id: 1,
        name: "Monster1",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/monster1.jpg",
      },
      {
        id: 2,
        name: "Monster2",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/monster2.jpg",
      },
      {
        id: 3,
        name: "Monster3",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/Monster3.jpg",
      },
      {
        id: 4,
        name: "Monster4",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/Monster4.jpg",
      },
      {
        id: 5,
        name: "Monster5",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/Monster5.jpg",
      },
      {
        id: 6,
        name: "Monster6",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/Monster6.jpg",
      },
      {
        id: 7,
        name: "Monster7",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/Monster7.jpg",
      },
      {
        id: 8,
        name: "Monster8",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/Monster8.jpg",
      },
      {
        id: 9,
        name: "Monster9",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/Monster9.jpg",
      },
      {
        id: 10,
        name: "Monster10",
        description: "Model Monster in Gr2 with animations",
        price: "3€",
        image: "img/Monsters/Monster10.jpg",
      },
    ],
  },
]);
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
