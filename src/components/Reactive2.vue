<template>
  <h2>setup和reactive的基本使用</h2>
  <h2>{{ m1 }}</h2>
  <h2>{{ m2.wife.name }}</h2>
  <h2>{{ m2.wife.name }}</h2>
  <h3><button @click="updateData">updateData</button></h3>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
/**
 * 是vue3的composition API中2个最重要的响应式API(ref和reactive)
 * ref用来处理基本类型数据，reactive用来处理对象(递归深度响应式)
 * 如果用ref对象/数组，内部会自动将对象/数组转换为reactive的代理对象
 * ref内部:通过给value属性添加getter/setter来实现对数据的劫持
 * reactive内部:通过使用proxy来实现对对象内部所有数据的劫持，并通过Reflect操作对象内部数据
 * ref的数据操作:在js中要.value，在模板中不需要(内部解析模板时会自动添加.value)
 */

export default defineComponent({
  name: 'Reactive2',
  setup() {
    const m1 = ref('abc')
    const m2 = ref({
      //ref内部会自动将对象/数组转换为reactive的代理对象
      name: '小明',
      wife: {
        name: '小红'
      }
    })
    console.log(m2)
    const m3 = reactive({
      name: '小明',
      wife: {
        name: '小红'
      }
    })
    const updateData = () => {
      m1.value += '---'
      m2.value.wife.name += '---'
      m3.wife.name += '---'
    }
    return {
      m1,
      m2,
      m3,
      updateData
    }
  }
})
</script>
