<template>
  <svg 
    :style="{ 
      left: position.x + 'px', 
      top: position.y + 'px', 
      transform: `scaleX(${direction})`, 
      opacity: 1 
    }" 
    class="running-cat" 
    width="60" 
    height="60" 
    viewBox="0 0 100 100"
  >
    <!-- 猫咪身体 -->
    <path
      d="M30,75 Q40,70 50,75 Q60,70 70,75 Q75,60 75,50 Q75,20 50,20 Q25,20 25,50 Q25,60 30,75"
      :fill="currentColor"
    />
    <!-- 耳朵 -->
    <path :d="earPath" :fill="currentColor" />
    <path :d="earPath2" :fill="currentColor" />
    <!-- 眼睛 -->
    <circle cx="40" cy="40" r="4" fill="#fff" />
    <circle cx="60" cy="40" r="4" fill="#fff" />
    <!-- 瞳孔 -->
    <circle cx="40" cy="40" r="2" fill="#000" />
    <circle cx="60" cy="40" r="2" fill="#000" />
    <!-- 鼻子 -->
    <path d="M48,45 L52,45 L50,48 Z" fill="pink" />
    <!-- 胡须 -->
    <g :style="{ transform: `scaleX(${direction})` }" stroke="#666" stroke-width="1">
      <line x1="45" y1="48" x2="25" y2="45" />
      <line x1="45" y1="50" x2="25" y2="50" />
      <line x1="45" y1="52" x2="25" y2="55" />
      <line x1="55" y1="48" x2="75" y2="45" />
      <line x1="55" y1="50" x2="75" y2="50" />
      <line x1="55" y1="52" x2="75" y2="55" />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const position = ref({ x: 100, y: 100 })
const targetPosition = ref({ x: 100, y: 100 })
const direction = ref(1)
const currentColor = ref('#FFB6C1') // 开始颜色
let moveRandomlyTimer: number | null = null
let animationFrame: number

// 可爱的颜色列表
const colors = [
  '#FFB6C1', // 浅粉红
  '#FFA07A', // 浅鲑鱼色
  '#DDA0DD', // 梅红色
  '#87CEEB', // 天蓝色
  '#98FB98', // 浅绿色
  '#F0E68C', // 卡其色
  '#E6E6FA', // 淡紫色
]

// 耳朵路径，会随着移动稍微摆动
const earPath = computed(() => {
  const wobble = Math.sin(Date.now() / 300) * 2
  return `M35,25 L${25 + wobble},10 L45,20 Z`
})

const earPath2 = computed(() => {
  const wobble = Math.sin(Date.now() / 300) * 2
  return `M65,25 L${75 + wobble},10 L55,20 Z`
})

const moveRandomly = () => {
  const maxX = window.innerWidth - 60
  const maxY = window.innerHeight - 60
  
  targetPosition.value = {
    x: Math.random() * maxX,
    y: Math.random() * maxY
  }
  
  direction.value = targetPosition.value.x > position.value.x ? 1 : -1
  
  // 随机改变颜色
  currentColor.value = colors[Math.floor(Math.random() * colors.length)]

}

const animate = () => {
  // 使用缓动函数使移动更平滑
  const dx = (targetPosition.value.x - position.value.x) * 0.02
  const dy = (targetPosition.value.y - position.value.y) * 0.02
  
  position.value.x += dx
  position.value.y += dy

  // 修改判定条件，当非常接近目标位置时才触发新的移动
  const distance = Math.sqrt(
    Math.pow(targetPosition.value.x - position.value.x, 2) + 
    Math.pow(targetPosition.value.y - position.value.y, 2)
  )
  
  // 只在没有定时器时才设置新的定时器
  if (distance < 3 && !moveRandomlyTimer) {
    moveRandomlyTimer = setTimeout(() => {
      moveRandomly()
      moveRandomlyTimer = null  // 定时器执行后将其设为null
    }, 1000)
  }

  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  moveRandomly()
  animate()
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.running-cat {
  position: fixed;
  pointer-events: none;
  z-index: 1000;
  transition: all 0.1s ease-in-out;
}
</style> 