<template>
  <resource-list
    title="开发工具"
    searchPlaceholder="搜索开发工具..."
    :categories="categories"
    :items="sites"
    defaultCategory="editor"
  />
</template>

<script setup>
import ResourceList from '@/views/components/ResourceList.vue'

const categories = [
  { label: '编辑器', value: 'editor', icon: 'Edit' },
  { label: '版本控制', value: 'vcs', icon: 'Monitor' },
  { label: '构建工具', value: 'build', icon: 'Setting' },
  { label: '调试工具', value: 'debug', icon: 'Monitor' }
]

const sites = [
{
    id: 1,
    name: 'VS Code',
    desc: '最受欢迎的代码编辑器',
    icon: 'https://code.visualstudio.com/favicon.ico',
    url: 'https://code.visualstudio.com',
    category: 'editor',
    featured: true,
    badges: [{ text: '推荐', color: '#2ecc71' }]
  },
  {
    id: 2,
    name: 'GitLab',
    desc: '代码托管和CI/CD平台',
    icon: 'https://gitlab.com/favicon.ico',
    url: 'https://gitlab.com',
    category: 'vcs',
    featured: true,
    badges: [{ text: '热门', color: '#3498db' }]
  },
  {
    id: 3,
    name: 'Postman',
    desc: 'API开发测试工具',
    icon: 'https://www.postman.com/favicon.ico',
    url: 'https://www.postman.com',
    category: 'debug',
    featured: true,
    badges: [{ text: '必备', color: '#e74c3c' }]
  }
]
</script>

<style lang="less" scoped>

</style> 
