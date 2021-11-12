<script setup lang="ts">
import { ref } from "vue"
const value = ref<string>('')
</script> 

<template>
  <input v-model="value" />
</template>

<style lang="less" scoped>
input {
  border-color: aqua;
}
</style>
