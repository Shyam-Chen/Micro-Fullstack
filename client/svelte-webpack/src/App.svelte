<script>
import { Link, Router, Route } from 'svero';

import Home from '~/home/Home';
import HelloWorld from '~/hello-world/HelloWorld';
import Counter from '~/counter/Counter';

const APP_BASE = window.__POWERED_BY_QIANKUN__ ? '/svelte-webpack' : '/';
</script>

<ul>
  <li><Link href={APP_BASE}>Home</Link></li>
  <li><Link href={`${APP_BASE}/hello-world`}>Hello World</Link></li>
  <li><Link href={`${APP_BASE}/counter`}>Counter</Link></li>
</ul>

<Router>
  <Route path={APP_BASE} component={Home} />
  <Route path={`${APP_BASE}/hello-world`} component={HelloWorld} />
  <Route path={`${APP_BASE}/counter`} component={Counter} />
</Router>
