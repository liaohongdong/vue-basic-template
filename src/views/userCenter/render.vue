<script>
  export default {
    render(/*h*/) {
      // return h('div', {
      //   'class': {
      //     btn: true,
      //     success: this.type === 'success',
      //     error: this.type === 'error',
      //     warm: this.type === 'warn',
      //     default: this.type === 'default'
      //   },
      //   domProps: {
      //     innerHTML: this.$slots.default[0].text
      //   },
      //   on: {
      //     click: this.clickHandle
      //   }
      // })
      return (
        <div
          class={{
            btn: true,
            success: this.type === 'success',
            error: this.type === 'error',
            warm: this.type === 'warm',
            default: this.type === 'default'
          }}
          onClick={this.clickHandle}>
          {this.$slots.default[0].text}
        </div>
      )
    },
    methods: {
      clickHandle() {
        console.log(11, this.type);
      }
    },
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
    mounted(){
    }
  }
</script>
