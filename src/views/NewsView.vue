<template>
  <div class="news-view">
    <div class="page-header">
      <h1>新闻资讯</h1>
      <el-input
        v-model="searchQuery"
        placeholder="搜索新闻源..."
        :prefix-icon="Search"
        clearable
      />
    </div>

    <el-row :gutter="20">
      <el-col :md="16" :sm="24">
        <!-- 主要新闻源 -->
        <div class="news-section">
          <h2 class="section-title">热门新闻源</h2>
          <div class="news-grid">
            <site-card
              v-for="site in featuredSites"
              :key="site.id"
              :site="site"
              :featured="site.featured"
            />
          </div>
        </div>
      </el-col>

      <el-col :md="8" :sm="24">
        <!-- 分类导航 -->
        <div class="category-section">
          <h2 class="section-title">分类导航</h2>
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

        <!-- 快速访问 -->
        <div class="quick-access">
          <h2 class="section-title">快速访问</h2>
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
import { Search, News, Reading, DataAnalysis } from '@element-plus/icons-vue'
import SiteCard from '@/components/SiteCard.vue'

const searchQuery = ref('')
const activeCategory = ref('news')

const categories = [
  { label: '综合新闻', value: 'news', icon: 'News' },
  { label: '科技资讯', value: 'tech', icon: 'Monitor' },
  { label: '财经资讯', value: 'finance', icon: 'Money' },
  { label: '体育新闻', value: 'sports', icon: 'Football' }
]

const featuredSites = [
  {
    id: 1,
    name: '人民网',
    desc: '人民日报社主办的综合性新闻网站',
    icon: '/icons/people.png',
    url: 'http://www.people.com.cn',
    category: 'news',
    featured: true,
    badges: [{ text: '官方', color: '#e74c3c' }]
  },
  // 添加更多新闻源...
]

const quickLinks = [
  { name: '今日头条', url: 'https://www.toutiao.com', icon: 'Reading' },
  { name: '新浪新闻', url: 'https://news.sina.com.cn', icon: 'News' },
  { name: '腾讯新闻', url: 'https://news.qq.com', icon: 'DataAnalysis' }
]

const handleCategorySelect = (index) => {
  activeCategory.value = index
}
</script>

<style lang="less" scoped>
.news-view {
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

  .news-grid {
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