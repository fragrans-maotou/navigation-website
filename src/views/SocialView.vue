<template>
  <resource-list
    title="社交媒体"
    searchPlaceholder="搜索社交平台..."
    :categories="categories"
    :items="socialSites"
    defaultCategory="social"
  />
</template>

<script setup>
import ResourceList from '@/views/components/ResourceList.vue'

const categories = [
  { label: '社交平台', value: 'social', icon: 'Message' },
  { label: '即时通讯', value: 'im', icon: 'ChatDotRound' },
  { label: '兴趣社区', value: 'community', icon: 'Share' }
]

const socialSites = [
  {
    id: 1,
    name: '微博',
    desc: '中国最大的社交媒体平台',
    icon: 'https://weibo.com/favicon.ico',
    url: 'https://weibo.com',
    category: 'social',
    featured: true,
    badges: [{ text: '热门', color: '#e74c3c' }]
  },
  {
    id: 2,
    name: '知乎',
    desc: '中文互联网高质量问答社区',
    icon: 'https://www.zhihu.com/favicon.ico',
    url: 'https://www.zhihu.com',
    category: 'community',
    featured: true,
    badges: [{ text: '推荐', color: '#3498db' }]
  },
  {
    id: 3,
    name: '豆瓣',
    desc: '文艺青年聚集地',
    icon: 'https://www.douban.com/favicon.ico',
    url: 'https://www.douban.com',
    category: 'community',
    featured: true,
    badges: [{ text: '文艺', color: '#2ecc71' }]
  },
  {
    id: 4,
    name: '微信',
    desc: '最流行的即时通讯工具',
    icon: 'https://weixin.qq.com/favicon.ico',
    url: 'https://weixin.qq.com',
    category: 'im',
    featured: true,
    badges: [{ text: '必备', color: '#9b59b6' }]
  }
]
</script>
