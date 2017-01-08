<template>
<div>
    <div class="control has-addons has-addons-right">
    <form id="form">
      <label for="search" class="hidden">Search:</label>
      <input v-model="userSearches" id="jsSearchInput"  class="input" type="text" name="search" placeholder="I am looking for...">
      <button v-on:click="searchArticles" class="button is-info">Search</button>
    </form>
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
