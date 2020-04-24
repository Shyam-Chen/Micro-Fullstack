<template>
  <div id="app">
    <nav>
      <ul>
        <li><a @click="goto('hello app', '/hello')">hello</a></li>
        <li><a @click="goto('world app', '/world')">world (Blank Page)</a></li>
        <!-- <li><a @click="goto('svelte-webpack', '/svelte-webpack')">svelte-webpack</a></li> -->
      </ul>
    </nav>

    <div id="nav">
      <router-link to="/">Home~</router-link>
      |
      <router-link to="/about">About~</router-link>
    </div>
    <router-view />

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    goto(title, href) {
      window.history.pushState({}, title, href);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
