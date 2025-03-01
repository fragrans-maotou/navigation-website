<template>
  <resource-list
    title="新闻资讯"
    searchPlaceholder="搜索新闻源..."
    :categories="categories"
    :items="newsSites"
    defaultCategory="news"
  />
</template>

<script setup>
import ResourceList from '@/views/components/ResourceList.vue'

const categories = [
  { label: '综合新闻', value: 'news', icon: 'News' },
  { label: '科技资讯', value: 'tech', icon: 'Monitor' },
  { label: '财经资讯', value: 'finance', icon: 'Money' },
  { label: '体育新闻', value: 'sports', icon: 'Football' }
]

const newsSites = [
  {
    id: 1,
    name: '人民网',
    desc: '人民日报社主办的综合性新闻网站',
    icon: 'https://www.people.com.cn/favicon.ico',
    url: 'http://www.people.com.cn',
    category: 'news',
    featured: true,
    badges: [{ text: '官方', color: '#e74c3c' }]
  },
  // ... 其他新闻网站数据
]
</script> 