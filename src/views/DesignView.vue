<template>
  <div class="design-view">
    <div class="page-header">
      <h1>设计资源</h1>
      <el-input
        v-model="searchQuery"
        placeholder="搜索设计资源..."
        :prefix-icon="Search"
        clearable
      />
    </div>

    <el-row :gutter="20">
      <el-col :md="16" :sm="24">
        <div class="design-section">
          <h2 class="section-title">推荐资源</h2>
          <div class="design-grid">
            <site-card
              v-for="site in designSites"
              :key="site.id"
              :site="site"
              :featured="site.featured"
            />
          </div>
        </div>
      </el-col>

      <el-col :md="8" :sm="24">
        <div class="category-section">
          <h2 class="section-title">资源分类</h2>
          <el-menu
            :default-active="activeCategory"
            class="category-menu"
            @select="handleCategorySelect"
          >
            <el-menu-item 
              v-for="category in categories"
              :key="category.value"
              :index="category.value"
            >
              <el-icon><component :is="category.icon" /></el-icon>
              <span>{{ category.label }}</span>
            </el-menu-item>
          </el-menu>
        </div>

        <div class="quick-access">
          <h2 class="section-title">常用工具</h2>
          <div class="quick-links">
            <a 
              v-for="link in quickLinks"
              :key="link.url"
              :href="link.url"
              target="_blank"
              class="quick-link"
            >
              <el-icon><component :is="link.icon" /></el-icon>
              {{ link.name }}
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Picture, Brush, Collection } from '@element-plus/icons-vue'
import SiteCard from '@/views/components/SiteCard.vue'

const searchQuery = ref('')
const activeCategory = ref('inspiration')

const categories = [
  { label: '灵感创意', value: 'inspiration', icon: 'Picture' },
  { label: '设计工具', value: 'tools', icon: 'Brush' },
  { label: '素材资源', value: 'resources', icon: 'Collection' },
  { label: '配色方案', value: 'colors', icon: 'Brush' }
]

const designSites = [
  {
    id: 1,
    name: 'Dribbble',
    desc: '设计师必备灵感站点',
    icon: '/icons/dribbble.png',
    url: 'https://dribbble.com',
    category: 'inspiration',
    featured: true,
    badges: [{ text: '推荐', color: '#2ecc71' }]
  },
  {
    id: 2,
    name: 'Figma',
    desc: '在线UI设计工具',
    icon: '/icons/figma.png',
    url: 'https://www.figma.com',
    category: 'tools',
    featured: true,
    badges: [{ text: '必备', color: '#3498db' }]
  },
  {
    id: 3,
    name: 'Unsplash',
    desc: '免费高质量图片',
    icon: '/icons/unsplash.png',
    url: 'https://unsplash.com',
    category: 'resources',
    featured: true,
    badges: [{ text: '热门', color: '#e74c3c' }]
  }
]

const quickLinks = [
  { name: 'Behance', url: 'https://www.behance.net', icon: 'Picture' },
  { name: 'UI中国', url: 'https://www.ui.cn', icon: 'Brush' },
  { name: 'IconFont', url: 'https://www.iconfont.cn', icon: 'Collection' }
]

const handleCategorySelect = (index) => {
  activeCategory.value = index
}
</script>

<style lang="less" scoped>
.design-view {
  .page-header {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    .el-input {
      width: 300px;
    }
  }

  .section-title {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .design-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .category-section {
    background: var(--bg-primary);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .quick-access {
    background: var(--bg-primary);
    border-radius: 8px;
    padding: 1.5rem;

    .quick-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .quick-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem;
        border-radius: 6px;
        color: var(--text-primary);
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
          background: var(--bg-secondary);
        }
      }
    }
  }
}
</style> 