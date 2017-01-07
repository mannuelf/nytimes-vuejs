
<template>
  <div class="nyt-search-results">
    <article-results></article-results>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'nyt-search-results',
  data() {
    return {
      articles: [],
    };
  },
  components: {
    'article-results': {
      template: `
        <div>
          <div v-for="article in articles">
            <img src="http://google.com" alt="article photo">
            <h1>{{ articles.headline }}</h1>
            <div>{{ articles.pub_date }} | {{ articles.byline }}</div>
            <p>{{ articles.lead_paragraph }}</p>
          </div>
        </div>`,
    },
  },
  mounted() {
    const searchQuery = 'Reuters';
    const apiKey = '2e69849a8c1f4e76aaad0835e3e179cd'; // Be Kind Rewind: https://youtu.be/J7C8nHAAs70?t=17s > get your own API key please.
    const nytApiUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&sort=newest&api-key=${apiKey}`;
    const apiCall = Axios.create({
      baseURL: nytApiUrl,
      headers: {
        'content-type': 'application/json',
      },
    });
    // make an ajax call
    apiCall.get(nytApiUrl)
      .then((response) => {
        // assign response to articles variable this will get returned by data method above
        this.articles = response.data.response.docs;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
