<template>
  <div class="todolist-foot">
    <input type="checkbox" />
    <span>已选中：{{ getCheckedNum() }}/全部：{{ todoLists.length }}</span>
    <button class="btn">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ITodoLists } from './todos'

export default defineComponent({
  name: 'Footer',
  props: {
    todoLists: {
      type: Array as () => ITodoLists[],
      required: true
    }
  },
  setup(props) {
    function getCheckedNum() {
      return 23
    }
    return {
      getCheckedNum
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
