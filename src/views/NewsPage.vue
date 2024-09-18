<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <!-- Título de la sección -->
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Latest News</h1>

    <!-- Contenedor de noticias -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Tarjeta de noticia -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="https://via.placeholder.com/400x200"
          alt="News Image"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-2xl font-semibold text-gray-800">News Title 1</h2>
          <p class="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et diam euismod, condimentum erat ut, malesuada odio.
          </p>
          <button
            class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Read more
          </button>
        </div>
      </div>

      <!-- Tarjeta de noticia 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="https://via.placeholder.com/400x200"
          alt="News Image"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-2xl font-semibold text-gray-800">News Title 2</h2>
          <p class="text-gray-600 mt-2">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <button
            class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Read more
          </button>
        </div>
      </div>

      <!-- Tarjeta de noticia 3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="https://via.placeholder.com/400x200"
          alt="News Image"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-2xl font-semibold text-gray-800">News Title 3</h2>
          <p class="text-gray-600 mt-2">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </p>
          <button
            class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
