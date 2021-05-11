<template>
  <header id="header">
    <div id="banner"></div>
    <div id="header-outer" class="outer">
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a class="main-nav-link" href="#">
            <i class="ui home icon"></i>
            首页
          </a>
          <a class="main-nav-link" href="#">
            <i class="ui folder open outline icon"></i>
            归档
          </a>
          <a class="main-nav-link" href="#">
            <i class="ui tags icon"></i>
            标签
          </a>
          <a class="main-nav-link" href="#">
            <i class="ui github icon"></i>
            github
          </a>
        </nav>
      </div>
      <div id="header-title" class="inner">
        <h1 id="logo-wrap" class="animated bounceInLeft">
          <a href="#" id="logo">锋窝</a>
        </h1>
        <h2 id="subtitle-wrap" class="animated bounceInLeft">
          <a href="#" id="subtitle">大道至简 Simplicity is the ultimate form of sophistication</a>
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopNavbar"
}
</script>

<style scoped>
@import "../../../assets/css/TopNavbar.css";
</style>
