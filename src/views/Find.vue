<template>
  <div class="find">
    <div class="quick-sale">
      <section>
        <div class="wrap">
          <div class="header">
            <div class="title">促销专场</div>
            <div class="more">
              <div class="desc">更多</div>
              <span class="iconfont icon-iconfontjiantou3"></span>
            </div>
          </div>
          <div class="body">
            <div class="box" v-for="(item, i) in quickSele" :key="i">
              <div class="item">
                <div class="content">
                  <div class="title">
                    {{item.title}}
                  </div>
                  <div class="price">
                    {{item.price}}
                  </div>
                </div>
                <img :src="item.img"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="time-kill">

    </div>
    <div class="ranking-list">

    </div>
  </div>
</template>
<script>
export default {
  name: 'find',
  data(){
    return{
      quickSele: [{
        title: '教辅',
        price: '每满79减30',
        img: 'http://img3m2.ddimg.cn/2/23/20998892-1_b_13.jpg'
      },{
        title: '外语考试',
        price: '每满100减30',
        img: 'http://img3m9.ddimg.cn/49/32/25537099-1_b_9.jpg'
      },{
        title: '教辅',
        price: '每满59减10',
        img: 'http://img3m3.ddimg.cn/20/24/25257593-1_b_7.jpg'
      },{
        title: '年货节跨店',
        price: '每满99减50',
        img: 'http://img3m5.ddimg.cn/41/18/1378215275-1_b_3.jpg'
      },{
        title: '寒假阅读季',
        price: '每满75减25',
        img: 'http://img3m5.ddimg.cn/75/0/1461862785-1_b_8.jpg'
      },{
        title: '',
        price: '49元5件',
        img: 'http://img3m0.ddimg.cn/52/7/25301680-1_b_3.jpg'
      }]
    }
  },
  components: {},
  watch:{},
  computed:{},
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
<style lang="scss" scoped>
  .find {
    .quick-sale{
      background: url("http://liaohongdong.cn/sale_big.jpg") no-repeat;
      .wrap{
        padding: 0 15px 15px;
        .header{
          position: relative;
          .title{
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            padding: 15px 0 5px;
          }
          .more{
            position: absolute;
            right: 0;
            top: 15px;
            display: flex;
            align-items: center;
            color: #fff;
            .desc{
              font-size: 12px;
            }
          }
        }
        .body{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          .box{
            width: 112px;
            .item{
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              padding: 10px 10px 5px 10px;
              margin: 6px 6px 0 0;
              background: #fff;
              border-radius: 4px;
              .content{
                display: flex;
                flex-direction: column;
                .title{
                  color: #666;
                  font-size: 14px;
                  min-height: 20px;
                }
                .price{
                  color: #943dff;
                  font-size: 14px;
                  min-height: 20px;
                }
              }
              img{
                display: block;
                margin-top: 10px;
                width: 74px;
                height: 74px;
              }
            }
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  .find {
  }
</style>
