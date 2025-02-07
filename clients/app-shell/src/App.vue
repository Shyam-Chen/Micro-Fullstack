<script lang="ts">
import garfish from 'garfish';

function goto(parms) {
  console.log(parms);

  // garfish.router.push(parms);

  // window.history.pushState({}, 'sub-foo', `/${parms.path}`);
}
</script>

<template>
  <div>App Shell</div>
  <div @click="goto({ path: '/foo' })">Foo</div>
  <div id="sub-app"></div>
</template>
