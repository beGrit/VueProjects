<template>
  <article class="archive-article archive-type-post">
    <div class="archive-article-inner">
      <header>
        <a class="archive-article-date">
          <time>{{ item.time }}</time>
        </a>
        <h1>
          <a class="archive-article-title">{{ item.title }}</a>
        </h1>
      </header>

    </div>
  </article>
</template>

<script>
export default {
  name: "ArchiveContent",
  data: function () {
    return {}
  },
  props: {
    item: {
      Object, required: true, default() {
        return {
          time: 2019,
          title: '实现无限缓存的channel',
        };
      }
    }
  }
}
</script>

<style scoped>

</style>
