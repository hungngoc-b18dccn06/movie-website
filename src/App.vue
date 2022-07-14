<template>
  <div id="app">
     <div class="flex justify-between border-b border-gray-500">
      <Navbar />
      <SearchbarVue />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/header/Navbar.vue';
import SearchbarVue from './components/header/Searchbar.vue';
export default {
  components: {
    Navbar,
    SearchbarVue
  }



};
</script>

<style>
</style>
