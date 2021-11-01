<template>
  <header id="header">
    <div id="banner"></div>
    <div id="header-outer" class="outer">
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a v-for="item in items" class="main-nav-link" @click="navigateTo(item.PageName)">
            <i :class="['ui','icon',item.iconClass]"></i>
            {{ item.name }}
          </a>
        </nav>
        <div id="search-input">
          <label for="search-input-filed">搜索</label>
          <input type="text" id="search-input-filed">
        </div>
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
  name: "TopNavbar",
  data: function () {
    return {
      items: [
        {
          name: '首页',
          PageName: '/',
          iconClass: 'home',
        },
        {
          name: '归档',
          PageName: 'Archives',
          iconClass: 'folder open outline',
        },
        {
          name: '标签',
          PageName: '',
          iconClass: 'tags',
        },
        {
          name: 'github',
          PageName: '',
          iconClass: 'github',
        }
      ],
    }
  },
  methods: {
    navigateTo(PageName) {
      // 请求制定的页面
      this.$router.push({name: PageName});
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/TopNavbar.css";
</style>
