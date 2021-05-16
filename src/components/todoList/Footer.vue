<template>
  <div class="todolist-foot">
    <input type="checkbox" />
    <span>已完成：/全部：</span>
    <button class="btn">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Footer',
  setup() {
    const myInputRef = ref<HTMLElement | null>(null)
    return { myInputRef }
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
