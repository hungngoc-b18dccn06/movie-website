<template>
  <div class="mt-5 flex mr-5">
    <input
      type="text"
      ref="searchBox"
      class="rounded-full bg-gray-600 px-7 ml-2 w-50 h-8 mr-3 focus:outline-none focus:outline-shawod"
      placeholder="Search.."
    />
    <div class="absolute top-4 pl-2">
      <svg
        class="fill-current w-4 text-gray-300 mt-2 ml-2 mt-3"
        viewBox="0 0 24 24"
      >
        <path
          class="heroicon-ui"
          d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
        />
      </svg>
    </div>
   <div v-if="false" class="absolute mt-12 rounded bg-gray-600 w-60 z-50 ml-2">
      <ul class="mt-3">
        <li class="flex items-center border-b border-gray-500 p-1 ">
            <img src="https://www.actusf.com/files/new_images/actualit%C3%A9s/joker-film-2019.jpg" alt="" class="w-10 " />
            <span class="ml-3">Joker</span>
        </li>
      </ul>
      <!-- <ul class="px-3" v-if="searchResult.length == 0 && showSearchResult">
        <li>No result found for "{{ searchTerm }}"</li>
      </ul> -->
    </div>
    <img src="@/assets/images/avatar.jpeg" alt="" class="h-9 rounded-full" />
  </div>
</template>

<script>
export default {
  name: "MovieWebSearchbar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
