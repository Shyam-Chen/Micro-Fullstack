<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span class="dynamic">dynamic span color</span>

    <app-header></app-header>
  </div>
</template>

<style>
  .dynamic {
    color: green;
  }
</style>

<script>
import '@cpn/header/Header';

export default {};
</script>
