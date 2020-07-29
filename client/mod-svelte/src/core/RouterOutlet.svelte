<script>
  import { Router, Link, Route } from "svelte-routing";

  import Home from "~/landings/Home.svelte";
  import About from "~/landings/About.svelte";
</script>

<Route path=""><Home /></Route>
<Route path="about" component="{About}" />
