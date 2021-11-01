<template>
  <div id="container">
    <top-navbar></top-navbar>
    <div id="wrap" class="ui grid body">
      <div class="ui row">
        <div class="ui column">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavbar from "@/components/Layout/TopNavbar";
export default {
  name: 'Layout',
  components: {TopNavbar}
}
</script>
<style scoped>
#container {
  height: 100%;
  width: 100%;
}
#wrap {
  margin: 50px 0;
}
.my-top-navbar {
  width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
