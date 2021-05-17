<template>
  <div class="todolist-main">
    <Header :addList="addList" />
    <Content :todoLists="todoLists" :delList="delList" :editList="editList" />
    <Footer :todoLists="todoLists" :delCheckedLists="delCheckedLists" :checkAllHandle="checkAllHandle" />
  </div>
</template>

<script lang="ts">
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
import { defineComponent, reactive, ref } from 'vue'
import { ITodoLists } from './todos'

export default defineComponent({
  components: { Header, Content, Footer },
  setup() {
    const todoLists = reactive<ITodoLists[]>([
      { id: 1, text: 'JavaScript', isChecked: false },
      { id: 2, text: 'TypeScript', isChecked: true },
      { id: 3, text: 'React', isChecked: false }
    ])

    function addList(text: string) {
      todoLists.unshift({
        id: Date.now(),
        text: text,
        isChecked: false
      })
    }

    function delList(index: number) {
      todoLists.splice(index, 1)
    }

    function delCheckedLists() {
      const arr = todoLists.filter((list) => !list.isChecked)
      todoLists.length = 0
      todoLists.push(...arr)
    }

    function editList(index: number) {
      todoLists[index].isChecked = !todoLists[index].isChecked
    }

    function checkAllHandle(bool: boolean) {
      if (bool) {
        for (const list of todoLists) {
          list.isChecked = true
        }
      } else {
        for (const list of todoLists) {
          list.isChecked = false
        }
      }
    }

    return { todoLists, addList, delList, editList, delCheckedLists, checkAllHandle }
  }
})
</script>

<style>
.todolist-main {
  width: 500px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 5px;
  padding: 1%;
}
</style>
