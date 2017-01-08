<template>
<div>
  <div class="control is-grouped">
    <p class="control is-expanded">
      <label for="search" class="hidden">Search:</label>
      <input v-model="searchArticles" class="input is-two-thirds" type="text" placeholder="I am looking for...">
    </p>
    <p class="control">
      <a class="button is-info">
        Search
      </a>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'search-input',
  data() {
    return {
      loading: false,
      error: false,
      query: '',
    };
  },
  methods() {
    return {
      searchArticles() {
        console.log('Searching...');
      },
    };
  },
};
</script>

<style scoped>
  .hidden {
    display: none;
  }
  .is-info {
    background-color: #000;
  }
  .button.is-info.is-hovered, .button.is-info:hover {
    background-color: #333;
  }
</style>
