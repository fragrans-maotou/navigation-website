<template>
  <div class="resource-list">
    <!-- 固定头部 -->
    <div class="fixed-header">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="page-header">
            <h1>{{ title }}</h1>
            <el-input
              v-model="searchQuery"
              :placeholder="searchPlaceholder"
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
            />
          </el-tabs>
        </el-col>
      </el-row>
    </div>

    <!-- 可滚动的内容区域 -->
    <div class="scrollable-content">
      <div class="resource-grid">
        <site-card
          v-for="item in filteredItems"
          :key="item.id"
          :site="item"
          :featured="item.featured"
        />
      </div>
    </div>

    <el-backtop target=".scrollable-content" />
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'
import SiteCard from '@/views/components/SiteCard.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  searchPlaceholder: {
    type: String,
    default: '搜索...'
  },
  categories: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  defaultCategory: {
    type: String,
    default: 'all'
  }
})

const searchQuery = ref('')
const activeCategory = ref(props.defaultCategory)

const filteredItems = computed(() => {
  let result = props.items
  
  // 分类筛选
  if (activeCategory.value !== 'all') {
    result = result.filter(item => item.category === activeCategory.value)
  }

  // 搜索筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)))
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
</script>

<style lang="less" scoped>
.resource-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;

  .fixed-header {
    flex-shrink: 0;
    background: var(--bg-primary);
    z-index: 10;

    .page-header {
      margin-bottom: 1rem;
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

    :deep(.el-tabs__header) {
      margin-bottom: 1rem;
    }
  }

  .scrollable-content {
    flex: 1;
    overflow-y: auto;
    padding: 1rem 0;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--border-color);
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    .resource-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .resource-list {
    padding: 10px;
    
    .fixed-header {
      .page-header {
        flex-direction: column;
        gap: 1rem;

        .el-input {
          width: 100%;
        }
      }
    }
  }
}
</style> 