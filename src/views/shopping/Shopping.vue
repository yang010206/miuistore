<template>
  <div class="shopping">
    <header>
      <van-nav-bar title="购物车" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </header>
    <div class="box-content-top">
      <p>登录后享更多优惠</p>
      <span @click="btn">去登陆></span>
    </div>
    <div class="content-conter">
      <p>购物车还是空的</p>
      <div class="stroll">去逛逛</div>
    </div>
    <div class="headline">
      <p>猜你喜欢</p>
      <p>实时推荐</p>
    </div>
    <ul>
      <li @click="fn(item)" v-for="item of dataAll" :key="item.id">
        <img :src="item.img" alt="" />
        <p>{{ item.name }}</p>
        <p>{{ item.content }}</p>
        <p>￥{{ item.price }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataAll: []
    };
  },
  methods: {
    //渲染数据
    qq() {
      this.$axios.get("/data/homeGoods.json").then(res => {
        console.log(res);
        this.dataAll = res.data;
      });
    },
    //点击跳转登录页面
    btn() {
      this.$router.push("/mine");
    },
    //点击详情页
    fn(i) {
      this.$store.commit("data", i);
      this.$router.push("particulars");
    }
  },
  created() {
    //数据初始化
    this.qq();
  }
};
</script>
<style lang="less" scoped>
.van-nav-bar {
  background: #f2f2f2;
}
/deep/ .van-nav-bar .van-icon {
  color: #666666;
}
.shopping {
  width: 100%;
  background: #fff;

  .box-content-top {
    width: 100%;
    height: 1.1rem;
    margin-top: 0.84rem;
    line-height: 1.1rem;
    text-indent: 0.5rem;
    position: relative;
    p {
      font-size: 0.35rem;
    }
    span {
      position: absolute;
      right: 0.3rem;
      top: -0.02rem;
      font-size: 0.3rem;
      color: #757575;
    }
  }
  .content-conter {
    width: 100%;
    background: #fff;
    font-size: 0.31rem;
    color: #ababab;
    line-height: 1.14rem;

    p {
      margin-top: -0.05rem;
      float: left;
      margin-left: 1.4rem;
      margin-right: 0.8rem;
      margin-bottom: 0;
    }
    .stroll {
      width: 1.2rem;
      float: left;
      height: 0.4rem;
      border: 0.05rem solid #ababab;
      margin-top: 0.3rem;
      text-align: center;
      line-height: 0.4rem;
      color: black;
    }
  }
  .headline {
    width: 100%;
    height: 1rem;
    text-align: center;
    font-size: 0.26rem;
    overflow: hidden;
    p {
      line-height: 0.1rem;
      margin-top: 0.2rem;
    }
    p:nth-of-type(1) {
      color: #fc8b35;
      font-size: 0.3rem;
    }
  }
  ul {
    width: 100%;
    li {
      width: 49%;
      font-size: 0.35rem;
      display: block;
      float: left;
      margin-right: 0.02rem;
      img {
        width: 100%;
        height: 3rem;
      }
      p:nth-of-type(2) {
        color: #757575;
        font-size: 0.28rem;
      }
      p:nth-of-type(3) {
        color: red;
        font-size: 0.28rem;
      }
    }
  }
}
</style>
