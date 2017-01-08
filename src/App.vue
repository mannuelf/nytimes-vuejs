<template>
  <div id="nyt-app">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item nyt-logo" href="#"></a>
      </div>

      <div class="nav-center">
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
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
    background-image: url('./assets/NewYorkTimes.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 280px;
    background-position: 1rem .5rem;
  }
</style>
