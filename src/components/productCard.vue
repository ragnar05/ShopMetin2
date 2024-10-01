<template>
  <div
    class="flex flex-col md:flex-row p-4 bg-gray-800 text-white rounded-lg shadow-md"
  >
    <!-- Columna izquierda (40%) -->
    <div class="w-full md:w-2/5 pr-4 flex flex-col">
      <!-- Título -->
      <h2 class="text-2xl font-bold mb-4">{{ productTitle }}</h2>

      <!-- Lista de características (pegadas abajo) -->
      <div class="flex-grow flex flex-col justify-center">
        <ul class="space-y-2 mb-4">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-center"
          >
            <svg
              class="w-5 h-5 text-blue-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Botones (también pegados abajo) -->
      <div>
        <button
          class="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition flex items-center justify-center"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          How to buy?
        </button>
        <a
          :href="urlIngameVideo"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-teal-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-teal-600 transition flex items-center justify-center"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12H8m4-4l-4 4 4 4"
            ></path>
          </svg>
          Ingame Video
        </a>
      </div>
    </div>

    <!-- Columna derecha (Swiper, 60%) -->
    <div class="w-full md:w-3/5 relative mt-4 md:mt-0 md:ml-4">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="true"
        :navigation="true"
        :modules="[Navigation, Pagination]"
        class="mySwiper"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img
            :src="image"
            alt="Product image"
            class="w-full custom-img object-fill rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

// Definir las props que recibirá el componente
defineProps({
  productTitle: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  urlIngameVideo: {
    type: String,
    required: true,
  },
});
</script>

<style>
@import "swiper/swiper-bundle.css";

.mySwiper {
  height: auto; /* Permite que la altura se ajuste automáticamente */
}

.custom-img {
  height: 26rem; /* Altura estándar para desktop */
  object-fit: fill; /* Mantiene la proporción de aspecto y cubre el área */
}

/* Ajustes para móviles */
@media (max-width: 640px) {
  .custom-img {
    height: 18rem; /* Ajusta la altura para móvil */
  }
}

/* Estilos para las flechas de navegación del Swiper */
.swiper-button-next,
.swiper-button-prev {
  font-size: 26px; /* Tamaño de las flechas */
  width: 32px; /* Ajusta el ancho */
  height: 32px; /* Ajusta la altura */
}

/* Ajustar tamaño de las flechas usando pseudo-elementos */
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 26px; /* Tamaño de las flechas */
  line-height: 32px; /* Alineación vertical */
}
</style>
