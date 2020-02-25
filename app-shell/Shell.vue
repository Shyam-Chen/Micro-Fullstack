<template>
  <div>
    <header>
      <nav>
        <ol>
          <li><a @click="goto('app1', '/app1')">App 1</a></li>
          <li><a @click="goto('app2', '/app2')">App 2</a></li>
        </ol>
      </nav>
    </header>

    <div v-if="loading">loading...</div>
    <div class="appContainer" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'framework',
  props: {
    loading: Boolean,
    content: String,
  },
  methods: {
    goto(title, href) {
      window.history.pushState({}, title, href);
    },
  },
};
</script>
