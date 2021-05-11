<template>
  <div class="ui grid">
    <div class="ui two column centered row">
      <div class="ui eleven wide column">
        <blog-post :item="item"></blog-post>
      </div>
      <div class="ui four wide column">
        <div class="ui grid widget">
          <div class="ui sixteen wide column">
            <div id="ui segment music-player">
              <audio src="src/assets/audio/星空.flac" controls></audio>
            </div>
          </div>
          <div v-for="n in 4" class="ui left sixteen wide column">
            <blog-widget></blog-widget>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../../components/BlogPost";
import BlogWidget from "../../components/BlogWidget";
import {fetDetail} from "../../api/blog";

export default {
  name: "index",
  components: {
    BlogPost, BlogWidget
  },
  data: function () {
    return {
      item: {}
    }
  },
  props: {
    blogId: String
  },
  methods: {
    getContent: function (blogId) {
      fetDetail(blogId).then(response => {
        this.item = response.data.data
      })
    }
  },
  created() {
    this.getContent(this.blogId)
  }
}
</script>

<style scoped>
.widget > div {
  padding: 0;
}
</style>
