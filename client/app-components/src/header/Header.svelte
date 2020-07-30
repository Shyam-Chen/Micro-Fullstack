<script>
import { createEventDispatcher } from 'svelte';

export let title = 'Title';

const dispatch = createEventDispatcher();

function sayHello() {
  dispatch('message', { text: 'Hello!' });
}
</script>

<style>
.title {
  color: pink;
  font-size: 5rem;
}
</style>

<div class="title">{title}</div>
<button on:click={sayHello}>Click Me</button>
