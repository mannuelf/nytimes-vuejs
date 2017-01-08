<template>
  <div id="nyt-app">
    <header class="header">
      <img class="nyt-logo" src="./assets/NewYorkTimes.svg">
    </header>
    <section class="section">
      <div class="container is-fluid">
        <SearchInput></SearchInput>
        <SearchResults></SearchResults>
        <Footer></Footer>
      </div>
    </section>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';

export default {
  name: 'nyt-app',
  components: {
    SearchInput,
    SearchResults,
    Footer,
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
  }
</style>
