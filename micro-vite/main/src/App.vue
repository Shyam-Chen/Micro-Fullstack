<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <RouterLink to="/">Home</RouterLink> /
  <RouterLink to="/about">About</RouterLink> /

  <RouterLink to="/foo">Foo</RouterLink> /
  <RouterLink to="/foo/codespaces">Codespaces (Foo)</RouterLink> /
  <RouterLink to="/foo/marketplace">Marketplace (Foo)</RouterLink> /

  <RouterLink to="/bar">Bar</RouterLink>

  <RouterView />
  <div id="subapp-viewport"></div>
</template>
