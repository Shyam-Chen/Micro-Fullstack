<script lang="ts" setup>
import { onMounted } from 'vue';
import garfish from 'garfish';
import { GarfishEsModule } from '@garfish/es-module';
// import { GarfishCssScope } from '@garfish/css-scope';

onMounted(() => {
  garfish.run({
    basename: '/',
    domGetter: '#sub-app',
    apps: [
      {
        name: 'sub-foo',
        activeWhen: '/foo',
        entry: 'http://localhost:8001',
        sandbox: false,
      },
      // {
      //   name: 'sub-bar',
      //   activeWhen: '/bar',
      //   entry: 'http://localhost:8002',
      //   sandbox: false,
      // },
    ],
    props: {
      // store,
    },
    plugins: [
      GarfishEsModule(),
      // GarfishCssScope(),
    ],
  });
});

function goto(parms) {
  garfish.router.push(parms);
}
</script>

<template>
  <div>App Shell</div>

  <ul>
    <li><div @click="goto({ path: '/' })">Shell</div></li>
    <li><div @click="goto({ path: '/foo' })">Foo</div></li>
  </ul>

  <div id="sub-app"></div>
</template>
