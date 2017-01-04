import Vue from 'vue';
import SearchInput from 'src/components/SearchInput';

describe('SearchInput.vue', () => {
  it('should render a search input field', () => {
    const vm = new Vue({
      el: document.createElement('input'),
      render: (h) => h(SearchInput),
    });
    expect(vm.$el.querySelector('input').innerHTML)
      .to.equal('input');
  });
});
