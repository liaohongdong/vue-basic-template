<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.home{
  color: $cred;
  // @include borderR(30px);
}
</style>
<style lang="scss">

</style>

<!--<style lang="stylus" scoped>-->
  <!--.home-->
    <!--color: $cred-->
<!--</style>-->
<!--<style lang="stylus">-->
<!--.home-->
  <!--color: $cred-->
<!--</style>-->

<!--<style lang="less" scoped>-->
<!--.home{-->
  <!--color: @cred;-->
  <!--.borderR('#ddd', '50px');-->
<!--}-->
<!--</style>-->
