<template>
  <div class="render">
    <div v-if="loading">loading</div>
    <div id="subapp-viewport"></div>
    <div v-html="content">content</div>
  </div>
</template>

<script>
export default {
  name: 'Render',
  props: {
    loading: Boolean,
    content: String,
  },
};
</script>

<style scoped>
.render {
  background: pink;
}
</style>
