
<template>
  <div class="nyt-search-results">
    {{ msg }}
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'nyt-search-results',
  data() {
    return {
      msg: 'Searching...',
    };
  },
  mounted() {
    const searchQuery = 'Reuters';
    const apiKey = '2e69849a8c1f4e76aaad0835e3e179cd'; // Be Kind Rewind: https://youtu.be/J7C8nHAAs70?t=17s > get your own API please.
    const nytApiUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&sort=newest&api-key=${apiKey}`;
    const apiCall = Axios.create({
      baseURL: nytApiUrl,
      headers: {
        'content-type': 'application/json',
      },
    });
    // make an ajax call
    apiCall.get(nytApiUrl)
      .then(response => console.log(response));
  },
};
</script>

<style>
  .search-results {
    background-color:#FFF;
    min-height: 300px;
  }
</style>
