<template>
  <div class="home">
    <button @click="openTop()">top</button>
    <button @click="openCenter()">center</button>
    <button @click="openBottom()">bottom</button>
    <button @click="openLoading()">loading</button>
    <swiper :options="swiperOption" ref="homeSwiper">
      <swiper-slide v-for="(item, i) in swiperList" :key="i">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="wrap">
      <div class="bold-banner">
        <div class="title">图书分类</div>
        <div class="more">
          <div class="desc">更多</div>
          <span class="iconfont icon-iconfontjiantou3"></span>
        </div>
      </div>
      <div class="classify">
        <ul>
          <li v-for="(item, i) in classify" :key="i">
            <img :src="item"/>
          </li>
        </ul>
      </div>
      <div class="news">
        <div class="news-icon">
          <img src="http://img60.ddimg.cn/upload_img/00709/789065/123.png">
        </div>
        <div class="container">
          <div class="box">
            <marquee>
              <marquee-item v-for="(item, i) in hotNew" :key="i">
                <div class="flag" v-if="item.type == 1">热卖</div>
                <div class="flag" v-if="item.type == 2">限时购</div>
                <div class="flag" v-if="item.type == 3">特惠</div>
                <div class="txt">{{item.txt}}</div>
              </marquee-item>
            </marquee>
          </div>
          <div class="more">
            <div class="desc">更多</div>
            <span class="iconfont icon-iconfontjiantou3"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row-flag"></div>
    <div class="divider-line-box">
      <divider class="animated infinite rubberBand delay-1s">
        <div class="line-box">
          <span class="iconfont icon-gou"></span>
          <div class="txt">猜你喜欢</div>
        </div>
      </divider>
    </div>
    <div class="guessLike">
      <div class="wrap" v-for="(item, i) in guessLike" :key="i">
        <img :src="item.img">
        <div class="title">{{item.title}}</div>
        <div class="badge">
          <div class="txt" v-for="(type, t) in item.type" :key="t">
            <div v-if="type == 0">自营</div>
            <div v-else-if="type == 1">限时</div>
            <div v-else-if="type == 2">拼团</div>
            <div class="solid" v-else-if="type == 3">特惠</div>
            <div class="solid" v-else-if="type == 4">券</div>
            <div class="solid" v-else-if="type == 5">满折</div>
          </div>
        </div>
        <div class="money">&yen;{{item.money}}</div>
      </div>
    </div>
    <div class="index-bottom-flag"></div>
  </div>
</template>

