<template>
  <div class="todolist-main">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'

export default {
  components: { Header, Content, Footer }
}
</script>

<style>
.todolist-main {
  width: 500px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 5px;
  padding: 1%;
}
</style>
