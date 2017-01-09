<template id="nyt-footer">
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Read the New York Times</strong> by <a href="https://github.com/manidf" target="_blank">Mannuel Ferreira</a>. <br>
          This website is built using the <a href="https://developer.nytimes.com/" target="_blank">New York Times open API</a>,
          <a href="https://github.com/vuejs-templates/webpack" target="_blank">Vue JS 2.0</a>,
          <a href="https://github.com/mzabriskie/axios" target="_blank">Axios HTTP Client</a> and
          <a href="http://bulma.io/">Bulma</a> CSS framework. <br>
          The source code is licensed <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>. <br>
          The New York Times API usage terms can <a href="https://developer.nytimes.com/tou" target="_blank">read here</a>.
        </p>
        <p>
          <a class="icon" href="https://github.com/manidf" target="_blank">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'nyt-footer',
  };
</script>
<style>
  .footer {
    margin-top: 1.5em;
  }
</style>
