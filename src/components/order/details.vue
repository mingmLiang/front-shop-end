<!-- 售后详情 -->
<template lang="html">
  <div class="Coupons">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>订单详情</i>
      </span>
    </v-header>
    <section class="wapper grey" v-if="datas">
      <p class="num">订单号：{{datas.order_no}}
        <span class="fr notice" style="margin-right:.24rem;" v-if="datas.tag===1">未付款</span>
        <span class="fr notice" style="margin-right:.24rem;" v-if="datas.tag===2">未发货</span>
        <span class="fr notice" style="margin-right:.24rem;" v-if="datas.tag===3">未收货</span>
        <span class="fr notice" style="margin-right:.24rem;" v-if="datas.tag===4">已完成</span>
      </p>
     <div class="item" v-for="(item, index) in datas.entry" @click="$router.push({ name: '详情页', query: { 'pro_id': item.pro_id }})" >
      <div class="product">
        <div class="imgbox">
          <img :src="item.image.split(';')[0]" alt="">
        </div>
        <div class="info">
          <h3 class="title">{{item.pro_name}}</h3>
          <p class="productNum"><span class="notice">价格：{{item.price}}x{{item.count}}</span>&nbsp;&nbsp;规格：{{item.spe_name}}</p>
        </div>
      </div>
      <p class="floor" v-if="item.courier_num"><span class="title">快递编号:</span>&nbsp;&nbsp;{{item.courier_num}}</p>
      <p class="floor" v-else><span class="title">商品状态:<i class="notice">&nbsp;&nbsp;未发货</i>  </span></p>
      <p class="num notice">订单总金额：{{price}}</p>

      <div class="bottom" v-if="datas.tag===1">
        <v-tags5 @click.native.stop="orderDel()"><span slot="title" >取消订单</span></v-tags5>
        <v-tags2 @click.native.stop="$router.push({ name: '支付方式页', query: { 'orderId': item.order_id }});" ><span slot="title" >立即付款</span></v-tags2>   
      </div>
      <div class="bottom" v-if="datas.tag===2">
       <v-tags5 @click.native.stop="orderDel()"><span slot="title" >取消订单</span></v-tags5>     
      </div>
      <div class="bottom" v-if="datas.tag===3">
        <v-g-bt :name="'confirmGoods'" @click.native.stop='confirmItem=item;'>
          <v-tags2  slot="content"><span slot="title" >确认收货</span></v-tags2>
        </v-g-bt>    
      </div>
     </div>
    </section>
         <v-g-panel :name="'confirmGoods'">
      <div slot="content">
        <div class="confirmGoods">
          <h4>你是否已收到该订单商品？</h4>
          <div class="buttonBox">
            <span @click="close">未收货</span>
            <span @click="confirm">已收货</span>
          </div>
        </div>
      </div>
    </v-g-panel>
      <v-mask></v-mask>

  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Tags5 from '@/common/base/tags/tags5.vue';
