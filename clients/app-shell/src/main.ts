import { createApp } from 'vue';
import garfish from 'garfish';
import { GarfishEsModule } from '@garfish/es-module';
// import { GarfishCssScope } from '@garfish/css-scope';

import App from './App.vue';

garfish.run({
  basename: '/',
  domGetter: '#sub-app',
  apps: [
    {
      name: 'sub-foo',
      activeWhen: '/foo',
      entry: 'http://localhost:8001',
    },
    // {
    //   name: 'sub-bar',
    //   activeWhen: '/bar',
    //   entry: 'http://localhost:8002',
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

const app = createApp(App);

app.mount('#root');
