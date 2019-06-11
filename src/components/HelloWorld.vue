<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  props: {
     msg: String
  },
  computed:{},
  watch:{},
  data(){},
  methods(){},
  beforeCreate(){},
  created(){},
  beforeMount(){},
  mounted(){},
  beforeUpdate(){},
  updated(){},
  activated(){},
  deactivated(){},
  beforeDestroy(){},
  destroyed(){},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0
</style>
