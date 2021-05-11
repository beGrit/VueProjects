<template>
  <div id="gitalk-container">
    <div class="gt-container">
      <div class="gt-meta">

      </div>
      <div class="gt-header"></div>
      <div class="gt-comments">
        <div>
          <div v-for="i in 3" class="gt-comment">
            33
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
  data: function () {
    return {
      'comments': [
        {},
        {},
        {}
      ]
    }
  }
}
</script>

<style scoped>

</style>
