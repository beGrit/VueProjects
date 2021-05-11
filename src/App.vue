<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #eee;
  z-index: 1;
}
</style>
