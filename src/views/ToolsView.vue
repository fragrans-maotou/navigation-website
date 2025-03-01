<template>
  <resource-list
    title="实用工具"
    searchPlaceholder="搜索工具..."
    :categories="categories"
    :items="tools"
    defaultCategory="all"
  />
</template>

<script setup>
import ResourceList from '@/views/components/ResourceList.vue'

const categories = [
  { label: '全部', value: 'all' },
  { label: '开发工具', value: 'dev' },
  { label: '设计工具', value: 'design' },
  { label: '效率工具', value: 'productivity' },
  { label: '文件处理', value: 'file' },
  { label: '图片处理', value: 'image' },
  { label: '视频处理', value: 'video' }
]

const tools = [
  {
    id: 1,
    name: 'VSCode',
    desc: '强大的代码编辑器',
    icon: 'https://code.visualstudio.com/favicon.ico',
    url: 'https://code.visualstudio.com',
    category: 'dev',
    tags: ['编辑器', '开发工具'],
    featured: true,
    badges: [{ text: '推荐', color: '#ff4757' }]
  },
  {
    id: 2,
    name: 'Figma',
    desc: '专业的在线设计工具',
    icon: 'https://www.figma.com/favicon.ico',
    url: 'https://figma.com',
    category: 'design',
    tags: ['设计', 'UI/UX'],
    views: 8500,
    likes: 2300
  },
  {
    id: 3,
    name: '在线工具箱',
    desc: '各种常用在线工具集合',
    icon: 'https://tool.lu/favicon.ico',
    url: 'https://tool.lu',
    category: 'productivity',
    tags: ['工具集合', '在线工具'],
    views: 12000,
    likes: 3500
  },
  {
    id: 4, 
    name: 'JSON 格式化',
    desc: '在线JSON校验格式化工具',
    icon: 'https://www.json.cn/favicon.ico',
    url: 'https://www.json.cn',
    category: 'dev',
    tags: ['JSON', '开发工具'],
    views: 9500,
    likes: 2800
  },
  {
    id: 5,
    name: '图片压缩',
    desc: '在线图片压缩工具',
    icon: 'https://tinypng.com/favicon.ico', 
    url: 'https://tinypng.com',
    category: 'image',
    tags: ['图片处理', '压缩'],
    views: 15000,
    likes: 4200
  },
  {
    id: 6,
    name: '正则测试',
    desc: '正则表达式在线测试工具',
    icon: 'https://regex101.com/favicon.ico',
    url: 'https://regex101.com',
    category: 'dev',
    tags: ['正则', '开发工具'],
    views: 7800,
    likes: 2100
  },
  {
    id: 7,
    name: '在线PS',
    desc: '在线图片编辑器',
    icon: 'https://www.photopea.com/favicon.ico',
    url: 'https://www.photopea.com',
    category: 'image',
    tags: ['图片处理', '设计'],
    views: 11000,
    likes: 3300
  },
  {
    id: 8,
    name: '文件转换',
    desc: '在线文件格式转换工具',
    icon: 'https://convertio.co/favicon.ico',
    url: 'https://convertio.co/zh',
    category: 'file',
    tags: ['文件处理', '格式转换'],
    views: 13500,
    likes: 3800
  },
  {
    id: 9,
    name: '在线绘图',
    desc: '流程图、思维导图等在线绘制',
    icon: 'https://www.draw.io/favicon.ico',
    url: 'https://www.draw.io',
    category: 'design',
    tags: ['绘图', '设计'],
    views: 10200,
    likes: 2900
  },
  {
    id: 10,
    name: '代码格式化',
    desc: '各种语言的代码格式化工具',
    icon: 'https://prettier.io/favicon.ico',
    url: 'https://prettier.io/playground',
    category: 'dev',
    tags: ['代码格式化', '开发工具'],
    views: 8900,
    likes: 2600
  }
]
</script> 