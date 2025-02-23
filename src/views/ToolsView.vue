<template>
  <div class="tools-view">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="page-header">
          <h1>实用工具</h1>
          <el-input
            v-model="searchQuery"
            placeholder="搜索工具..."
            prefix-icon="Search"
            clearable
            @input="handleSearch"
          />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-tabs v-model="activeCategory" @tab-click="handleCategoryChange">
          <el-tab-pane 
            v-for="category in categories" 
            :key="category.value" 
            :label="category.label" 
            :name="category.value"
          >
            <div class="tool-grid">
              <site-card
                v-for="tool in filteredTools"
                :key="tool.id"
                :site="tool"
                :featured="tool.featured"
              />
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <el-backtop />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import SiteCard from '@/components/SiteCard.vue'

export default {
  name: 'ToolsView',
  components: {
    SiteCard
  },
  setup() {
    const searchQuery = ref('')
    const activeCategory = ref('all')

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
        icon: '/icons/vscode.png',
        url: 'https://code.visualstudio.com',
        category: 'dev',
        tags: ['编辑器', '开发工具'],
        featured: true,
        badges: [
          { text: '推荐', color: '#ff4757' }
        ]
      },
      {
        id: 2,
        name: 'Figma',
        desc: '专业的在线设计工具',
        icon: '/icons/figma.png',
        url: 'https://figma.com',
        category: 'design',
        tags: ['设计', 'UI/UX'],
        views: 8500,
        likes: 2300
      },
      // 添加更多工具...
    ]

    const filteredTools = computed(() => {
      let result = tools
      
      // 分类筛选
      if (activeCategory.value !== 'all') {
        result = result.filter(tool => tool.category === activeCategory.value)
      }

      // 搜索筛选
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        result = result.filter(tool => 
          tool.name.toLowerCase().includes(query) ||
          tool.desc.toLowerCase().includes(query) ||
          tool.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }

      return result
    })

    const handleSearch = () => {
      // 可以添加搜索防抖
    }

    const handleCategoryChange = () => {
      // 可以添加分类切换逻辑
    }

    return {
      searchQuery,
      activeCategory,
      categories,
      filteredTools,
      handleSearch,
      handleCategoryChange
    }
  }
}
</script>

<style lang="less" scoped>
.tools-view {
  .page-header {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2rem;
      color: var(--primary-dark);
      margin: 0;
    }

    .el-input {
      width: 300px;
    }
  }

  .tool-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .tools-view {
    .page-header {
      flex-direction: column;
      gap: 1rem;

      .el-input {
        width: 100%;
      }
    }
  }
}
</style> 