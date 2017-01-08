<template>
<div>
  <div class="control is-grouped">
    <p class="control is-expanded">
      <label for="search" class="hidden">Search:</label>
      <input class="input" type="text" placeholder="I am looking for...">
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
      userSearches: '',
      query: [],
    };
  },
  methods() {
    return {
      searchArticles() {
        console.log('Searching...');
      },
    };
  },
  // mounted() {
  //  document.querySelector('.search-input').addEventListener('click', () => {
  //    const query = document.querySelector('.search-input').value;
  //    query.value = '';
  // });
  // },
};
</script>

<style scoped>
  .hidden {
    display: none;
  }
</style>
