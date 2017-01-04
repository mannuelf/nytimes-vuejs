<template>
  <div id="app">
    <img class="nyt-logo" src="./assets/NewYorkTimes.svg">
    <SearchInput></SearchInput>
  </div>
</template>

<script>
import Hello from './components/Hello';
import SearchInput from './components/SearchInput';

export default {
  name: 'app',
  components: {
    Hello,
    SearchInput,
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
