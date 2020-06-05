<template>
  <div id="app">
    <nav>
      <ul>
        <li><div class="link" @click="push('/foo')">Foo</div></li>
        <li><div class="link" @click="push('/bar')">Bar</div></li>
      </ul>
    </nav>

    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    push(location) {
      window.history.pushState({}, '', location);
    },
  },
}
</script>

<style scoped>
.link {
  color: blue;
}
</style>
