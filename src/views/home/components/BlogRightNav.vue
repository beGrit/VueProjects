<template>
  <div>
    <!-- 标签 -->
    <div class="ui segment my-margin-top-large">
      <div class="ui secondary segment">
        <div class="ui two column grid">
          <div class="column">
            <i class="tags icon"></i>标签
          </div>
          <div class="right aligned column">
            <a href="#" target="_blank">More<i class="angle double right icon"></i></a>
          </div>
        </div>
      </div>
      <div class="ui teal segment">
        <router-link v-for="(tag,index) in list" :key="index" class="ui teal basic left pointing label">
          {{ tag.tagName }}
          <div class="detail">{{ tag.numOfTag }}</div>
        </router-link>
      </div>
    </div>
    <div class="ui segment my-margin-top-large">
      <div class="ui secondary segment">
        <i class="bookmark icon"></i>最新推荐
      </div>
      <div v-for="n in 5" class="ui segment">
      </div>
    </div>
  </div>
</template>

<script>
let myJson = {
  'tagNum': 6,
  'list': [
    {
      'tagName': 'Ruby',
      'numOfTag': 5
    },
    {
      'tagName': 'JAVA',
      'numOfTag': 6
    },
    {
      'tagName': 'C',
      'numOfTag': 5
    },
    {
      'tagName': 'Ruby',
      'numOfTag': 5
    },
    {
      'tagName': 'JAVA',
      'numOfTag': 6
    },
    {
      'tagName': 'C',
      'numOfTag': 5
    }
  ]
}
export default {
  name: 'BlogSideNav',
  data () {
    return {
      tagNum: myJson.tagNum,
      list: myJson.list
    }
  }
}
</script>

<style scoped>

</style>
