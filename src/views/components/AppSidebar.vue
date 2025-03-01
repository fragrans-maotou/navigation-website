<template>
  <div class="sidebar">
    <el-affix :offset="100" style="padding-left: 10px;">
      <el-anchor 
              direction="vertical"
              class="main-nav" 
              :offset="70"
              type="default"
              :container="props.containerRef"
          >
          <el-anchor-link 
            v-for="item in navItems" 
            :key="item.id"
            :href="`#${item.id}`"
            :title="item.name"
          >
            <template #icon>
              <i :class="item.icon"></i>
            </template>
          </el-anchor-link>
      </el-anchor>
    </el-affix>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from 'vue'
const props = defineProps({
  containerRef: {
    type: Object as PropType<HTMLElement | null>,
    required: true
  }
})

const navItems = ref([
  { id: 'tools', name: '实用工具', icon: 'fas fa-tools' },
  { id: 'study', name: '学习资源', icon: 'fas fa-book' },
  { id: 'entertainment', name: '娱乐天地', icon: 'fas fa-play' },
  { id: 'social', name: '社交媒体', icon: 'fas fa-share-alt' },
  { id: 'news', name: '新闻资讯', icon: 'fas fa-newspaper' },
  { id: 'dev', name: '开发工具', icon: 'fas fa-code' }
])

</script>

<style lang="less" scoped>
.sidebar {
  width: 100px;
  background: transparent;
  // position: fixed;
  // top: calc(100vh + 50%);
  // transform: translateY(-50%);
  left: 20px;
  z-index: 100;
}
.main-nav{
  background: transparent;
}
</style> 