import Tags2 from '@/common/base/tags/tags2.vue';
import  { api } from '@/global/siteConfiguration';
import detail from '@/http/mock.js' //模拟数据
import Mask from '@/common/base/mask.vue'
import GBt from '@/common/base/modal/general/bt.vue';
import GPanel from '@/common/base/modal/general/panel.vue';

 export default {
          components:{
          'v-header':Header,
          'v-tags5': Tags5,
          'v-tags2': Tags2,
          'v-g-bt':GBt,
          'v-g-panel': GPanel,
          'v-mask': Mask
        },
        data () {
            return {
              datas:'',
              price:0
            }
        },
        methods: {
       close(){
      $('#mask').trigger('click');
    },
        confirm(){
      // 确认收货
      let this_=this;
      this.$http.post(api.orderStatus2, {'order_id':this.confirmItem.order_id}, function(data){
        this_.$Message.success('收货成功');
        this_.$router.push({ name: '订单列表页'});
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials()); 
    },
        orderDel(){
      // 取消订单
      let this_=this;
      this.$http.post(api.orderDel, {'order_id':this.datas.order_id}, function(data){
          this_.$Message.success('成功取消');
          this_.$router.push({ name: '订单列表页'});
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials()); 

    },

        },
      mounted(){
        let this_=this;
        this.$http.post(api.orderDetail, {'order_id':this.$route.query.order_id}, function(data){
          this_.datas=data.data[0];
          let price=0;
          this_.datas.entry.forEach(function(e,i){
            price+=e.count*e.price;
          });
          this_.price=price;
          }, function(obj){
              console.info('ERROR');
              console.info(obj);
          }, this.$http.withCredentials()); 
      }
    }


</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.bottom{
    position: fixed;
    bottom: 12px;
    text-align: right;
    width: 100%;
}
.confirmGoods{
  color: @color-text1;
  font-family: @font-family-text;
  font-size: @font-size-medium-x;
  h4{
     height: 1.64rem;
    padding-top: .6rem;
    text-align: center; 
  }
  .buttonBox{
    height: .98rem;
    line-height: .98rem;
    font-size: 0;
    span{
      display: inline-block;
      width: 50%;
      font-size: @font-size-medium-x;
      text-align: center;
      .bt(@color-assist3);
      &:last-child{
        background-color: @color-main1;
        color: @color-text3;
        border-radius: .06rem;
      }
    }
  }
}
    .num{
      height: .6rem;
      line-height: .6rem;
      padding-left: .24rem;
      color: @color-text2;
      .bd(@color-assist3);
      font-size: @font-size-small;
      font-family: @font-family-num;
      background: #fff;

    }
.wapper{
  padding-bottom: .24rem;
  .item{
    background-color: #fff;
    margin-top: .2rem;

    .product{
      padding: .2rem .24rem;
      display: flex;
      .bd(@color-assist3);
      .imgbox{
        width: 1.6rem;
        height: 1.6rem;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        .ba(@color-assist3,.06rem);
        img{
          width: 100%;
        }
      }
      .info{
        width: 5.02rem;
        display: inline-block;
        vertical-align: top;
        padding-left: .24rem;
        position: relative;
        .productNum{
          position: absolute;
          bottom: 0;
          font-size: @font-size-medium;
          font-family: @font-family-text;
          color: @color-text2;
        }
        .title{
          font-size: @font-size-medium;
          font-family: @font-family-text;
          color: @color-text1;
          .no-wrap(2);
        }

      }

    }
    .floor{
      padding: 0 .24rem;
      line-height: .66rem;
      position: relative;
      padding-left: 1.45rem;
      font-family: @font-family-text;
      font-size: @font-size-small;
      color: @color-text1;
      height: .66rem;
      .bd(@color-assist3);
      .imgBox_{
        margin-top: .04rem;
        .imgbox{
          display: inline-block;
          width: 1.2rem;
          height: 1.2rem;
          overflow: hidden;
          border-radius: 2px;
          img{
            width: 100%;
          }
        }       
      }

      table{
        margin-top: .66rem;
        font-size: @font-size-small;
        font-family: @font-family-text;
        width: 5.04rem;
        th{
          font-weight: 400;
          color: @color-text2;
        }
        td{
          color: @color-text1;
          text-align: center;

        }
        tr{
          .bd(@color-assist3);
          &:last-child{
            border:none;
          }
        }
      }
      &:last-child{
        border:none;
      }
      span.title{
        line-height: .66rem;
        height: .66rem;
        position: absolute;
        left: .24rem;
        top: 0;
      }
      &.buttonBox{
        height: .88rem;
        line-height: .88rem;
        text-align: right;
        color: @color-text1;
        font-family: @font-family-text;
        font-size: 0;
        i{
          font-size: @font-size-small;
          margin-right: .2rem;
        }
        .tag{
          width: 1.58rem;
          text-align: center;
          height: .48rem;
          line-height: .48rem;
          padding: 0;
          font-size: @font-size-medium;
          margin: 0;
        }
      }
    }
  }
}
</style>
