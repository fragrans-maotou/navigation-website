<template>
  <section class="stats-section">
    <div class="stat-card" v-for="stat in stats" :key="stat.label">
      <i :class="stat.icon"></i>
      <div class="stat-info">
        <h3>{{ stat.value }}</h3>
        <p>{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  stats: {
    type: Array,
    required: true
  }
})
</script>

<style lang="less" scoped>
.stats-section {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;

  .stat-card {
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);

    i {
      font-size: 2rem;
      color: var(--primary-dark);
      opacity: 0.8;
    }

    .stat-info {
      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary-dark);
        margin-bottom: 0.2rem;
      }

      p {
        color: var(--text-secondary);
        font-size: 0.9rem;
      }
    }
  }
}
</style> 