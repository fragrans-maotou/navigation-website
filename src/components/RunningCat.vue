<template>
  <div>
    <svg 
      :style="{ 
        left: position.x + 'px', 
        top: position.y + 'px',
        transform: `scale(${size}) scaleX(${direction})`,
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
      <!-- 嘴巴 -->
      <path
        d="M47,50 Q50,53 53,50"
        fill="none"
        stroke="#666"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <!-- 胡须 -->
      <g stroke="#666" stroke-width="1">
        <line x1="45" y1="48" x2="25" y2="45" />
        <line x1="45" y1="50" x2="25" y2="50" />
        <line x1="45" y1="52" x2="25" y2="55" />
        <line x1="55" y1="48" x2="75" y2="45" />
        <line x1="55" y1="50" x2="75" y2="50" />
        <line x1="55" y1="52" x2="75" y2="55" />
      </g>
    </svg>
    
    <!-- 添加食物元素 -->
    <div 
      v-for="food in foods" 
      :key="food.id"
      class="food"
      :style="{ 
        left: food.x + 'px', 
        top: food.y + 'px' 
      }"
    >
      🍣
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const position = ref({ x: 100, y: 100 })
const targetPosition = ref({ x: 100, y: 100 })
const direction = ref(1)
const currentColor = ref('#FFB6C1')
const foods = ref<Array<{ id: number; x: number; y: number }>>([])
const size = ref(1)
const currentFoodIndex = ref(0)
let foodId = 0
let animationFrame: number

// 耳朵路径，会随着移动稍微摆动
const earPath = computed(() => {
  const wobble = Math.sin(Date.now() / 300) * 2
  return `M35,25 L${25 + wobble},10 L45,20 Z`
})

const earPath2 = computed(() => {
  const wobble = Math.sin(Date.now() / 300) * 2
  return `M65,25 L${75 + wobble},10 L55,20 Z`
})

// 修改点击处理函数
const handleClick = (event: MouseEvent) => {
  // 添加新食物到列表
  foods.value.push({
    id: foodId++,
    x: event.clientX - 10,
    y: event.clientY - 10
  })
  
  // 如果这是第一个食物，设置为目标位置
  if (foods.value.length === 1) {
    targetPosition.value = {
      x: event.clientX - 30,
      y: event.clientY - 30
    }
    direction.value = targetPosition.value.x > position.value.x ? 1 : -1
  }
}

const animate = () => {
  // 如果没有食物，不需要移动
  if (foods.value.length === 0) {
    animationFrame = requestAnimationFrame(animate)
    return
  }

  const dx = (targetPosition.value.x - position.value.x) * 0.1
  const dy = (targetPosition.value.y - position.value.y) * 0.1
  
  position.value.x += dx
  position.value.y += dy

  // 检查是否到达当前目标食物位置
  const currentFood = foods.value[0]
  if (currentFood) {
    const catCenterX = position.value.x + 30
    const catCenterY = position.value.y + 30
    const distance = Math.sqrt(
      Math.pow(catCenterX - (currentFood.x + 10), 2) + 
      Math.pow(catCenterY - (currentFood.y + 10), 2)
    )
    
    if (distance <= 20) {
      // 吃到食物后增大尺寸
      size.value += 0.1
      if (size.value > 2.5) {
        size.value = 2.5
      }
      
      // 移除已吃掉的食物
      foods.value.shift()
      
      // 如果还有下一个食物，设置为新的目标
      if (foods.value.length > 0) {
        const nextFood = foods.value[0]
        targetPosition.value = {
          x: nextFood.x - 20,
          y: nextFood.y - 20
        }
        direction.value = targetPosition.value.x > position.value.x ? 1 : -1
      }
    }
  }

  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('click', handleClick)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('click', handleClick)
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
  transform-origin: center center;
  opacity: 1;
}

.food {
  position: fixed;
  font-size: 20px;
  pointer-events: none;
  z-index: 999;
}
</style> 