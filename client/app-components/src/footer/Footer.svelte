<script>
  import { createEventDispatcher } from 'svelte';
  import { get_current_component } from 'svelte/internal';

  export let title = 'Good';

  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }));
  };

  function sayGood() {
    dispatch('good', { text: 'Good!' });
  }
</script>

<style>
  .title {
    color: #009688;
    font-size: 5rem;
  }
</style>

<div class="title">{title}</div>
<button on:click="{sayGood}">Good Good</button>
