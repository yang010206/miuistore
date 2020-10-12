<template>
  <div class="classify">
    <div class="header">
      <van-nav-bar title="分类" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div class="contont">
      <div class="contont_left">
        <ul>
          <li
            @click="clickleft(index)"
            :class="index === currentIndex ? 'current' : ''"
            v-for="(item, index) in mobileArr"
            :key="index"
          >
            {{ item.left }}
          </li>
        </ul>
      </div>

      <div class="contont_right" ref="rightLi">
        <div>
          <div
            class="contont_right_one"
            v-for="(item, index) in mobileArr"
            :key="index"
          >
            <div v-for="(item1, index) in item.info" :key="index">
              <div class="contont_top">
                <img :src="item1.title_img" alt="" />

                <p>{{ item1.title }}</p>
              </div>
              <ol class="contont_bottom">
                <li v-for="(item2, index) in item1.list" :key="index">
                  <img :src="item2.img" alt="" />
                  <p>{{ item2.name }}</p>
                </li>
              </ol>
              <div class="span">查看更多</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      mobileArr: [],
      scrollY: 0,
      rightTops: [],
      leftBscroll: null,
      rightBscroll: null
    };
  },

  methods: {
    Getsearchgoods() {
      this.$axios.get("/data/data.json").then(res => {
        console.log(res);
        this.mobileArr = res.data;
      });
    },
    scroll() {
      this.rightBscroll = new BScroll(".contont_right", {
        probeType: 3
      });
      this.leftBscroll = new BScroll(".contont_left", {
        click: true
      });
      console.log(this.leftBscroll);
      this.rightBscroll.on("scroll", pos => {
        this.scrollY = Math.floor(Math.abs(pos.y));
        //console.log(this.scrollY)
      });
    },
    _inrightTops() {
      let lis = this.$refs.rightLi.querySelectorAll(".contont_right_one");
      let topArr = [];
      let top = 0;
      topArr.push(top);
      lis.forEach((item, index) => {
        if (index === lis.length - 1) {
          item.style.paddingBottom = `${window.innerHeight -
            item.clientHeight -
            170}px`;
          this.rightBscroll.refresh();
        }
        top += lis[index].clientHeight;
        topArr.push(top);
      });
      topArr.push(Number.MAX_SAFE_INTEGER);
      this.rightTops = topArr;
      //console.log(topArr)
    },
    _leftroll(i) {
      let leftlis = document.getElementsByTagName("li");
      let el = leftlis[i];
      this.leftBscroll.scrollToElement(el, 300);
    },
    clickleft(i) {
      this.scrollY = this.rightTops[i];
      this.rightBscroll.scrollTo(0, -this.scrollY, 300);
    }
  },
  created() {
    this.Getsearchgoods();
  },
  computed: {
    currentIndex() {
      return this.rightTops.findIndex((item, index) => {
        this._leftroll(index);
        return this.scrollY >= item && this.scrollY < this.rightTops[index + 1];
      });
    }
  },
  watch: {
    mobileArr(val) {
      if (val) {
        this.$nextTick(() => {
          this.scroll();
          this._inrightTops();
        });
      }
    }
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

.contont {
  width: 100%;
  position: absolute;
  top: 0.8rem;
  bottom: 0.9rem;
  display: flex;
  overflow: hidden;

  .contont_left {
    width: 0.7rem;
    height: 10rem;
    background: #fafafa;
    ul {
      height: 12rem;
    }
    li {
      font-size: 0.12rem;
      color: #989898;
      text-align: center;
      line-height: 0.8rem;
      margin: 0.12rem 0;
      position: relative;
      &.current {
        color: red !important;
      }
      &.current:before {
        content: "";
        display: block;
        width: 0.03rem;
        height: 100%;
        background: red;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}
.contont_right {
  flex: 1;
  background: #fff;
  .contont_right_one {
    width: 100%;
    margin: 0.05rem 0;
    .contont_top {
      width: 100%;
      height: 3rem;
      text-align: center;
      img {
        width: 90%;
        height: 1.37rem;
        margin: 0.5rem auto;
      }
      p {
        font-size: 0.3rem;
        color: #999999;
        line-height: 0.29rem;
        text-align: center;
      }
    }
  }
  .contont_bottom {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;

    li {
      width: 0.9rem;
      text-align: center;
      img {
        width: 0.45rem;
        height: 0.44rem;
        margin: 0.03rem auto;
      }
      p {
        font-size: 0.12rem;
        color: #999999;
        text-align: center;
      }
    }
  }
  .span {
    width: 90%;
    height: 0.67rem;
    line-height: 0.67rem;
    background: #f9f5e6;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #aea38d;
    text-align: center;
    margin: 0.2rem auto;
  }
}
</style>
