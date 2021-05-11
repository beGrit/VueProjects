import Vue from 'vue'
import Router from 'vue-router'
import IndexLayout from "../views/layout/IndexLayout";

Vue.use(Router)
const routes = [
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
  {
    path: '/blog',
    component: IndexLayout,
    children: [{
      path: ':blogId',
      name: 'BlogDetail',
      component: () => import('../views/detail/index'),
      props: (route) => {
        return {
          blogId: route.params.blogId
        }
      }
    }]
  }
]
export default new Router({
  routes: routes
})
