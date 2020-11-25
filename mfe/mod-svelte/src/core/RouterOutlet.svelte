<script>
  import { Router, Link, Route } from "svelte-routing";

  import Home from "~/landings/Home";
  import About from "~/landings/About";
</script>

<Route path=""><Home /></Route>
<Route path="about" component="{About}" />
