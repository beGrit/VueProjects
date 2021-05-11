<template>
  <div class="ui centered grid">
    <div class="ui divided row">
      <div class="eleven wide column">
        <blog-content></blog-content>
      </div>
      <div class="four wide column">
        <blog-side-nav></blog-side-nav>
      </div>
    </div>
  </div>
</template>
<script>
import BlogContent from '@/views/home/components/BlogContent'
import BlogSideNav from '@/views/home/components/BlogRightNav'

export default {
  name: 'index',
  components: {
    BlogContent,
    BlogSideNav
  },
  props: {

  }
}
</script>
<style scoped/>
