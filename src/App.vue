<template>
  <div id="nyt-app">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item nyt-logo" href="http://developer.nytimes.com/" target="_blank"></a>
      </div>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu is-active">
        <span class="nav-item">
          <SearchInput />
        </span>
      </div>
    </nav>

    <section class="section">
      <div class="container is-fluid">
        <SearchResults />
        <FooterCredits />
      </div>
    </section>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import FooterCredits from './components/Footer-credits';

export default {
  name: 'nyt-app',
  components: {
    SearchInput,
    SearchResults,
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
    text-align: center;
    color: #2c3e50;
  }
  .nyt-logo {
    width: 100%;
    background-image: url('http://static01.nytimes.com/packages/images/developer/logos/poweredby_nytimes_200a.png');
    background-repeat: no-repeat;
    background-size: 200px;
    background-position: 1rem .5rem;
  }
</style>
