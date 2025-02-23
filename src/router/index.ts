import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { title: '首页' }
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('@/views/ToolsView.vue'),
    meta: { title: '实用工具' }
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('@/views/StudyView.vue'),
    meta: { title: '学习资源' }
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component: () => import('@/views/EntertainmentView.vue'),
    meta: { title: '娱乐天地' }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsView.vue'),
    meta: { title: '新闻资讯' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '关于我们' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - 导航站` : '导航站'
  next()
})

export default router
