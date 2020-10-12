<template>
  <div class="mine">
    <div class="teatl">
          <p><img src="../../assets/img/1.jpg" alt=""></p>
      <span>15936325579</span>
    </div>
    <div class="teatl_buttom">
      <div class="cent"><p><span class="left">我的订单</span><span class="right">全部订单></span></p> </div>
      <div class="footer_noe">
        <ul>
          <li><img src="../../assets/img/gouwuche.png" alt=""><p>购物车</p></li>
          <li><img src="../../assets/img/icon_A.png" alt=""><p>购物车</p></li>
          <li><img src="../../assets/img/icon-.png" alt=""><p>购物车</p></li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <ul class="footer_halder">
        <li><img src="../../assets/img/xin.png" alt=""> <span class="huiy">会员中心</span><span class="right_g">></span></li>
        <router-link to="Mineds"><li><img src="../../assets/img/dizhi-2.png" alt=""><span class="dizhi">收货地址</span><span class="right_g">></span></li></router-link>
      </ul>
      <ul class="footer_center">
        <li><img src="../../assets/img/wodeyouhuijuan.png" alt=""> <span class="huiy">我的优惠卷</span><span class="right_g">></span></li>
        <li><img src="../../assets/img/icon-test.png" alt=""> <span class="huiy">我的意见</span><span class="right_g">></span></li>
      </ul>
      <ul class="footer_center">
        <li><img src="../../assets/img/shizhong.png" alt=""> <span class="huiy">浏览记录</span><span class="right_g">></span></li>
      </ul>
      <ul class="footer_center">
        <li><img src="../../assets/img/ico.png" alt=""> <span class="huiy">我的名片</span><span class="right_g">></span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="less" scoped>
.mine{
  width: 100%;
  height: 100vh;
  .teatl{
    width: 100%;
    height: 1.4rem;
    background: orange;
    p{
      img{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
      display:inline-block;
      margin-left: 0.2rem;
    }
    span{
      display:inline-block;
      color: #fff;
      line-height: 1.4rem;
      margin-left: 0.1rem;
    }
  }
  .teatl_buttom{
    width: 100%;
    height: 2.55rem;
    background: #fff;
    .cent{
      height: 0.8rem;
      .left{
        float: left;
        font-size: 0.26rem;
        padding: 0.3rem;
      }
      .right{
        float: right;
        font-size: 0.26rem;
        padding: 0.3rem;
      }
        border-bottom: 0.01rem solid #ccc;
      }
    }
    .footer_noe{
      width: 100%;
      ul{
        text-align: center;
        width: 100%;
        display: flex;
        .huiy{
          float: left;
        }
        .right_g{
          float: right;
          margin-right: 0.2rem;
        }
        li{
          width: 33%;
          height: 0.9rem;
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
          background: #fff;
          img{
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }
    .footer{
      width: 100%;
      margin-top: 0.3rem;
      .footer_halder{
        .huiy{
          float: left;
        }
        .right_g{
          float: right;
          margin-right: 0.2rem;
        }
        li{
          background: #fff;
          height: 0.9rem;
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
          line-height: 0.9rem;
          img{
            width: 0.5rem;
            height: 0.5rem;
            float: left;
            margin-right: 0.1rem;
            margin-left: 0.1rem;
            margin-top: 0.2rem;
          }
          span{
            font-size: 0.32rem;
          }
        }
      }
      .footer_center{
        .huiy.dizhi{
          float: left;
        }
        .right_g{
          float: right;
          margin-right: 0.2rem;
        }
        li{
          background: #fff;
          height: 0.9rem;
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
          line-height: 0.9rem;
          img{
            width: 0.5rem;
            height: 0.5rem;
            float: left;
            margin-top: 0.2rem;
            margin-right: 0.1rem;
            margin-left: 0.1rem;
          }
          span{
            font-size: 0.32rem;
          }
        }
      }
    }
  }
</style>
