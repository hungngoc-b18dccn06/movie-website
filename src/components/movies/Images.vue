<template>
  <div class="container mx-auto  border-b border-gray-600 px-4 py-4">
    <h2 class="text-4xl font-semibold mb-5">
      Movie Images
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="mr-2">
        <img src="https://www.actusf.com/files/new_images/actualit%C3%A9s/joker-film-2019.jpg" class="hover:opacity-75 tansition easy-in-out duration-150" alt=""/>
        <span class="text-gray-300">Leminho</span>
      </div>
      <div class="mr-2">
        <img src="https://www.actusf.com/files/new_images/actualit%C3%A9s/joker-film-2019.jpg" class="hover:opacity-75 tansition easy-in-out duration-150" />
        <span class="text-gray-300">Leminho</span>
      </div>
      <div class="mr-2">
        <img src="@/assets/images/joker.jpg" class="hover:opacity-75 tansition easy-in-out duration-150" />
        <span class="text-gray-300">Leminho</span>
      </div>
      <div class="mr-2">
        <img src="https://m.media-amazon.com/images/M/MV5BOGRhZDgxM2UtMGZjOC00NjI1LWI4ODMtNGExY2I2MzZlODUyXkEyXkFqcGdeQXVyNzY1ODU1OTk@._V1_FMjpg_UX1000_.jpg" class="hover:opacity-75 tansition easy-in-out duration-150" />
        <span class="text-gray-300">Joker</span>
      </div>
      
    </div>
  </div>
</template>


<script>
export default {
    name: 'MovieWebCast',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>