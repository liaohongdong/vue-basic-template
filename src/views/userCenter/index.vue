<template>
  <div id="userCenter">
    <!--<div v-if="type === 'success'">success</div>-->
    <!--<div v-else-if="type === 'error'">error</div>-->
    <!--<div v-else-if="type === 'warm'">warm</div>-->
    <!--<div v-else>default</div>-->
    <btn
      v-for="(btn, index) in testData"
      :type="btn.type"
      :text="btn.text"
      :key="index">{{btn.text}}
    </btn>
  </div>
</template>

<script>
  import btn from './render'
  export default {
    name: 'userCenter',
    data() {
      return {
        testData: [
          {type: 'success', text: 'success'},
          {type: 'error', text: 'error'},
          {type: 'warn', text: 'warn'},
          {type: 'danger', text: 'danger'},
          {type: 'default', text: 'default'},
        ]
      }
    },
    components: {
      btn
    },
    watch: {},
    computed: {},
    props: {
      type: {
        type: String,
        default: 'default'
      },
      text: {
        type: String,
        default: 'default'
      }
    },
    methods: {
      clickHandle() {
        console.log(112233);
      }
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    filters: {},
  }
</script>
<style lang="stylus" scoped>
</style>

<style lang="stylus">
</style>

