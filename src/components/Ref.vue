<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">+1</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
/**
 * 1.此时数据并不是响应式数据 需要绑定ref
 * 2.ref是一个函数,作用:定义一个响应式的数据,返回的是一个Ref对象,对象中有一个value属性,
 *   如果需要对数据进行操作,需要使用该Ref对象调用value属性的方式进行数据的操作
 * 3.count是一个Ref对象,对象是不能进行++的操作 HTML模版中是不需要 .value
 */
export default defineComponent({
  name: 'App',
  setup() {
    //  let count: number = 0 // 1
    const count = ref(0) //2
    function updateCount() {
      count.value++ //3
    }
    return { count, updateCount }
  }
})
</script>
