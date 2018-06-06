<template id="nyt-article">
  <div>
    <div class="columns is-multiline is-mobile">

      <div v-for="article in articles" class="column is-one-third">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <a v-bind:href="article.web_url">
                <img
                  v-bind:src="'https://nytimes.com/'
                    + article.multimedia !== 'undefined'
                    ? article.multimedia[0][url]
                    : ''"
                  v-bind:alt="article.headline.main"
                />
              </a>
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  <a v-bind:href="article.web_url">
                    {{ article.headline.main }}
                  </a>
                </p>
                <p class="subtitle is-6">{{ article.byline.original }}</p>
              </div>
            </div>
            <div class="content">
              {{ article.lead_paragraph }}
              <br>
              <small>{{ article.pub_date }}</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Axios from 'axios';

  export default {
    name: 'nyt-article',
    props: ['search'],
    data() {
      return {
        articles: [],
      };
    },
    components: {
      'nyt-article': {
        template: '#nyt-article',
      },
    },
    computed() {
      return {
        userSearchInput() {
        },
      };
    },
    mounted() {
      const searchQuery = 'Steve Jobs';
      const apiKey = '2e69849a8c1f4e76aaad0835e3e179cd'; // Be Kind Rewind: https://youtu.be/J7C8nHAAs70?t=17s > please get your own API key please.
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
        }).catch((err) => {
          console.table(err);
        });
    },
  };
</script>

<style scoped>
  .card {
    min-height: 260px;
  }

  .card-content .title + .subtitle {
    margin-top: -.8rem;
    border-bottom: 1px solid #eee;
    padding: .2rem 0 .5rem 0;
    font-size: 0.8em;
  }
</style>
