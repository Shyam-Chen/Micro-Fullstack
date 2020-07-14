<template>
  <div id="app">
    <nav>
      <ul>
        <li><div class="link" @click="push('/vue')">Vue</div></li>
        <li><div class="link" @click="push('/react')">React</div></li>
        <li><div class="link" @click="push('/angular/')">Angular</div></li>
      </ul>
    </nav>

    <div id="nav">
      <router-link to="/">Home~</router-link>
      |
      <router-link to="/about">About~</router-link>
    </div>

    <router-view />

    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  methods: {
    push(location) {
      window.history.pushState({}, '', location);
    },
  },
};
</script>

<style scoped>
.link {
  color: blue;
}
</style>
