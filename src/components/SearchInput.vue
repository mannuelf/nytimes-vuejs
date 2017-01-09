<template>
<div>
  <div class="control is-grouped">
    <p class="control is-expanded">
      <label for="search" class="hidden">Search:</label>
      <!-- Grab the value with v-bind:value, will get passed down to child component via props -->
      <input
        v-model="searchArticles"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)"
        class="input is-two-thirds" type="text" placeholder="I am looking for...">
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
      props: ['value'],
    };
  },
  methods() {
    return {
      updateValue(value) {
        console.log('Searching...', value);
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
