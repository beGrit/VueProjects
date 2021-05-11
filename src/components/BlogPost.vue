<template>
  <div>
    <div class="ui blue segment raised my-content">
      <div class="ui container grid">
        <div class="ui row article-title">
          <h2 class="ui dividing header">
            {{ title }}
            <div class="sub header"></div>
          </h2>
        </div>
        <div class="ui centered row description">
          <div class="ui fifteen wide column">
            <article class="markdown-body" v-html="markedText"/>
          </div>
        </div>
        <div class="ui horizontal divider"><i class="bar chart icon"></i>博客相关信息</div>
        <div class="ui centered row raised segment relevant-info">
          <div class="ui fifteen wide column">
            <comments></comments>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "./Comments";
const marked = require('marked')
let itemTemp = {
  title: '',
  content: ''
}

export default {
  name: "BlogDetail",
  data: function () {
    return {
      title: 'Python爬虫Scrapy框架入门',
      date: '2021-01-11',
      authorName: 'lsf',
      description: 'asdasdas'
    }
  },
  props: {
    item: {
    }
  },
  computed: {
    markedText: function () {
      if (this.item === undefined) {
        return ''
      } else {
        return marked(this.description)
      }
    }
  },
  watch: {},
  methods: {},
  components: {
    Comments
  }
}
</script>
<style scoped>
.relevant-info {
  min-height: 400px;
  margin: 0 20px 20px;
}
.description {
  min-height: 400px;
}
.ui.segment:last-child {
  margin-bottom: 20px;
}
.article-title {
  text-decoration: none;
  font-size: 2em;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: #000;
  line-height: 1.1em;
  transition: color 0.2s;
}
</style>
