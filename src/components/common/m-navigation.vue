<template>
  <div class="m-navigation ig-navigation" style="z-index: 100;">
    <router-link :to="{name: 'home'}" class="home" tag="a" active-class="active">
      <span class="iconfont icon-home"></span>
      <span class="txt">首页</span>
    </router-link>
    <router-link :to="{name: 'about'}" class="find" tag="a" active-class="active">
      <span class="iconfont icon-liwu"></span>
      <span class="txt">发现</span>
    </router-link>
    <router-link :to="{name: 'me'}" class="userCenter" tag="a" active-class="active">
      <span class="iconfont icon-wode"></span>
      <span class="txt">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'm-navigation',

}
</script>

<style lang="stylus" scoped>
@import "../../variables/var.styl"
.m-navigation
  *
    box-sizing border-box

  position fixed
  display flex
  justify-content space-around
  border-top 1px solid #EBEBEB
  /*height 50px*/
  width 100%
  background #fff
  bottom 0
  left 0
  right 0
  z-index 100

  a
    display flex
    justify-content center
    flex-direction column
    align-items center
    .iconfont
      color #666
      font-size 12px
    .txt
      color #666666
      font-size 12px


</style>
