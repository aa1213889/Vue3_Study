<template>
  <input class="todo-input" placeholder="请输入任务名称，按回车确认" v-model="iValue" @keyup.enter="setValue" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Header',
  props: {
    addList: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const iValue = ref('')
    function setValue() {
      if (iValue.value === '') return
      props.addList(iValue.value)
      iValue.value = ''
    }
    return {
      iValue,
      setValue
    }
  }
})
</script>

<style>
.todo-input {
  width: 97%;
  height: 30px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 5px;
  padding-left: 2%;
}
</style>
