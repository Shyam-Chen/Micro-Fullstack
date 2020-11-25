<script>
  import { Router, Link, Route } from 'svelte-routing';

  import RouterOutlet from '~/core/RouterOutlet';

  const basepath = window.__POWERED_BY_QIANKUN__ ? '/svelte' : '/';
</script>

<Router {basepath}>
  <nav>
    <Link to="">Home</Link>
    <Link to="about">About</Link>
  </nav>

  <RouterOutlet />
</Router>
