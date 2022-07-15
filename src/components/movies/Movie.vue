<template>
  <div>
    <div class="container mx-auto flex mt-5 border-b border-gray-600 p-5">
      <img
          :src="posterPath"
          alt=""
         class="w-64" />
      <div class="ml-5">
        <h1 class="text-3xl font-semibold">{{ movie.title }}</h1>
        <div class="text-gray-500 text-sm flex">
          <svg
            class="fill-current text-yellow-500 w-4 h-4 mr-1"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          {{ this.movie.vote_average * 10 }} % | {{ movie.release_date }}

          <span :key="index" v-for="(item, index) in movie.genres" class="ml-1">
            {{ item.name }}
            <span v-if="movie.genres.length - 1 != index">,</span>
          </span>
        </div>
        <p class="mt-5">
          {{movie.overview}}
        </p>
        <div class="mt-5">
          <span class="mt-5 font-semibold">Feature Cast</span>
          <div class="flex">
            <div class="flex flex-col mt-5 mr-5">
              <span>Scott sliver</span>
              <span class="text-gray-500">Writer</span>
            </div>
            <div class="flex flex-col mt-5">
              <span>Bruce Berman</span>
              <span class="text-gray-500">Excutive Producer</span>
            </div>
          </div>
        </div>
        <div class="mt-5 cursor-auto">
          <a
            @click.prevent="openYouTubeModel"
            target="blank"
            class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black cursor-auto"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
            <span class="ml-3">Play Trailer</span>
          </a>

          <a
            href="#"
            class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black ml-5"
          >
            <img src="@/assets/images/heart-white.png" alt="" />
            <span @click="test" class="ml-3">Favourite</span>
          </a>
        </div>
      </div>
    </div>

    <Cast />
    <MovieImages />
  </div>
</template>

<script>
import axios from "axios";
import MovieImages from "@/components/movies/Images.vue";
import Cast from "@/components/movies/Cast";
export default {
  name: "Movie",
  components: {
    Cast,
    MovieImages,
  },
  data() {
    return {
      movie: [],
    };
  },

  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  async mounted() {
    const data = axios.get(
      `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`
    );
    const result = await data;
    this.movie = result.data;
    console.log(this.movie);
  },
};
</script>

<style lang="scss" scoped></style>
