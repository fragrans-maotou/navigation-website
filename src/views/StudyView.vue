<template>
  <resource-list
    title="学习资源"
    searchPlaceholder="搜索学习资源..."
    :categories="categories"
    :items="resources"
    defaultCategory="all"
  />
</template>

<script setup>
import ResourceList from '@/views/components/ResourceList.vue'

const categories = [
  { label: '全部', value: 'all' },
  { label: '编程开发', value: 'programming' },
  { label: '设计创意', value: 'design' },
  { label: '语言学习', value: 'language' },
  { label: '考证考级', value: 'certificate' },
  { label: '职业技能', value: 'skills' }
]

const resources = [
  {
    id: 1,
    name: 'Coursera',
    desc: '全球顶尖大学在线课程平台',
    icon: 'https://coursera.org/favicon.ico',
    url: 'https://coursera.org',
    category: 'programming',
    tags: ['MOOC', '在线教育'],
    featured: true,
    badges: [{ text: '推荐', color: '#ff4757' }]
  },
  {
    id: 2,
    name: '慕课网',
    desc: '程序员的实战视频课程平台',
    icon: 'https://www.imooc.com/favicon.ico',
    url: 'https://www.imooc.com',
    category: 'programming',
    tags: ['编程', '实战课程'],
    views: 12000,
    likes: 3500
  },
  {
    id: 3,
    name: '掘金',
    desc: '帮助开发者成长的技术社区',
    icon: 'https://juejin.cn/favicon.ico',
    url: 'https://juejin.cn',
    category: 'programming',
    group: '技术社区',
    tags: ['技术博客', '开发者社区'],
    views: 15000,
    likes: 4200
  },
  {
    id: 4,
    name: 'LeetCode',
    desc: '全球极客挚爱的技术成长平台',
    icon: 'https://leetcode.cn/favicon.ico',
    url: 'https://leetcode.cn',
    category: 'programming',
    group: '算法训练',
    tags: ['算法', '面试题'],
    views: 10000,
    likes: 3000
  },
  {
    id: 5,
    name: 'MDN',
    desc: 'Web 开发技术权威文档',
    icon: 'https://developer.mozilla.org/favicon.ico',
    url: 'https://developer.mozilla.org',
    category: 'programming',
    group: '技术文档',
    tags: ['Web开发', '文档'],
    views: 8000,
    likes: 2500
  },
  {
    id: 6,
    name: 'GitHub',
    desc: '开源代码托管平台',
    icon: 'https://github.com/favicon.ico',
    url: 'https://github.com',
    category: 'programming',
    group: '代码托管',
    tags: ['开源', '代码托管'],
    views: 20000,
    likes: 5000
  },
  {
    id: 7,
    name: 'Stack Overflow',
    desc: '程序员问答社区',
    icon: 'https://stackoverflow.com/favicon.ico',
    url: 'https://stackoverflow.com',
    category: 'programming',
    group: '技术社区',
    tags: ['问答', '编程社区'],
    views: 18000,
    likes: 4800
  },
  {
    id: 8,
    name: 'W3Schools',
    desc: 'Web技术学习平台',
    icon: 'https://www.w3schools.com/favicon.ico',
    url: 'https://www.w3schools.com',
    category: 'programming',
    group: '在线教程',
    tags: ['Web开发', '教程'],
    views: 9000,
    likes: 2800
  }
]
</script>

