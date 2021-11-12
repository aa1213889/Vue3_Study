import VButton from "@/components/use/VButton.vue"
import VInput from "@/components/use/VInput.vue"
import { App } from "@vue/runtime-dom"


const components = [
  {name:'VButton', data: VButton},
  {name:'VInput', data: VInput}
]

export default  {
  install(vue:App) {
    console.log('只要被Vue.use()注册 vue会默认执行install方法')
    components.forEach(component =>{
      vue.component(component.name,component.data)
    })
  },
  test(){
    console.log('不会自动被打印')
  }
}
