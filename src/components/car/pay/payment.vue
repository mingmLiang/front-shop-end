<template lang="html">

  <div class="pay">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>支付方式</i>
      </span>
    </v-header>
    <div class="wapper">
      <p class="floor time">请在24:00:00小时前完成支付.</p>
      <p class="floor price">
        <span>需支付：</span>
        <span>￥{{price}}</span>
      </p>
      <ul>
        <li  @click="payment='weixin'"><span class="text">微信支付</span><span class="icon icon-check" :class="{ 'icon-tochecked': payment!=='weixin' }"></span></li>
        <li  @click="payment='zhifubao'"><span class="text">支付宝支付</span><span class="icon icon-check" :class="{ 'icon-tochecked': payment!=='zhifubao' }"></span></li>
      </ul>
      <p class="confirmBt" @click="topay()">确认支付</p>
    </div>
  </div>
</template>

<script>
import Util from '../../../util/common'
import Header from '@/common/_header.vue'
import Recipient from '@/components/order/recipient.vue';
import  { api } from '@/global/siteConfiguration';

export default {
  components: {
    'v-header': Header

  },
  data() {
    return{
      payment:'weixin',
      price:0
    }
  },
  mounted() {
    $('.wapper').css('min-height',$(window).height());
    //获取订单金额
    let this_=this;
        this.$http.get(api.order_price, {'order_id':this.$route.query.orderId}, function(data){
         this_.price=data.data.price;
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials());

  },
  computed: {

  },

  methods: {
    topay(){
      let  this_=this;
      this.$http.post(api.order_pay, {
        'order_id':this.$route.query.orderId,
        'payment':this.payment
      },
      function(data) {
        this_.$Message.success(data.msg);
      },
      function(obj) {
          console.info('ERROR');
          console.info(obj);
      },
      this.$http.withCredentials());
    }
  }

}
</script>

<style lang="less" scoped>
@import '../../../assets/fz.less';
.wapper{
  background: @color-assist4;
  ul{
    background: #fff;
    li{
      padding: .32rem .24rem;
      position: relative;
      .bd(@color-assist3);
      &:last-child{
        border:none;

      }
      .text{
        font-size: @font-size-medium;
        font-family: @font-family-text;
      }
      .icon{
        position: absolute;
        right: .24rem;
        display: inline-block;
      }
    }
  }
  .floor{
    margin-bottom: .2rem;
    padding: 0 .24rem;
    background: #fff;
  }
  .time{
    background: #fe7a7b;
    color:@color-text3;
    font-size: @font-size-small;
    font-family: @font-family-text;
    padding: .32rem 0 .28rem 0;
    text-align: center;
  }
  .price{
    padding-top: .34rem;
    padding-bottom: .34rem;
    font-size: @font-size-medium;
    font-family: @font-family-text;
    text-align: right;
    color: @color-main1;
  }
  .confirmBt{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: .98rem;
    color: @color-text3;
    background: @color-main1;
    text-align: center;
    line-height: .98rem;
    font-size: @font-size-medium-xx;
    font-family: @font-family-text;
    max-width: 750px;
  }
}
</style>
