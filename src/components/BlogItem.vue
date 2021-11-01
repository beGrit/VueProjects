<template>
  <div class="ui segment" :class="{raised: isRaised}" @mouseover="itemMouseOver" @mouseleave="itemMouseLeave">
    <div class="ui items">
      <div class="ui item">
        <div class="content">
          <div class="ui huge header">
            <a>{{ item.title }}</a>
          </div>
          <div class="meta">
            <div class="ui basic label" id="author">
              <i class="user circle outline icon"></i>
              <a href="#">{{ item.authorName }}</a>
            </div>
            <div class="ui basic label">
              <i class="calendar alternate outline icon"></i>
              <span>{{ item.date }}</span>
            </div>
          </div>
          <div class="description">
            <p>{{ item.description }}</p>
          </div>
          <div class="extra">
            <div class="ui left floated">
              <div class="ui labeled button" tabindex="0">
                <div class="ui button">
                  <i class="heart outline icon"></i> Like
                </div>
                <a class="ui basic label">
                  {{ item.likes }}
                </a>
              </div>
              <div class="ui labeled button" tabindex="0">
                <div class="ui icon button">
                  <i class="chart line icon"></i> Viewed
                </div>
                <a class="ui basic label">
                  {{ item.views }}
                </a>
              </div>
            </div>
            <div class="ui right floated">
              <router-link :to="linkTo">
                <i class="big chevron circle right icon"/>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  data() {
    return {
      isRaised: false
    }
  },
  props: {
    item: {
      default() {
        return {
          'index': 1,
          'title': 'Scrapy教程',
          'authorName': 'Pocky',
          'date': '2021-01-05',
          'description': 'Scrapy为下载item中包含的文件(比如在爬取到产品时，同时也想保存对应的图片)提供了一个可重用的 item pipelines . 这些pipeline有些共同的方法和结构(我们称之为media pipeline)。一般来说你会使用Files Pipeline或者 Images Pipeline.',
          'likes': 1000,
          'views': 2000,
        }
      }
    },
  },
  computed: {
    linkTo: function () {
      return '/blog/' + this.item.index
    }
  },
  methods: {
    // 绑定鼠标悬停-离开事件(变化抬起放下)
    itemMouseOver() {
      this.$data.isRaised = true
    },
    itemMouseLeave() {
      this.$data.isRaised = false
    }
  }
}
</script>

<style scoped>
.description > p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 显示三行，后面省略 */
  overflow: hidden;
}
</style>
