<template>
    <div class="phoneinfo">
        <div class="info-top">
           <router-link to="/inde"> <p><img src="../../../assets/img/c4.png" alt=""></p></router-link>
            <img :src="$store.state.obj.img" alt="">
        </div>
        <div class="info-mine">
            <h2>{{$store.state.obj.name }}</h2>
            <p>{{$store.state.obj.info}}</p>
            <h1>￥{{$store.state.obj.price}}</h1>
            <van-cell is-link @click="showPopup">
                已选 小米8屏幕指纹版 6G+128G×1
            </van-cell>
            <van-popup v-model="show">
                暂无选择
            </van-popup>
            <van-cell is-link @click="showPopup">
               北京
            </van-cell>
            <van-popup v-model="show">
                暂无选择
            </van-popup>
        </div>
        <div class="info-header">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" dot />
                <van-goods-action-icon icon="cart-o" text="购物车" badge="0" />
                <van-goods-action-icon icon="shop-o" text="店铺" badge="6" />
                <van-goods-action-button
                        type="danger"
                        text="加入购物车"
                        @click="onClickButton"
                />
            </van-goods-action>
            <img :src="$store.state.obj.info_img[0].img" alt="" />
            <img :src="$store.state.obj.info_img[1].img" alt="" class="aerte" />

        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Popup } from 'vant';
    import { Toast } from 'vant';
    import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
    Vue.use(GoodsAction);
    Vue.use(GoodsActionButton);
    Vue.use(GoodsActionIcon);
    Vue.use(Popup);
    export default {
        name: "Phoneinfo",
        data() {
            return {
                show: false,
                //下边图片的手机图片
                // bottomImg: '',
                // //下边图片的手机文字图片
                // botttomImgTwo: '',
                // topImg: '',
            }
        },

        created() {
          this.indexInfo()
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            onClickIcon() {
                Toast('点击图标');
            },
            onClickButton() {
                Toast('点击按钮');
            },
        },
    }
</script>

<style scoped lang="less">
.phoneinfo{
    width: 100%;
    height: 100vh;
    .info-top{
        width: 100%;
        height:7.04rem;
        background-color: #F6F6F6;
        img{
            width: 100%;
            height: 5.04rem;
            margin-top: 1rem;
        }
        p{
            width: 0.5rem;
            height: 0.5rem;
            position: absolute;
            top: -30px;
            left: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .info-mine{
        width: 100%;
        height: 5.16rem;
        h2{
            width: 96%;
            height: 1rem;
            font-weight: bold;
            font-size: 18px;
            line-height: 1rem;
            margin-left: 15px;
        }
        p{
            width: 6.55rem;
            height: 1rem;
            white-space:normal;
            font-size: 13px;
            margin-left: 15px;
            color: #757575;
        }
        h1{
            width: 96%;
            height: 1rem;
            font-weight: bold;
            font-size: 20px;
            line-height: 1rem;
            color: #FF6700;
            margin-left: 15px;
        }
        van-popup{
            width: 100%;
            height: 3rem;
            background-color: #ffffff;
        }
    }
    .info-header{
        width: 100%;
        height: 16rem;
        position: relative;
        background-color: black;
        z-index: 1000;
        .join{
          position: fixed;
            left: 0;
            top: 620px;
            /*z-index: 1000;*/
        }
        img{
            width: 100%;
            height: 16rem;
        }
    }
}

</style>