<template>
  <section class="featured-section">
    <div class="section-header">
      <h2 class="section-title">
        <el-icon><Sunny /></el-icon>
        热门推荐
      </h2>
      <div class="section-actions">
        <button class="btn" @click="handleRefresh">
          <el-icon><Refresh /></el-icon>
          换一批
        </button>
      </div>
    </div>
    
    <div class="card-grid">
      <site-card
        v-for="site in site"
        :key="site.id"
        :site="site"
        :featured="site.featured"
      />
    </div>
  </section>
</template>

<script setup>
import { Sunny, Refresh } from '@element-plus/icons-vue'
import SiteCard from './SiteCard.vue'
import { defineProps, ref, onMounted } from 'vue'
const props = defineProps({
  sites: {
    type: Array,
    required: true
  }
})

// defineEmits(['refresh'])

const site = ref([])

const handleRefresh = () => {
  // emit('refresh')
  const array = [...props.sites]
  const arraySort = array.sort(() => Math.random() - 0.5);
  site.value = [arraySort[0]]
}

onMounted(() => {
  handleRefresh()
})
</script>

<style lang="less" scoped>
.featured-section {
  // margin: 10px;
  // margin-bottom: 2rem;
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);

    .section-title {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--primary-dark);
      display: flex;
      align-items: center;
      gap: 0.8rem;

      i {
        font-size: 1.2rem;
        opacity: 0.8;
      }
    }

    .section-actions {
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        background: transparent;
        color: var(--text-secondary);
        cursor: pointer;
        transition: all 0.3s;
        text-decoration: none;
        font-size: 0.9rem;

        &:hover {
          background: var(--light-gray);
          color: var(--primary-dark);
        }
      }
    }
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    animation: fadeIn 0.5s ease-out;
  }
}
</style> 