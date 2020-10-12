<template>
    <div>
        <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
     
        <router-link to="Mineds"><div class="foos">保存地址</div></router-link>
    </div>
</template>

<script>
import { Toast } from 'vant';
// import area from '../../../assets/js/area.js'
export default {
  data() {
    return {
          areaList:[],
      searchResult: []
     
    };
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },

  },
}
</script>

<style lang="less">
.mines{
    width: 100%;
    height: 1rem;
    background: #e6e6e6;
    img{
        width: 0.5rem;
        float: left;
        margin-top: 0.2rem;
    }
    p{
        text-align: center;
        width: 90%;
        float: left;
        line-height: 0.8rem;
    }
}
.foos{
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