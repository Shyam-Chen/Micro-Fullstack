<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span class="dynamic">dynamic span color</span>

    <app-header></app-header>

    <!-- @message="log" -> v-evt:message="log" -->
    <app-header :title="title" v-evt:message="log"></app-header>
  </div>
</template>

<style>
.dynamic {
  color: green;
}
</style>

<script>
import '~/header/Header';

// https://github.com/sveltejs/svelte/issues/3119
const evt = {
  bind(el, binding, vnode) {
    el.$on(binding.arg, binding.value);
  },
};

export default {
  directives: {
    evt,
  },
  data() {
    return {
      title: 'Title 333',
    };
  },
  methods: {
    log(evt) {
      console.log(evt.detail.text);
    },
  },
};
</script>
