<template>
  <div class="todolist-foot">
    <input type="checkbox" :checked="checked" @click="checkHandle" />
    <span>已选中：{{ checkNum }}/全部：{{ todoLists.length }}</span>
    <button class="btn" @click="delCheckedLists">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { ITodoLists } from './todos'

export default defineComponent({
  name: 'Footer',
  props: {
    todoLists: {
      type: Array as () => ITodoLists[],
      required: true
    },
    delCheckedLists: {
      type: Function,
      required: true
    },
    checkAllHandle: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const checked = ref(false)
    function checkHandle() {
      checked.value = !checked.value
      props.checkAllHandle(checked.value)
    }
    const checkNum = ref(0)
    watchEffect(() => {
      let num = 0
      for (const list of props.todoLists) {
        if (list.isChecked) num++
      }
      checkNum.value = num
      num === props.todoLists.length ? (checked.value = true) : (checked.value = false)
    })

    return {
      checked,
      checkHandle,
      checkNum
    }
  }
})
</script>

<style>
.todolist-foot {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
}

.todolist-foot span {
  padding-left: 3%;
}

.todolist-foot .btn {
  height: 50%;
  position: absolute;
  right: 0;
}
</style>
