<template>
  <div class="todolist-main">
    <Header :addList="addList" />
    <Content :todoLists="todoLists" :delList="delList" />
    <Footer :todoLists="todoLists" />
  </div>
</template>

<script lang="ts">
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
import { defineComponent, reactive } from 'vue'
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

    return { todoLists, addList, delList }
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
