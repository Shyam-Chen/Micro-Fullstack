<template>
  <div>
    <div v-if="blank">
      <div>blank</div>
      <div v-if="loading">loading</div>
      <div class="appContainer" v-html="content">content</div>
    </div>

    <div v-if="!blank">
      <header class="header">
        <nav>
          <ol>
            <li><a @click="goto('hello app', '/hello')">hello</a></li>
            <li><a @click="goto('world app', '/world')">world</a></li>
          </ol>
        </nav>
      </header>

      <div v-if="loading">loading</div>
      <div class="appContainer" v-html="content">content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'framework',
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

<style scoped>
.header {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
    Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

  > nav > ol {
    margin: 0;
    font-size: 14px;
    color: blue;
    display: flex;
    flex-direction: column;
    padding: 0;

    > li {
      box-sizing: content-box;
      line-height: 20px;
      font-variant: tabular-nums;
      font-feature-settings: 'tnum';
      list-style: decimal;
      padding: 0;
      margin: 0;
    }

    a {
      color: blue;
      text-decoration-line: underline;
    }
  }
}

.appContainer {
  margin-top: 50px;
}
</style>
