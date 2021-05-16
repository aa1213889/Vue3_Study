<template>
  <div class="todolist-list">
    <input type="checkbox" />
    <span>奔驰</span>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style>
.todolist-list {
  padding: 1%;
  display: flex;
  align-items: center;
  border: 1px solid rgb(224, 224, 224);
}
.todolist-list span {
  padding-left: 1%;
}
</style>
