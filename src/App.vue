<template>
  <div id="app">
    <router-view class="enterView"></router-view>
    <router-view class="enterView" name="navigation" :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
    }
  },
  components:{},
  watch:{},
  computed:{
    key(){
      return this.$route.name != undefined ? this.$route.name + +new Date().getTime() : this.$route + +new Date().getTime()
    }
  },
  methods:{},
  beforeCreate(){},
  created(){},
  beforeMount(){},
  mounted(){},
  beforeDestroy(){},
  destroyed(){},
  filters:{},
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
@import "assets/font/iconfont.css";
@import "~normalize.css/normalize.css";
//@import "variables/var.less";
//@import "variables/var.scss";
//@import "variables/var.styl";
</style>
