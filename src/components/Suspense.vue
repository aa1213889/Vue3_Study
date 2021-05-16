<template>
  <Suspense>
    <template v-slot:default>
      <AsyncComp />
    </template>

    <template v-slot:fallback>
      <h1>LOADING...</h1>
    </template>
  </Suspense>
</template>

<script>
/**
 * 它们允许我们的应用程序在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验
 * 如：异步加载一个组件的时候 等待的空闲期的时候显示loading页面 数据来了后在显示组件
 */
import AsyncAddress from './AsyncAddress.vue'
import { defineAsyncComponent } from 'vue'
const AsyncComp = defineAsyncComponent(() => import('./AsyncComp.vue'))
export default {
  setup() {
    return {}
  },

  components: {
    AsyncComp,
    AsyncAddress
  }
}
</script>
