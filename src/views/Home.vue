<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
@import "./src/variable/var.styl"
<style lang="stylus" scoped>
  .home
    color: $cred
</style>
<style lang="stylus">
.home
  color: $cred

</style>
