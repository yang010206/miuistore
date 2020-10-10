<template>
  <div id="app">
    <router-view></router-view>
    <taber></taber>
  </div>
</template>
<script>
import Taber from "./components/taber/Taber";
export default {
  components: { Taber }
};
</script>
<style lang="less"></style>
