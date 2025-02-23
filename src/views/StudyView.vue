<template>
  <div class="study-view">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="page-header">
          <h1>学习资源</h1>
          <el-input
            v-model="searchQuery"
            placeholder="搜索学习资源..."
            prefix-icon="Search"
            clearable
            @input="handleSearch"
          />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-tabs v-model="activeCategory">
          <el-tab-pane 
            v-for="category in categories" 
            :key="category.value" 
            :label="category.label" 
            :name="category.value"
          >
            <div class="resource-list">
              <div v-for="group in groupedResources" :key="group.title" class="resource-group">
                <h2 class="group-title">{{ group.title }}</h2>
                <div class="resource-grid">
                  <site-card
                    v-for="resource in group.items"
                    :key="resource.id"
                    :site="resource"
                    :featured="resource.featured"
                  />
                </div>
              </div>
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
  name: 'StudyView',
  components: {
    SiteCard
  },
  setup() {
    const searchQuery = ref('')
    const activeCategory = ref('all')

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
        icon: '/icons/coursera.png',
        url: 'https://coursera.org',
        category: 'programming',
        group: '在线课程平台',
        tags: ['MOOC', '在线教育'],
        featured: true,
        badges: [
          { text: '推荐', color: '#ff4757' }
        ]
      },
      // 添加更多学习资源...
    ]

    const groupedResources = computed(() => {
      let filtered = resources

      if (activeCategory.value !== 'all') {
        filtered = filtered.filter(r => r.category === activeCategory.value)
      }

      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(r => 
          r.name.toLowerCase().includes(query) ||
          r.desc.toLowerCase().includes(query) ||
          r.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }

      // 按组分类
      const groups = {}
      filtered.forEach(resource => {
        if (!groups[resource.group]) {
          groups[resource.group] = {
            title: resource.group,
            items: []
          }
        }
        groups[resource.group].items.push(resource)
      })

      return Object.values(groups)
    })

    return {
      searchQuery,
      activeCategory,
      categories,
      groupedResources
    }
  }
}
</script>

<style lang="less" scoped>
.study-view {
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

  .resource-group {
    margin-bottom: 3rem;

    .group-title {
      font-size: 1.5rem;
      color: var(--primary-dark);
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--border-color);
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
  .study-view {
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