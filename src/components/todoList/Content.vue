<template>
  <div class="todolist-content">
    <List />
    <List />
    <List />
  </div>
</template>

<script>
import List from './List.vue'
export default {
  name: 'Content',
  components: { List }
}
</script>

<style>
.todolist-content {
  width: 100%;
  margin-top: 5%;
}
</style>
