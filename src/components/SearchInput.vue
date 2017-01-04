<template>
  <form id="form-container" class="form-container">
    <div class="row">
      <div class="column column-80">
        <label for="search" class="hidden">Search: </label>
        <input id="jsSearchInput" class="search-input" type="text" name="search" v-model="query">
			</div>
			<div class="column column-20">
        <button id="submit-btn">Search</button>
			</div>
		</div>
	</form>
</template>

<script>
export default {
  name: 'search-input',
  data() {
    return {
      query: 'Enter Search',
    };
  },
};
</script>

<style>
.hidden {
  display: none;
}
.button, button, input[type='button'], input[type='reset'], input[type='submit'] {
	background-color: #333;
    border: 0.1rem solid #333;
 }

input[type='email']:focus, input[type='number']:focus, input[type='password']:focus, input[type='search']:focus, input[type='tel']:focus, input[type='text']:focus, input[type='url']:focus, textarea:focus, select:focus {
	border-color: #000;
}
</style>
