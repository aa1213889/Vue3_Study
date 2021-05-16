<template>
  <h2>ref的另一个作用：获取HTML页面的元素</h2>
  <input ref="myInputRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
/**
 * 需求：页面加载完毕后,input标签自动获取焦点
 */
export default defineComponent({
  name: 'App',
  setup() {
    const myInputRef = ref<HTMLElement | null>(null)
    onMounted(() => {
      myInputRef.value && myInputRef.value.focus()
    })
    return { myInputRef }
  }
})
</script>
