<template>
  <div class="mt-5 flex mr-5">
    <input
      type="text"
      ref="searchBox"
      class="rounded-full bg-gray-600 px-5 ml-2 w-50 h-8 mr-3 focus:outline-none focus:outline-shawod"
      placeholder="Search.."
    />
    <h1 v-show="ok">Hello!</h1>
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
