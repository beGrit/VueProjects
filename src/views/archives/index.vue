<template>
  <div class="ui centered grid">
    <div class="ui divided row">
      <div class="eleven wide column">
        <div class="archives-wrap" v-for="item in items">
          <div class="archive-year-wrap">
            <a class="archive-year">{{ item.year }}</a>
          </div>
          <div class="archives" v-for="content in item.contents">
            <div id="ArchiveItem">
              <archive-item :item="item.content"></archive-item>
            </div>
          </div>
        </div>
      </div>
      <div class="four wide column">
        <blog-side-nav></blog-side-nav>
      </div>
    </div>
  </div>
</template>

<script>
import BlogSideNav from '@/views/home/components/BlogRightNav'
import ArchiveItem from "@/views/archives/components/ArchiveItem";

export default {
  name: "index",
  components: {
    BlogSideNav, ArchiveItem
  },
  data: function () {
    return {
      items: [
        {
          year: 2019,
          contents: [
            {
              time: '2019-01-02',
              title: '内容1'
            },
            {
              time: '2019-01-02',
              title: '内容1'
            },
            {
              time: '2019-01-02',
              title: '内容1'
            },
            {
              time: '2019-01-02',
              title: '内容1'
            },
          ],
        },
        {
          year: 2020,
          contents: [
            {
              time: '2020-01-02',
              title: '内容2'
            }
          ],
        }
      ]
    }
  }
}
</script>

<style scoped>
#ArchiveItem {
  border: 1px solid #42b983;
  width: 30%;
}

.archives-wrap {
  border: 1px solid #42b983;
  min-height: 200px;
  margin: 50px 0;
}

.archive-year-wrap {
  width: 100%;
  margin-bottom: 16px;
}

.archive-year {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #999;
  margin-bottom: 1em;
  margin-left: 5px;
  line-height: 1em;
  text-shadow: 0 1px #fff;
  font-weight: bold;
}
</style>
