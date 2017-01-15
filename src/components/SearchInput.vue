<template id="search-input">
<div class="control is-grouped">

  <form method="post" @submit.prevent="onSubmit()">
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
import Axios from 'axios';

export default {
  name: 'search-input',
  errors: [],
  data() {
    return {
      searchQuery: '',
      btnSubmitQuery: '',
      onSubmit: '',
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
        this.onSubmit();
      },
      onSubmit(searchQuery) {
        const app = this;
        const apiQuery = searchQuery;
        const apiKey = '2e69849a8c1f4e76aaad0835e3e179cd'; // Be Kind Rewind: https://youtu.be/J7C8nHAAs70?t=17s > please get your own API key please.
        const nytApiUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${apiQuery}&sort=newest&api-key=${apiKey}`;
        const apiCall = Axios.create({
          baseURL: nytApiUrl,
          headers: {
            'content-type': 'application/json',
          },
        });
        // make an ajax call
        apiCall.get(nytApiUrl)
          .then((response) => {
            // assign the response to articles variable this will get assigned data() method above
            app.articles = response.data.response.docs;
          });
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
