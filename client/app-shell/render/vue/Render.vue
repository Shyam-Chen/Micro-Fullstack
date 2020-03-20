<template>
  <div>
    <template v-if="blank">
      <div v-if="loading">loading</div>
      <div class="appContainer" v-html="content">content</div>
    </template>

    <template v-if="!blank">
      <header class="header">
        <nav>
          <ol>
            <li><a @click="goto('hello app', '/hello')">hello</a></li>
            <li><a @click="goto('world app', '/world')">world (Blank Page)</a></li>
          </ol>
        </nav>
      </header>

      <div v-if="loading">loading</div>
      <div class="appContainer" v-html="content">content</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Render',
  props: {
    blank: Boolean,
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

<style scoped></style>
