<template>
  <div class="taber">
    <van-tabbar v-model="active">
      <router-link :to="{ path: '/inde' }"
        ><van-tabbar-item icon="wap-home-o">首页</van-tabbar-item></router-link
      >
      <router-link :to="{ path: '/classify' }"
        ><van-tabbar-item icon="apps-o">分类</van-tabbar-item></router-link
      >
      <router-link :to="{ path: '/shopping' }"
        ><van-tabbar-item icon="shopping-cart-o"
          >购物车</van-tabbar-item
        ></router-link
      >
      <router-link :to="{ path: '/mine' }"
        ><van-tabbar-item icon="user-o">个人</van-tabbar-item></router-link
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="less" scoped>
.van-tabbar {
  display: flex;
  justify-content: space-around;
}
</style>
