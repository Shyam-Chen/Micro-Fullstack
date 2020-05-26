<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span class="dynamic">dynamic span color</span>

    <app-header></app-header>
    <app-header ref="appHeader" :title="title"></app-header>
  </div>
</template>

<style>
.dynamic {
  color: green;
}
</style>

<script>
import '@cpn/header/Header';

export default {
  data() {
    return {
      title: 'Title 333',
    };
  },
  mounted() {
    // FIXME: https://github.com/sveltejs/svelte/issues/3119
    this.$refs.appHeader.$on('message', evt => {
      console.log(evt.detail.text);
    });
  },
};
</script>
