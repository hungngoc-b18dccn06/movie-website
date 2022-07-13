<template>
  <div class="container flex justify-between boder-b">
    <Navbar />
    <SearchbarVue />
  </div>
    <PopularMovies />
</template>

<script>
import SearchbarVue from './header/Searchbar.vue';
import Navbar from './header/Navbar.vue';
import PopularMovies from '@/components/PopularMovies.vue'
export default { components: { Navbar, SearchbarVue, PopularMovies } };
</script>

<style lang="scss" scoped></style>
