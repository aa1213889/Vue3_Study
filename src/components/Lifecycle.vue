<template>
  <h2>生命周期</h2>
  <h3>msg：{{ msg }}</h3>
  <button @click="updateMsg">click</button>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted } from 'vue'

export default defineComponent({
  name: 'Lifecycle',
  setup() {
    const msg = ref('abc')
    const updateMsg = () => {
      msg.value += '==='
    }
    onBeforeMount(() => {
      console.log('vue3.0的onBeforeMount')
    })
    onMounted(() => {
      console.log('vue3.0的onMounted')
    })
    return { msg, updateMsg }
  }
})
</script>
