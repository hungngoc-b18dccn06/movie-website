<template>
  <div class="mx-5">
    <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold">
      Popular Movies
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <MovieItem :key="movie.id" v-for="movie in movies" v-bind:movie="movie" :genres="genres" />
    </div>
  </div>
</template>

<script>
import MovieItem from "./Items/MovieItem.vue";
import axios from "axios";
export default {
  components: { MovieItem },
  data() {
    return {
      movies: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1`
      );
      this.movies = response.data.results;
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped></style>
