<template>
  <div class="widget-wrap">
    <h3 class="widget-title">分类</h3>
    <div class="widget">
      <ul class="category-list">
        <li v-for="n in 3" class="category-list-item">
          <a href="#" class="category-list-link">{{ item.name }}</a>
          <span class="category-list-count">{{ numOfTags }}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
const item = {
  name: 'Python',
  count: 10
}
export default {
  name: "BlogWidget",
  data() {
    return {
      item: item
    }
  },
  computed: {
    numOfTags: function () {
      return '(' + this.item.count + ')'
    }
  }
}
</script>

<style scoped>
@import "../assets/css/BlogWidget.css";
</style>
