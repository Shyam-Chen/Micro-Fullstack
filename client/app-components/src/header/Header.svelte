<svelte:options tag="app-header"></svelte:options>

<script>
export let title = 'Title';
</script>

<style>
.title {
  color: pink;
  font-size: 5rem;
}
</style>

<div class="title">{title}</div>
