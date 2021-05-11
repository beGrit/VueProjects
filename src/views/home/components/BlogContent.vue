<template>
  <div>
    <div class="ui row">
      <!--头部区-->
      <div class="ui top segment">
        <div class="ui middle aligned two column grid">
          <div class="left aligned column">
            <h3 class="ui teal header">博客</h3>
          </div>
          <div class="right aligned column">
          <span>
            共<h3 class="ui orange header" style="display: inline-block">{{ total }}</h3>篇
          </span>
          </div>
        </div>
      </div>
    </div>
    <div class="ui row">
      <!--内容区-->
      <div class="ui tow column raised grid segment stretched">
        <div v-for="item in list" class="eight wide column">
          <blog-item :item="item"></blog-item>
        </div>
      </div>
    </div>
    <div class="ui row">
      <!-- 底部区 -->
      <div class="ui bottom attached segment">
        <div class="ui middle aligned two column grid">
          <div class="column">
            <a href="#" class="ui mini green basic button">上一页</a>
          </div>
          <div class="right aligned column">
            　　<a href="#" class="ui mini red basic button">下一页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItem from "../../../components/BlogItem";
import PlaceHolderItem from '@/components/PlaceHolderItem'

let myJson = {
  'total': 100,
  'pageSize': 10,
  'pageNum': 1,
  'list': [
    {
      'index': 1,
      'title': 'Scrapy教程',
      'authorName': 'Pocky',
      'date': '2021-01-05',
      'description': 'Scrapy为下载item中包含的文件(比如在爬取到产品时，同时也想保存对应的图片)提供了一个可重用的 item pipelines . 这些pipeline有些共同的方法和结构(我们称之为media pipeline)。一般来说你会使用Files Pipeline或者 Images Pipeline.',
      'likes': 1000,
      'views': 2000,
    },
    {
      'index': 2,
      'title': 'Python教程',
      'authorName': 'Pocky',
      'date': '2021-01-05',
      'description': 'python.....',
      'likes': 20,
      'views': 1010,
    },
    {
      'index': 3,
      'title': 'Java教程',
      'authorName': 'Pocky',
      'date': '2021-01-05',
      'description': 'asdas',
      'likes': 20,
      'views': 1010,
    },
    {
      'index': 4,
      'title': 'Java教程',
      'authorName': 'Pocky',
      'date': '2021-01-05',
      'description': 'asdas',
      'likes': 20,
      'views': 1010,
    },
    {
      'index': 5,
      'title': 'Java教程',
      'authorName': 'Pocky',
      'date': '2021-01-05',
      'description': 'asdas',
      'likes': 20,
      'views': 1010,
    },
    {
      'index': 3,
      'title': 'Java教程',
      'authorName': 'Pocky',
      'date': '2021-01-05',
      'description': 'asdas',
      'likes': 20,
      'views': 1010,
    },
    {
      'index': 3,
      'title': 'Java教程',
      'authorName': 'Pocky',
      'date': '2021-01-05',
      'description': 'asdas',
      'likes': 20,
      'views': 1010,
    }
  ]
}

export default {
  name: 'BlogContent',
  components: {PlaceHolderItem, BlogItem},
  data() {
    return {
      total: myJson.total,
      pageSize: myJson.pageSize,
      pageNum: myJson.pageNum,
      list: [],
      item: {}
    }
  },
  created: function () {
  },
  mounted() {
    this.list = myJson.list
  },
  methods: {},
}

</script>

<style scoped></style>
