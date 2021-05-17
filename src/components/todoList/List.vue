<template>
  <div class="todolist-list" @mouseover="mouseHandle(true)" @mouseleave="mouseHandle(false)">
    <input type="checkbox" :checked="list.isChecked" />
    <span>{{ list.text }}</span>
    <button v-show="btnShow" @click="delList(index)">删除</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ITodoLists } from './todos'

export default defineComponent({
  name: 'List',
  props: {
    list: Object as () => ITodoLists,
    delList: {
      type: Function,
      required: true
    },
    index: Number
  },
  setup() {
    const btnShow = ref(false)
    function mouseHandle(state: boolean) {
      if (state) {
        btnShow.value = true
      } else {
        btnShow.value = false
      }
    }
    return { btnShow, mouseHandle }
  }
})
</script>

<style>
.todolist-list {
  padding: 1%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(224, 224, 224);
  border-left: 1px solid rgb(224, 224, 224);
  border-right: 1px solid rgb(224, 224, 224);
  position: relative;
}
.todolist-list span {
  padding-left: 1%;
}
.todolist-list button {
  position: absolute;
  right: 2%;
}
</style>
