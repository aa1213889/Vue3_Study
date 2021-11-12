import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
        path: '/',
        name: 'Home',
        component:  ()=>import ('@/components/todoList/Main.vue')
    },
    {
      path: '/use',
      name: 'Use',
      component: ()=>import ('@/components/use/index.vue')
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router