<template>
  <div class="entertainment-view">
    <div class="page-header">
      <h1>娱乐天地</h1>
      <el-input
        v-model="searchQuery"
        placeholder="搜索娱乐内容..."
        :prefix-icon="SearchIcon"
        clearable
      />
    </div>

    <el-tabs v-model="activeCategory" class="category-tabs">
      <el-tab-pane 
        v-for="category in categories" 
        :key="category.value"
        :label="category.label"
        :name="category.value"
      >
        <div class="entertainment-grid">
          <site-card
            v-for="site in filteredSites"
            :key="site.id"
            :site="site"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search as SearchIcon } from '@element-plus/icons-vue'
import SiteCard from '@/components/SiteCard.vue'

const searchQuery = ref('')
const activeCategory = ref('video')

// 使用响应式引用存储数据
const categories = ref([
  { label: '视频媒体', value: 'video' },
  { label: '音乐平台', value: 'music' },
  { label: '游戏娱乐', value: 'game' },
  { label: '直播平台', value: 'live' },
  { label: '影视资源', value: 'movie' }
])

const sites = ref([
  {
    id: 1,
    name: 'Bilibili',
    desc: '国内知名的视频弹幕网站',
    icon: '/icons/bilibili.png',
    url: 'https://www.bilibili.com',
    category: 'video',
    tags: ['视频', '动漫', '直播'],
    views: 1000000,
    likes: 500000,
    badges: [{ text: '热门', type: 'danger' }]
  },
  {
    id: 2,
    name: 'QQ音乐',
    desc: '腾讯旗下音乐流媒体平台',
    icon: '/icons/qqmusic.png',
    url: 'https://y.qq.com',
    category: 'music',
    tags: ['音乐', '播放器'],
    views: 800000,
    likes: 400000
  },
  // 添加更多娱乐网站...
])

const filteredSites = computed(() => {
  let result = sites.value

  if (activeCategory.value !== 'all') {
    result = result.filter(site => site.category === activeCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(site => 
      site.name.toLowerCase().includes(query) ||
      site.desc.toLowerCase().includes(query) ||
      site.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  return result
})
</script>

<style lang="less" scoped>
.entertainment-view {
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

  .entertainment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
}
</style> 