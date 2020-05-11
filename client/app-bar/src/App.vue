<template>
  <div id="app">
    <nav>
      <ul>
        <li><a @click="goto('hello app', '/hello')">hello</a></li>
        <li><a @click="goto('world app', '/world')">world (Blank Page)</a></li>
      </ul>
    </nav>
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

<style scoped>

</style>
