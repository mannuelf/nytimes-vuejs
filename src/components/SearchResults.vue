
<template id="nyt-article">
  <div>
    <div v-for="article in articles">
        <a v-bind:href="article.web_url">
          <img v-bind:src="article.multimedia.url" v-bind:alt="article.headline.main">
        </a>
        <h1><a v-bind:href="article.web_url">{{ article.headline.main }}</a></h1>
        <div>{{ article.pub_date }} | {{ article.byline.original }}</div>
        <p>{{ article.lead_paragraph }}</p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'nyt-article',
  data() {
    return {
      props: [],
      articles: [],
    };
  },
  components: {
    'nyt-article': {
      template: '#nyt-article',
    },
  },
  mounted() {
    const searchQuery = 'Donald Trump';
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
        // assign the response to articles variable this will get assigned data() method above
        this.articles = response.data.response.docs;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
