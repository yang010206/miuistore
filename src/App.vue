<template>
  <div id="app">
    <router-view></router-view>
    <taber v-show="$route.meta.isshow"></taber>
  </div>
</template>
<script>
import Taber from "./components/taber/Taber";
export default {
  components: { Taber }
};
</script>
<style lang="less"></style>
