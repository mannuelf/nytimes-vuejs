<template>
  <div class="nyt-search-results">

    {{ msg }}

  </div>
</template>

<script>
export default {
  name: 'nyt-search-results',
  data() {
    return {
      msg: 'Searching...',
    };
  },
};
</script>

<style>
  .search-results {
    background-color:#FFF;
    min-height: 300px;
  }
</style>
