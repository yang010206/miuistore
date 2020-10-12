<template>
  <div id="big_box">
    <header>
      <div class="header_left"></div>
      <div class="header_right">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </header>
    <!-- nav的照片 -->
    <div class="nav_photo">
      <!-- 下面是首页的轮播图 -->
      <div class="big_photo">
        <div class="swiper-container navlunbo">
          <div class="swiper-wrapper">
            <div
                    class="swiper-slide"
                    v-for="(item, index) in indexInfo"
                    :key="index"
            >
              <img :src="item.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- 手机信息 -->
      <div class="nav_text">
        <ul>
          <li>
            <i class="iconfont icon-youhuiquan"></i>
            <p>icon1</p>
          </li>
          <li>
            <i class="iconfont icon-liulanjilu"></i>
            <p>icon2</p>
          </li>
          <li>
            <i class="iconfont icon-02"></i>
            <p>icon3</p>
          </li>
          <li>
            <i class="iconfont icon-erweima"></i>
            <p>icon4</p>
          </li>
          <li>
            <i class="iconfont icon-jishiben"></i>
            <p>icon5</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 手机的图片和价格 -->
    <div class="phone_info" v-for="(item, index) in indexInfo" :key="index" @click="goInfo(item)">
      <div class="phone_photo">
        <img :src="item.img" alt="" />
      </div>
      <p style="font-size:0.34rem;color:#000;">{{ item.name }}</p>
      <p>{{ item.content }}</p>
      <p style="color:#EA635C;font-size:0.28rem;">￥{{ item.price }}</p>
    </div>
  </div>
</template>

<script>
  import 'swiper/swiper-bundle.css'
  import Swiper from 'swiper/swiper-bundle.js'
  export default {
    data() {
      return {
        //手机信息
        indexInfo: [],
      }
    },
    created() {
      this.getindexinfo()
    },
    watch: {
      indexInfo(info) {
        if (info.length !== 0) {
          this.$nextTick(function() {
            new Swiper('.navlunbo', {
              loop:true,
              autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
              },
            })
          })
        }
      },
    },
    methods: {
      //获取主页的数据
      async getindexinfo() {
        const res = await this.$axios.get('/data/homeGoods.json')
        this.indexInfo = res.data
        console.log(this.indexInfo)
      },
      //跳转详情页的函数
      goInfo(i){
        this.$store.commit("data", i);
        this.$router.push('/phoneinfo',i)
      }

    },

  }
</script>
<style lang="less" scoped>
  p {
    font-size: 0.2rem;
  }
  #big_box {
    width: 100%;
    padding-bottom: 0.9rem;
    overflow: hidden;
  }
  header {
    width: 100%;
    height: 1.5rem;
    background: #f2f2f2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header_left {
      width: 0.8rem;
      height: 0.68rem;
      background: #87ceeb;
      border-radius: 50%;
    }
    .header_right {
      width: 3.8rem;
      height: 0.6rem;
      border-radius: 0.4rem;
      border: 1px solid #ccc;
      text-align: left;
      overflow: hidden;
      line-height: 0.6rem;
      .iconfont {
        font-size: 0.4rem;
        float: left;
        color: #ccc;
        text-indent: 0.2rem;
      }
    }
  }
  //首页轮播图的样式
  .nav_photo {
    width: 100%;
    height: 4rem;
    .big_photo {
      width: 100%;
      height: 4rem;
      background: red;
      .swiper-container {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .nav_text {
      width: 100%;
      height: 1.2rem;
      ul {
        width: 100%;
        height: 100%;
      }
      ul li {
        width: 20%;
        height: 100%;
        text-align: center;
        float: left;
        line-height: 0.4rem;
      }
    }
  }
  .phone_info {
    width: 48%;
    height: 4.52rem;
    margin-left: 1%;
    float: left;
    margin-top: 0.1rem;

    .phone_photo {
      width: 100%;
      height: 3.1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: 0.24rem;
      color: #757575;
      text-indent: 0.2rem;
      margin-top: 0.1rem;
    }
  }
</style>
