<template>
  <resource-list
    title="娱乐天地"
    searchPlaceholder="搜索娱乐内容..."
    :categories="categories"
    :items="sites"
    defaultCategory="video"
  />
</template>

<script setup>
import ResourceList from '@/views/components/ResourceList.vue'

const categories = [
  { label: '视频媒体', value: 'video' },
  { label: '音乐平台', value: 'music' },
  { label: '游戏娱乐', value: 'game' },
  { label: '直播平台', value: 'live' },
  { label: '影视资源', value: 'movie' }
]

const sites = [
  {
    id: 1,
    name: 'Bilibili',
    desc: '国内知名的视频弹幕网站',
    icon: 'https://www.bilibili.com/favicon.ico',
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
    icon: 'https://y.qq.com/favicon.ico',
    url: 'https://y.qq.com',
    category: 'music',
    tags: ['音乐', '播放器'],
    views: 800000,
    likes: 400000
  },
  {
    id: 3,
    name: '网易云音乐',
    desc: '音乐流媒体服务',
    icon: 'https://music.163.com/favicon.ico',
    url: 'https://music.163.com',
    category: 'music',
    tags: ['音乐', '播放器', '社区'],
    views: 900000,
    likes: 450000
  },
  {
    id: 4, 
    name: '虎牙直播',
    desc: '游戏直播平台',
    icon: 'https://www.huya.com/favicon.ico',
    url: 'https://www.huya.com',
    category: 'live',
    tags: ['直播', '游戏'],
    views: 700000,
    likes: 350000
  },
  {
    id: 5,
    name: '斗鱼直播',
    desc: '游戏直播平台',
    icon: 'https://www.douyu.com/favicon.ico',
    url: 'https://www.douyu.com', 
    category: 'live',
    tags: ['直播', '游戏'],
    views: 650000,
    likes: 320000
  },
  {
    id: 6,
    name: 'YouTube',
    desc: '全球最大的视频平台',
    icon: 'https://www.youtube.com/favicon.ico',
    url: 'https://www.youtube.com',
    category: 'video',
    tags: ['视频', '直播'],
    views: 2000000,
    likes: 1000000
  },
  {
    id: 7,
    name: 'Netflix',
    desc: '全球流媒体视频网站',
    icon: 'https://www.netflix.com/favicon.ico',
    url: 'https://www.netflix.com',
    category: 'movie',
    tags: ['电影', '剧集'],
    views: 1500000,
    likes: 750000
  }
]
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