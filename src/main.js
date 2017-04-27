// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

/* eslint-disable no-new */
const eventBus = new Vue({
  methods: {
    searchArticles(searchQuery) {
      this.$emit('articleSearched', searchQuery);
    },
  },
});
export { eventBus as default };

new Vue({
  el: '#nyt-app',
  template: '<App/>',
  components: { App },
});
