<!-- 购物车面板 -->
<template>
    <div class="panel" data-name="cart">
        <v-closePanelBt></v-closePanelBt>
        <div class="priceBox">
            <p class="imgbox" v-if="productSpec.image">
                <img v-lazy='productSpec.image.split(";")[0]' alt="">
            </p>
            <span>￥{{productSpec.sale_price}}</span> <br>
            <span><i>请选择</i><i>规格</i><i>数量</i></span>
        </div>
        <div class="info">
            <div class="sizeBox">
              <h5>规格</h5>
              <v-tags3 v-for="value in size" @click.native="chooseSize_(value)"><span slot="title">{{value.spe_name}}</span></v-tags3>
            </div>
             <div class="numBox">
                <h5>数量</h5>
                <span class="number">
                    <i @click="decrease" :class="{ disable: (this.number < 2) }">-</i>
                   <input type="text"  v-model.trim.number="number">
                    <i @click="number++;">+</i>
                </span>
            </div>  
        </div>
        <p class="bt js-add-red-car" @click="addIntoCar">
            <v-bt1><span slot="title">加入购物车</span></v-bt1>
        </p>
        <p class="bt" @click="toPay" id="topay-bt" >
            <v-bt1><span slot="title">立即购买</span></v-bt1>
        </p>
    </div>
</template>
<script>
import Tags3 from '../../tags/tags3.vue';
import Bt1 from '../../buttton/bt1.vue';
import ClosePanelBt from '../../modal/closePanelBt.vue';
import  { api } from '@/global/siteConfiguration';

    export default {
        components: {
            'v-tags3': Tags3,
            'v-bt1':Bt1,
            'v-closePanelBt':ClosePanelBt
          },
        data () {
            return {
                image:[],
                number:1,
                size: [],
                chooseSize:null
            }
        },
        watch:{
          productSpec:function(val){
            let this_=this;
            this.image=this.productSpec.image.split(";");
            this.$http.post(api.spec, {'pro_id':this.productSpec.pro_id}, function(data){
                this_.size=data.data;
              }, function(obj){
                  console.info('ERROR');
                  console.info(obj);
              }, this.$http.withCredentials()); 
          },
        },
          computed:{
            userId(){
              // vuex
              return this.$store.state.login.userId
            },
            productSpec(){
              // vuex
              return this.$store.state.category.productSpec
            }
          },
        methods: {
            chooseSize_(val){
                this.chooseSize=val;
            },
          decrease(){
            if(this.number>1){
                this.number--;                
            }
          },
          addIntoCar(){
            if(!this.userId){
                this.$Message.success('请登录！');
                let this_=this;
                setTimeout(function(){
                    this_.$router.push({
                      name: '登录页'
                    })
                },1000);
                return;            }
            if(!this.chooseSize){
                this.$Message.success('请选择商品规格！');
                return;
            }
            const product = [{
                title:this.productSpec.title,
                price:this.productSpec.price,
                size:this.chooseSize,
                col:this.productSpec.imgPath,
                id:this.productSpec.id,
                imgPath:this.productSpec.imgPath,
                choseBool:this.productSpec.choseBool,
                number:this.productSpec.number
              }];
	            let this_=this;
	            //加入购物车
	            this.$http.post(api.addcart, {'pro_id': this.productSpec.pro_id,'user_id':this.userId, 'cart_count':this.number, 'spe_id':this.chooseSize.spe_id}, function(data){
              	this_.$Message.success('加入购物车成功');
              $('#mask').trigger('click');
	            }, function(obj){
	              console.info('ERROR');
	              console.info(obj);
	            }, this.$http.withCredentials()); 
          },
          toPay(){
            const product = [{
                title:this.productSpec.title,
                price:this.productSpec.price,
                size:this.productSpec.size,
                col:this.productSpec.imgPath,
                id:this.productSpec.id,
                imgPath:this.productSpec.imgPath,
                choseBool:this.productSpec.choseBool,
                number:this.productSpec.number
              }];
          }
        }
    }
</script>
<style lang="less" scoped>
@import '../../../../assets/fz.less';

.panel{ 
    position: fixed;
    z-index: 13;
    background: #fff;
    width: 100%;
    max-width: 7.5rem;
    opacity: 0;
    bottom: -7.56rem;
    transition: all .2s;
    transition-delay:0;
    &.show{
    bottom: 0;
    transition-delay:.3s;
    opacity: 1;
    visibility: visible;
    }
    .imgbox{
        width: 1.6rem;
        height: 1.6rem;
        display: inline-block;
        overflow: hidden;
        .ba(@color-assist3,.06rem);
        position: absolute;
        left: .24rem;
        top: -.3rem;
        background: #fff;
        img{
            width: 100%;
        }
    }
    .priceBox{
            padding-left:2.06rem;
            padding-top: .3rem;
            font-size: 0;
            padding-bottom: .52rem;
            .bd(@color-assist3);
            span:nth-of-type(1){
                color:@color-main1;
                font-family: @font-family-num;
                font-size: @font-size-medium-xx;
            }
            span:nth-of-type(2){
                color:@color-text1;
                font-family: @font-family-text;
                font-size: @font-size-medium;
                i{
                    margin-right: .24rem;
                }
            }

        }
    .info{
        padding: 0 .24rem  2rem .24rem;
        h5{
            color:@color-text2;
            font-family: @font-family-text;
            font-size:@font-size-small;
            margin-bottom: .2rem;

        }
        .sizeBox{
            padding-top: .2rem;
            padding-bottom: .38rem;
        }
        .numBox{
            padding-top: .2rem;
            position: relative;
            height: .62rem;
            .number{
                .ba(@color-text2,2px);
                display: inline-block;
                position: absolute;
                right: 0;
                top: .08rem;
                 input{
                    color:@color-text1;
                    font-family: @font-family-num;
                    font-size: @font-size-medium-x;
                    width: .66rem; 
                    text-align: center;
                    vertical-align: middle;
                 }
                 i {
                        color:@color-text1;
                        font-family: @font-family-num;
                        font-size: @font-size-medium-x; 
                        display: inline-block;
                        height:.49rem;
                        text-align: center;
                        width: .5rem;
                        vertical-align: middle;
                        &.disable{
                            color: @color-assist3;
                        }
                        &:first-child{
                            .br(@color-text2);
                        }
                        &:last-child{
                            .bl(@color-text2);
                        }
                    }
                } 

            &:nth-of-type(3){
                font-size: @font-size-medium;  
            }
        }
    }
    .bt{
        height:.98rem;
        line-height:.98rem;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        &#topay-bt{
            display: none;
            &.show{
                display: block;
            }
        }
    }
}

</style>