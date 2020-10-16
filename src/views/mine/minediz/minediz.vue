<template>
  <div class="mineDz">
    <div class="mines">
      <router-link to="Mine"
        ><img src="../../../assets/img/zuo.png" alt=""
      /></router-link>
      <p>收货地址</p>
    </div>
    <div class="centers">
      <div class="centers_content">
        <div class="content_sonts">
          <div class="sonts_top">
            <span class="geps">诸葛青牛</span>
            <span>131****2165</span>
            <span>删除</span>
          </div>
          <div class="sonts_buttom">
            <div class="buttoms">
              <span>北京 北京市 顺义区</span>
              <p>居馨花园1号楼，1单元，1201</p>
            </div>
            <img src="../../../assets/img/you.png" alt="" />
          </div>
        </div>
      </div>
      <div class="centers_content">
        <div class="content_sonts">
          <div class="sonts_top">
            <span class="geps">欧阳拴住</span>
            <span>131****2165</span>
            <span>删除</span>
          </div>
          <div class="sonts_buttom">
            <div class="buttoms">
              <span>北京 北京市 顺义区</span>
              <p>居馨花园3号楼，1单元，1801</p>
            </div>
            <img src="../../../assets/img/you.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <router-link to="sioeps"><div class="footers">新增地址</div></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.mineDz {
  width: 100%;
  height: 100vh;
}
.mines {
  width: 100%;
  height: 1rem;
  background: #e6e6e6;
  img {
    width: 0.5rem;
    float: left;
    margin-top: 0.2rem;
  }
  p {
    text-align: center;
    width: 90%;
    float: left;
    line-height: 0.8rem;
  }
}
.centers {
  width: 90%;
  margin: auto;
  .centers_content {
    width: 100%;
    height: 2rem;
    border: 1px solid #e2e2e2;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    .content_sonts {
      width: 90%;
      height: 100%;
      margin: auto;
      .sonts_top {
        width: 100%;
        height: 50%;
        border-bottom: 1px solid #ccc;
        span {
          padding: 0.5rem;
          line-height: 1rem;
        }
        .geps {
          color: #ff7d00;
        }
      }
      .sonts_buttom {
        width: 100%;
        height: 50%;
        img {
          width: 0.5rem;
          float: right;
          margin-top: 0.3rem;
        }
        .buttoms {
          width: 80%;
          height: 100%;
          float: left;
          span {
            line-height: 0.6rem;
            display: inline-block;
            margin-left: 0.5rem;
            font-size: 0.26rem;
          }
          p {
            display: inline-block;
            font-size: 0.26rem;
            margin-left: 0.5rem;
          }
        }
        .geps {
          color: #ff7d00;
        }
      }
    }
  }
}
.footers {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 1rem;
  background: orangered;
  text-align: center;
  line-height: 1rem;
  color: #fff;
}
</style>
