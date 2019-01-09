<template>
  <div class="home">
    <!--<x-header></x-header>-->
    <!--<tabbar name="'"></tabbar>-->
    <img alt="Vue logo" src="@/assets/logo.png" style="width: 30px; height: 30px;">
    <img alt="Vue logo" src="@~/logo.png" style="width: 30px; height: 30px;">
    123123123
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import { XHeader, Tabbar } from 'vux'
// import { home } from '@/api/home'

export default {
  name: 'home',
  components: {
    HelloWorld,
    XHeader,
    Tabbar
  },
  data() {
    return {
      title: 'liao'
    }
  },
  metaInfo() {
    return {
      title: this.title,
      titleTemplate: '%s-vue-meta',
      meta: [
        { charset: 'utf-8' }
      ],
      htmlAttrs: {
        lang: 'zh'
      },
      script: [{
        innerHTML: 'console.log("hello hello!")',
        type: 'text/javascript'
      }],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  created(){

  },
  destroyed(){

  },
  mounted(){

  },
}
</script>

<style lang="scss" scoped>
@import "../variables/var.scss";
.home{
  color: $cred;
  //@include borderR(30px);
}
</style>
<!--<style lang="scss">-->

<!--</style>-->

<!--<style lang="stylus" scoped>-->
  <!--.home-->
    <!--color $cred-->
<!--</style>-->
<!--<style lang="stylus">-->
<!--.home-->
  <!--color $cred-->
<!--</style>-->

<!--<style lang="less" scoped>-->
<!--.home{-->
  <!--color: @cred;-->
  <!--.borderR('#ddd', '50px');-->
<!--}-->
<!--</style>-->
