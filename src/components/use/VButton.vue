<script setup lang="ts">
import { ref, defineProps } from "vue"

const props = defineProps({
  value: String
})
</script> 

<template>
  <button>{{ props.value }}</button>
</template>

<style lang="less" scoped>
button {
  background-color: aqua;
}
</style>
