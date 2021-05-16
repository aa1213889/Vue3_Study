<template>
  <h2>setup和reactive的基本使用</h2>
  <h3><button @click="emitToFather">+1</button></h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/**
 * setup(props, context) 或者 setup(props,{attrs,slots, emit})
 * props:包含props配置声明且传入了的所有属性的对象
 * attrs: 包含没有在props配置中声明的属性的对象, 相当于this.$attrs
 * slots: 包含所有传入的插槽内容的对象, 相当于this.$slots
 * emit: 用来分发自定义事件的函数, 相当于this.$emit
 */

export default defineComponent({
  name: 'Reactive',
  setup(props, { attrs, slots, emit }) {
    const emitToFather = () => {
      emit('eFlag', '发送内容给父组件')
    }
    return {
      emitToFather
    }
  }
})
</script>
