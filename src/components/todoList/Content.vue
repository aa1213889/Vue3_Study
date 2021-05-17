<template>
  <div class="todolist-content">
    <List v-for="(list, index) in todoLists" :key="list.id" :list="list" :delList="delList" :index="index" />
  </div>
</template>

<script lang="ts">
import List from './List.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Content',
  components: { List },
  props: ['todoLists', 'delList']
})
</script>

<style>
.todolist-content {
  width: 100%;
  margin-top: 5%;
  border-top: 1px solid rgb(224, 224, 224);
}
</style>
