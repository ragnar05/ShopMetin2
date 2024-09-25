<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo / Nombre -->
      <router-link to="/" class="text-white text-xl font-bold">
        ShopMetin2
      </router-link>

      <!-- Links del Nav -->
      <div class="hidden md:flex space-x-4">
        <!-- Dropdown Costumes -->
        <div class="relative group">
          <router-link to="/costumes" class="text-gray-300 hover:text-white">
            Costumes
          </router-link>
          <div
            class="absolute left-0 hidden bg-gray-700 group-hover:block transition-all duration-300"
            style="z-index: 50"
          >
            <router-link
              to="/costumes/costumes"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Costumes</router-link
            >
            <router-link
              to="/costumes/armors"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Armors</router-link
            >
            <router-link
              to="/costumes/weapons"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Weapons</router-link
            >
            <router-link
              to="/costumes/sashes"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Sashes</router-link
            >
            <router-link
              to="/costumes/wings"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Wings</router-link
            >
            <router-link
              to="/costumes/hair"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Hair</router-link
            >
          </div>
        </div>

        <!-- Dropdown Monsters -->
        <div class="relative group">
          <router-link to="/monsters" class="text-gray-300 hover:text-white">
            Monsters
          </router-link>
          <div
            class="absolute left-0 hidden bg-gray-700 group-hover:block transition-all duration-300"
            style="z-index: 50"
          >
            <router-link
              to="/monsters/mobs"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Mobs</router-link
            >
            <router-link
              to="/monsters/bosses"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Bosses</router-link
            >
            <router-link
              to="/monsters/stones"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Stones</router-link
            >
          </div>
        </div>

        <!-- Dropdown Monsters -->
        <div class="relative group">
          <router-link to="/resell" class="text-gray-300 hover:text-white">
            ReSell
          </router-link>
          <div
            class="absolute left-0 hidden bg-gray-700 group-hover:block transition-all duration-300"
            style="z-index: 50"
          >
            <router-link
              to="/resell/plechito"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Plechito</router-link
            >
            <router-link
              to="/resell/dane"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Dane</router-link
            >
            <router-link
              to="/resell/ridack"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Ridack</router-link
            >
            <router-link
              to="/resell/tatsumaru"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Tatsumaru</router-link
            >
            <router-link
              to="/resell/mehok"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Mehok</router-link
            >
            <router-link
              to="/resell/killua"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Killua</router-link
            >
            <router-link
              to="/resell/kidu"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Kidu</router-link
            >
          </div>
        </div>

        <!-- Dropdown NPC -->
        <div class="relative group">
          <router-link to="/npc" class="text-gray-300 hover:text-white">
            NPC
          </router-link>
          <div
            class="absolute left-0 hidden bg-gray-700 group-hover:block transition-all duration-300"
            style="z-index: 50"
          >
            <router-link
              to="/npc/mounts"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Mounts</router-link
            >
            <router-link
              to="/npc/pets"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Pets</router-link
            >
            <router-link
              to="/npc/npcs"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-600"
              >Npcs</router-link
            >
          </div>
        </div>

        <!-- Otros Links -->
        <router-link to="/free" class="text-gray-300 hover:text-white">
          Free
        </router-link>
        <router-link to="/contact" class="text-gray-300 hover:text-white">
          Contact
        </router-link>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-300 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-show="isOpen" class="md:hidden mt-4">
      <div class="relative">
        <router-link
          to="/costumes"
          class="block text-gray-300 hover:text-white"
        >
          Costumes
        </router-link>
        <div class="ml-4">
          <router-link
            to="/costumes/costumes"
            class="block text-gray-300 hover:bg-gray-600"
            >Costumes</router-link
          >
          <router-link
            to="/costumes/armors"
            class="block text-gray-300 hover:bg-gray-600"
            >Armors</router-link
          >
          <router-link
            to="/costumes/weapons"
            class="block text-gray-300 hover:bg-gray-600"
            >Weapons</router-link
          >
          <router-link
            to="/costumes/sashes"
            class="block text-gray-300 hover:bg-gray-600"
            >Sashes</router-link
          >
          <router-link
            to="/costumes/wings"
            class="block text-gray-300 hover:bg-gray-600"
            >Wings</router-link
          >
          <router-link
            to="/costumes/hair"
            class="block text-gray-300 hover:bg-gray-600"
            >Hair</router-link
          >
        </div>
      </div>

      <div class="relative">
        <router-link
          to="/monsters"
          class="block text-gray-300 hover:text-white"
        >
          Monsters
        </router-link>
        <div class="ml-4">
          <router-link
            to="/monsters/mobs"
            class="block text-gray-300 hover:bg-gray-600"
            >Mobs</router-link
          >
          <router-link
            to="/monsters/bosses"
            class="block text-gray-300 hover:bg-gray-600"
            >Bosses</router-link
          >
          <router-link
            to="/monsters/stones"
            class="block text-gray-300 hover:bg-gray-600"
            >Stones</router-link
          >
        </div>
      </div>

      <div class="relative">
        <router-link to="/resell" class="block text-gray-300 hover:text-white">
          ReSell
        </router-link>
        <div class="ml-4">
          <router-link
            to="/resell/plechito"
            class="block text-gray-300 hover:bg-gray-600"
            >Plechito</router-link
          >
          <router-link
            to="/resell/dane"
            class="block text-gray-300 hover:bg-gray-600"
            >Dane</router-link
          >
          <router-link
            to="/resell/ridack"
            class="block text-gray-300 hover:bg-gray-600"
            >Ridack</router-link
          >
          <router-link
            to="/resell/tatsumaru"
            class="block text-gray-300 hover:bg-gray-600"
            >Tatsumaru</router-link
          >
          <router-link
            to="/resell/mehok"
            class="block text-gray-300 hover:bg-gray-600"
            >Mehok</router-link
          >
          <router-link
            to="/resell/killua"
            class="block text-gray-300 hover:bg-gray-600"
            >Killua</router-link
          >
          <router-link
            to="/resell/kidu"
            class="block text-gray-300 hover:bg-gray-600"
            >Kidu</router-link
          >
        </div>
      </div>

      <div class="relative">
        <router-link to="/npc" class="block text-gray-300 hover:text-white">
          NPC
        </router-link>
        <div class="ml-4">
          <router-link
            to="/npc/mounts"
            class="block text-gray-300 hover:bg-gray-600"
            >Mounts</router-link
          >
          <router-link
            to="/npc/pets"
            class="block text-gray-300 hover:bg-gray-600"
            >Pets</router-link
          >
          <router-link
            to="/npc/npcs"
            class="block text-gray-300 hover:bg-gray-600"
            >Npcs</router-link
          >
        </div>
      </div>

      <router-link to="/free" class="block text-gray-300 hover:text-white">
        Free
      </router-link>
      <router-link to="/contact" class="block text-gray-300 hover:text-white">
        Contact
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}
</style>
