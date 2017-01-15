<template id="search-input">
<div class="control is-grouped">

  <form method="post" @submit.prevent="loadData()">
    <p class="control has-addons">
      <label for="search" class="hidden">Search:</label>
      <input
        ref="input"
        name="searchQuery"
        v-model="searchQuery"
        class="input is-two-thirds"
        type="text" placeholder="I'm looking for => ">
      <a class="button is-info"
        @click="btnSubmitQuery()">
          Search
      </a>
    </p>
  </form>

</div>
</template>

<script>

export default {
  name: 'search-input',
  errors: [],
  props: '',
  data() {
    return {
      articles: ['searchQuery'],
      searchQuery: '',
      btnSubmitQuery: '',
      loadData: '',
    };
  },
  watch() {
    return {
      searchQuery() {
        this.searchQuery = '';
        this.btnSubmitQuery();
      },
    };
  },
  methods() {
    return {
      btnSubmitQuery() {
        this.searchQuery = '';
        this.loadData();
      },
      loadData(searchQuery) {
        const formattedValue = searchQuery.trim();
        if (formattedValue !== searchQuery) {
          this.$refs.input.value = formattedValue;
        }
        this.$emit('input', formattedValue);
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