<script>
import { XHeader, Tabbar, Marquee, MarqueeItem, Divider } from 'vux'
// import { home } from '@/api/home'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide,
    Marquee,
    MarqueeItem,
    Divider,
  },
  data() {
    return {
      i: 0,
      title: 'liao',
      swiperList: [
        'http://liaohongdong.cn/jing.jpg',
        'http://liaohongdong.cn/jing1.jpg',
        'http://liaohongdong.cn/qiao.jpg',
        'http://liaohongdong.cn/qiao1.jpg'
      ],
      classify: [
        'http://img61.ddimg.cn/upload_img/00705/B/tushu1-1545794501.png',
        'http://img61.ddimg.cn/upload_img/00528/123/1226-2-1545794352.png',
        'http://img60.ddimg.cn/upload_img/00528/123/1226-3-1545794352.png',
        'http://img60.ddimg.cn/upload_img/00528/123/1226-4-1545794352.png',
        'http://img61.ddimg.cn/upload_img/00528/123/1226-5-1545794352.png',
        'http://img60.ddimg.cn/upload_img/00528/000/6fuzhuang-1545121233.png',
        'http://img61.ddimg.cn/upload_img/00670/lz/xvdffy56786-1547209508.jpg',
        'http://img61.ddimg.cn/upload_img/00528/1/8pingtuan-1545285692.png',
        'http://img62.ddimg.cn/upload_img/00528/000/9zhongxin-1545121233.png',
        'http://img62.ddimg.cn/upload_img/00528/000/10qiandao-1545121233.png'
      ],
      hotNew: [
        {txt: '小米旗舰店新年狂欢',type: 1},
        {txt: '笛莎童装狂欢预热',type: 2},
        {txt: '富士苹果特惠',type: 3},
      ],
      guessLike: [
        {
          title: '我喜欢生命本来的样子(周国平经典散文作品集)',
          img: 'http://img3m0.ddimg.cn/28/19/25583410-1_h_3.jpg',
          money: '66.00',
          type: [0, 1, 2] // 0自营 1限时 2拼团 3特惠 4券 5满折
        },{
          title: '尤利西斯（据说世界上只有不到35个人读懂了奇书《尤利西斯》，你想挑战一下吗？人类文学史上的头号奇书！精装珍藏版！）（读客经典文库）',
          img: 'http://img3m0.ddimg.cn/28/30/24198400-1_h_4.jpg',
          money: '6.00',
          type: [2, 3]
        },{
          title: '追风筝的人（2018年新版）',
          img: 'http://img3m5.ddimg.cn/26/14/25238195-1_h_3.jpg',
          money: '16.00',
          type: [0, 5]
        },{
          title: '人生若只如初见：纳兰容若词传',
          img: 'http://img3m5.ddimg.cn/35/31/25808345-1_h_4.jpg',
          money: '46.00',
          type: [4, 5]
        },{
          title: '浮生六记 （汪涵、胡歌推荐，畅销200万册。沈复给芸娘的绝美情书）【果麦经典】',
          img: 'http://img3m7.ddimg.cn/52/5/23751637-1_h_23.jpg',
          money: '96.00',
          type: [1, 2, 5]
        },
      ],
      swiperOption: {
        loop : true,
        autoplay: {
          delay: 3000,//1秒切换一次
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },

    }
  },
  metaInfo() {
    return {
      title: this.title,
      titleTemplate: '%s-vue-meta',
      // meta: [
      //   { charset: 'utf-8' }
      // ],
      // htmlAttrs: {
      //   lang: 'zh'
      // },
      // script: [{
      //   innerHTML: 'console.log("hello hello!")',
      //   type: 'text/javascript'
      // }],
      // __dangerouslyDisableSanitizers: ['script']
    }
  },
  watch:{},
  computed: {
    ...mapState({user: 'user', loading: `loading`, liao: `liao`, index: `index`}),
    ...mapGetters({liaouser: 'user', testModule: 'getTestModule'}),
    swiper() {
      return this.$refs.homeSwiper.swiper
    },
  },
  methods: {
    openTop(){
      this.$toast.top('top');
    },
    openCenter(){
      this.$toast.center('center');
    },
    openBottom(){
      this.$toast('bottom');  // or this.$toast.bottom('bottom');
    },
    openLoading(){
      this.$loading('loading...');
      let self = this;
      setTimeout(function () {
        self.$loading.close();
      }, 2000)
    },
  },
  created(){

  },
  mounted(){
    this.swiper.slideTo(1, 1000, false)
    // setInterval(() => {
    //   this.$$toast('haha')
    // }, 3000)
  },
  destroyed(){

  },
}
</script>

<style lang="scss" scoped>
@import "../variables/var.scss";
.home{
  .swiper-container{
    height: 200px;
    img{
      display: block;
      width: 100%;
    }
  }
  .wrap{
    .bold-banner{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      height: 40px;
      .title{
        z-index: 1;
        font-size: 14px;
      }
      .more{
        display: flex;
        align-items: center;
        .desc{
          font-size: 12px;
        }
      }
    }
    .classify{
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          width: 20%;
          img{
            display: block;
            width: 100%;
          }
        }
      }
    }
    .news{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      img{
        width: 80px;
      }
      .container{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left: 15px;
        .box{
          min-width: 180px;
          li{
            font-size: 12px;
            display: flex;
            align-items: center;
            .flag{
              display: flex;
              border: 1px solid #f23d0a;
              padding: 0 5px;
              border-radius: 4px;
              margin-right: 5px;
              color: #f23d0a;
            }
            .txt{

            }
          }
        }
        .more{
          display: flex;
          align-items: center;
          .desc{
            font-size: 12px;
          }
        }
      }
    }
  }
  .divider-line-box{
    padding: 0 50px;
    .line-box{
      display: flex;
      justify-content: center;
      align-items: baseline;
      .icon-gou{
        margin-right: 5px;
        color: #f3344a;
      }
      .txt{
        font-size: 14px;
      }
    }
  }
  .guessLike{
    display: flex;
    flex-wrap: wrap;
    background: #EFF4FA;
    .wrap{
      width: 49%;
      margin-bottom: 2%;
      background: #fff;
      &:nth-child(2n){
        margin-left: 2%;
      }
      img{
        display: block;
        width: 100%;
      }
      .title{
        font-size: 14px;
        line-height: 15px;
        min-height: 30px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        text-align: left;
        padding: 3px 3px 0;
      }
      .badge{
        padding: 3px 3px 0;
        display: flex;
        .txt{
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #f3344a;
          border: 1px solid #f3344a;
          border-radius: 4px;
          margin-right: 3px;
          height: 16px;
          line-height: 16px;
          div{
            padding: 0 5px;
            &.solid{
              background: #f3344a;
              color: #fff;

            }
          }
        }
      }
      .money{
        text-align: left;
        font-size: 14px;
        color: #f3344a;
        margin-left: 3px;
      }
    }
  }
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
