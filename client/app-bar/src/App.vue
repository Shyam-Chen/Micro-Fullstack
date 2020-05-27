<template>
  <div id="app">
    <nav>
      <ul>
        <li><div class="link" @click="goto('hello app', '/hello')">Foo</div></li>
        <li><div class="link" @click="goto('world app', '/world')">Bar</div></li>
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
.link {
  color: blue;
}
</style>
