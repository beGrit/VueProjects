import Vue from 'vue'
import Router from 'vue-router'
import IndexLayout from "../views/layout/IndexLayout";

Vue.use(Router)
const routes = [
  // 首页(展示博客概览)
  {
    path: '/',
    name: '',
    component: IndexLayout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index')
    }]
  },
  // 博客详情页面
  {
    path: '/blog',
    component: IndexLayout,
    children: [{
      path: ':blogId',
      name: 'BlogDetail',
      component: () => import('@/views/detail/index'),
      props: (route) => {
        return {
          blogId: route.params.blogId
        }
      }
    }]
  },
  // 归档页面
  {
    path: '/archives',
    component: IndexLayout,
    children: [{
      path: '',
      name: "Archives",
      component: () => import('@/views/archives/index'),
    }]
  }
]
export default new Router({
  routes: routes
})
