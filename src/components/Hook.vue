<template>
  <h2>自定义hook函数操作</h2>
  <h3 v-if="loading">正在加载中</h3>
  <h3 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h3>
  <h3 v-else>
    <ul>
      <li>id:{{ data.id }}</li>
      <li>address:{{ data.address }}</li>
      <li>distance:{{ data.distance }}</li>
    </ul>
  </h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import userRequest from '../hook/userRequest'

//定义接口，约束数据类型
interface IAddress {
  id: number
  address: string
  distance: string
}
export default defineComponent({
  name: 'Hook',
  setup() {
    const { loading, data, errorMsg } = userRequest<IAddress>('../../../data/address.json')
    return {
      loading,
      data,
      errorMsg
    }
  }
})
</script>
