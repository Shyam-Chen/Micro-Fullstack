<svelte:options tag="app-header"></svelte:options>

<script>
export let title = 'Title';
</script>

<style>
.title {
  color: pink;
}
</style>

<div class="title">{title}</div>
