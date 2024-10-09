<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <!-- Sección de Hero -->
    <section class="relative bg-blue-500 text-white rounded-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/1200x400"
        alt="Hero Image"
        class="w-full h-full object-cover absolute inset-0"
      />
      <div
        class="relative z-10 p-8 flex flex-col justify-center items-center text-center"
      >
        <h1 class="text-4xl font-bold mb-4">Welcome to ShopMetin2</h1>
        <p class="text-lg mb-6">
          Discover a wide range of costumes, weapons, and more for your Metin2
          adventure. Equip yourself with the best gear and explore new
          possibilities!
        </p>
        <router-link
          to="/costumes"
          class="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Shop Now
        </router-link>
      </div>
    </section>

    <!-- Sección de Destacados -->
    <section class="mt-12">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Featured Categories</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <!-- Categoría 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Costumes"
            class="w-full h-48 object-cover"
          />
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Costumes</h3>
            <p class="text-gray-600 mb-4">
              Find the perfect costume to enhance your gameplay. From armor to
              accessories.
            </p>
            <router-link
              to="/costumes"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Explore Costumes
            </router-link>
          </div>
        </div>

        <!-- Categoría 2 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Weapons"
            class="w-full h-48 object-cover"
          />
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Weapons</h3>
            <p class="text-gray-600 mb-4">
              Equip yourself with the finest weapons for your battles. Find
              swords, bows, and more.
            </p>
            <router-link
              to="/weapons"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Explore Weapons
            </router-link>
          </div>
        </div>

        <!-- Categoría 3 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Accessories"
            class="w-full h-48 object-cover"
          />
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Accessories
            </h3>
            <p class="text-gray-600 mb-4">
              Discover accessories that add unique styles and effects to your
              character.
            </p>
            <router-link
              to="/accessories"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Explore Accessories
            </router-link>
          </div>
        </div>

        <!-- Categoría 4 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="NPC"
            class="w-full h-48 object-cover"
          />
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">NPC</h3>
            <p class="text-gray-600 mb-4">
              Meet a variety of NPCs that offer unique services and items.
            </p>
            <router-link
              to="/npc"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Explore NPCs
            </router-link>
          </div>
        </div>
      </div>
    </section>

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
import ProductCard from "@/components/productCard.vue";

// No necesitas lógica específica para esta vista, pero puedes agregarla si la necesitas
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
