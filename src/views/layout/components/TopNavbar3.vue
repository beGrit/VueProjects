<template>
  <div>
    <nav>
      <div class="ui stackable top inverted menu" v-show="tabNav">
        <a href="#" class="blue item active"><i class="home icon"></i>首页</a>
        <a href="#" class="black item ">博客</a>
        <a href="#" class="orange item"><i class="idea icon"></i>分类</a>
        <a href="#" class="yellow item"><i class="tags icon"></i>标签</a>
        <a href="#" class="green item"><i class="info icon"></i>关于我</a>
        <div class="right item">
          <div class="ui icon transparent inverted input">
            <input type="text" placeholder="Search...">
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'TopNavbar',
  data() {
    return {
      tabNav: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(typeof (scrollTop),scrollTop)
      if (scrollTop === 0) {
        this.tabNav = true
      } else {
        this.tabNav = false
      }
    }
  }
}
</script>
<style>
.menu {
  height: 20px;
}
</style>
