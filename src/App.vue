<template>
  <div id="nyt-app">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item nyt-logo" href="http://developer.nytimes.com/" target="_blank"></a>
      </div>
      <div class="nav-right nav-menu is-active">
        <span class="nav-item">
          <SearchInput/>
        </span>
      </div>
    </nav>

    <section class="section">
      <div class="container is-fluid">
        <ArticleCard/>
        <FooterCredits/>
      </div>
    </section>
  </div>
</template>

<script>
  import SearchInput from './components/SearchInput';
  import ArticleCard from './components/SearchResults';
  import FooterCredits from './components/FooterCredits';

  export default {
    name: 'nyt-app',
    components: {
      SearchInput,
      ArticleCard,
      FooterCredits,
    },
  };
</script>

<style>
  @import url(https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.0/css/bulma.min.css);

  body {
    background-color: #eee;
  }

  #nyt-app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: inherit;
    color: #2c3e50;
  }

  .nav {
    background-color: #f1f1f1;
  }

  .nyt-logo {
    width: 100%;
    background-image: url('./assets/poweredby_nytimes_200c.png');
    background-repeat: no-repeat;
    background-size: 200px;
    background-position: .75rem .25rem;
  }

  a:link, a:visited {
    color: #000;
  }

  a:hover {
    color: #F90;
  }
</style>
