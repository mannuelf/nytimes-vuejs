<template id="search-input">
  <div class="control is-grouped">
    <form method="post">
      <p class="control has-addons">
        <label for="search" class="hidden">SEARCH</label>
        <input
          v-model="search"
          class="input is-two-thirds"
          type="text" placeholder="I'm looking for">

          <a class="button is-info">
              Search
          </a>
      </p>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'search',
    props: ['search'],
    data() {
      return {
        search: '',
      };
    },
    computed: {
      queryResult() {
        return this.search;
      },
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
