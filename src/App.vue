<template>
  <div id="nyt-app">
    <img class="nyt-logo" src="./assets/NewYorkTimes.svg">
    <SearchInput></SearchInput>
    <SearchResults></SearchResults>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';

export default {
  name: 'nyt-app',
  components: {
    SearchInput,
    SearchResults,
  },
};
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/milligram/1.2.4/milligram.min.css);
body {
  background-color: #eee;
}
#app {
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
