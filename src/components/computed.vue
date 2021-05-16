<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓：<input placeholder="请输入姓氏" v-model="user.fristName" /> <br />
    名：<input placeholder="请输入名字" v-model="user.lastName" />
  </fieldset>
  <fieldset>
    <legend>演示</legend>
    姓名1：<input placeholder="显示姓名" v-model="cname1" /> <br />
    姓名2：<input placeholder="显示姓名" v-model="cname2" /> <br />
    姓名3：<input placeholder="显示姓名" v-model="cname3" /> <br />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watchEffect } from 'vue'

export default defineComponent({
  name: 'Reactive2',
  setup() {
    //1.定义一个响应式对象
    const user = reactive({
      fristName: '蒋',
      lastName: '治'
    })

    //2.通过Vue3计算属性的方式实现第一个姓名的显示
    //此时改变user中的值 姓名1 的值会跟着改变
    //计算属性的函数中如果只传入一个回调函数,表示的是get

    const cname1 = computed(() => {
      //返回的是一个ref对象
      return user.fristName + '.' + user.lastName
    })

    //3.修改输入框姓名2的内容 姓名操作的内容也跟着同步
    //计算属性的函数完整写法有get和set的回调方法
    const cname2 = computed({
      get() {
        return user.fristName + '.' + user.lastName
      },
      set(val: string) {
        user.fristName = val.split('.')[0]
        user.lastName = val.split('.')[1]
      }
    })

    //4.监听指定的数据
    //只要user的内容变更,cname就会对应改变
    const cname3 = ref('')
    watchEffect(() => {
      cname3.value = user.fristName + '.' + user.lastName
    })

    return { user, cname1, cname2, cname3 }
  }
})
</script>
