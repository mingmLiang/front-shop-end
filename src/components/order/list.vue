<template lang="html">
<div>
      <ul class="main" v-if="orderList">
        <li v-for="(item, index) in orderList">
        <!-- 待付款 -->
        <div v-if="item.tag==1"  @click="$router.push({name:'订单详情页',query: { 'order_id': item.order_id }});">
            <div class="title clearfix">
            <div class="fl">
              <span class="text"> 订单号：</span>
              <span class="num_">{{item.order_no}}</span>
            </div>
            <div class="fr">
              <span class="text">待付款</span>
            </div>
          </div>
         <v-recipient>
            <span slot="text1" >收件人:</span>
            <span slot="text2" >{{item.send_name}}</span>
            <span slot="text3" >{{item.send_phone}}&nbsp;&nbsp;<span class="fr">{{item.add_time.substring(0,10) }}</span></span>
            <span slot="text4" ><i class="icon-address"></i></span>
            <span slot="text5" >{{item.send_adress}}</span>
          </v-recipient>
          <div class="imgBox">
            <span v-for="k in item.image">
             <img v-lazy="k" alt=""  >
            </span>
          </div>
          <div class="buttonBox">
            <p><span  style="margin-right:.2rem;">共{{item.count}}件商品</span><span class="remind">需付款：￥{{item.price}}</span></p>
            <p>
              <v-tags5 @click.native.stop="orderDel(item)"><span slot="title" >取消订单</span></v-tags5>
              <v-tags2 ><span slot="title" >立即付款</span></v-tags2>
            </p>
          </div>
        </div>


          <!-- 待发货 -->
          <div  v-else-if="item.tag==2"  @click="$router.push({name:'订单详情页',query: { 'order_id': item.order_id }});">
           <div class="title clearfix">
            <div class="fl">
              <span class="text"> 订单号：</span>
              <span class="num_">{{item.order_no}}</span>
            </div>
            <div class="fr">
              <span class="text">待发货</span>
            </div>
          </div>
          <v-recipient>
            <span slot="text1" >收件人:</span>
            <span slot="text2" >{{item.send_name}}</span>
            <span slot="text3" >{{item.send_phone}}&nbsp;&nbsp;<span class="fr">{{item.add_time.substring(0,10) }}</span></span>
            <span slot="text4" ><i class="icon-address"></i></span>
            <span slot="text5" >{{item.send_adress}}</span>
          </v-recipient>
         <div class="imgBox">
            <span v-for="k in item.image">
             <img v-lazy="k" alt=""  >
            </span>
          </div>
          <div class="buttonBox">
            <p><span style="margin-right:.2rem;">共{{item.count}}件商品</span><span>实付款：￥{{item.price}}</span></p>
            <p>
<!--               <v-g-bt :name="'showNum'" @click.native.stop=''>
                <v-tags5 slot="content"><span slot="title">查看数量</span></v-tags5>
              </v-g-bt> -->
              <!-- <v-tags5  @click.native.stop="remind"><span slot="title">提醒发货</span></v-tags5> -->
              <!-- <v-tags5><span slot="title" >联系客服</span></v-tags5> -->
              <v-tags5 @click.native.stop="orderDel(item)"><span slot="title" >取消订单</span></v-tags5>
            </p>
          </div>
        </div>


        <!-- 已发货 -->
        <div v-else-if="item.tag==3"  @click="$router.push({name:'订单详情页',query: { 'order_id': item.order_id }});">
          <div class="title clearfix">
            <div class="fl">
              <span class="text"> 订单号：</span>
              <span class="num_">{{item.order_no}}</span>
            </div>
            <div class="fr">
              <span class="text">已发货</span>
            </div>
          </div>
<!--           <div class="logistics">
            <p>
              <span class="icon-car"></span>
              <span>{{item.logistics}}</span>
              <Icon type="ios-arrow-right"></Icon>
            </p>
          </div> -->
           <v-recipient>
            <span slot="text1" >收件人:</span>
            <span slot="text2" >{{item.send_name}}</span>
            <span slot="text3" >{{item.send_phone}}&nbsp;&nbsp;<span class="fr">{{item.add_time.substring(0,10) }}</span></span>
            <span slot="text4" ><i class="icon-address"></i></span>
            <span slot="text5" >{{item.send_adress}}</span>
          </v-recipient>
          <div class="imgBox">
            <span v-for="k in item.image">
             <img v-lazy="k" alt=""  >
            </span>
          </div>
          <div class="buttonBox">
            <p><span style="margin-right:.2rem;">共{{item.count}}件商品</span><span>实付款：￥{{item.price}}</span></p>
            <p>
              <v-g-bt :name="'confirmGoods'" @click.native.stop='confirmItem=item;'>
                <v-tags2  slot="content"><span slot="title" >确认收货</span></v-tags2>
              </v-g-bt>
            </p>
          </div>
        </div>


        <div  v-else-if="item.tag==4"  @click="$router.push({name:'订单详情页',query: { 'order_id': item.order_id }});">
          <div class="title clearfix">
            <div class="fl">
              <span class="text"> 订单号：</span>
              <span class="num_">{{item.order_no}}</span>
            </div>
            <div class="fr">
              <span class="text">交易成功</span>
            </div>
          </div>
<!--           <div class="logistics">
            <p>
              <span class="icon-car"></span>
              <span>{{item.logistics}}</span>
              <Icon type="ios-arrow-right"></Icon>
            </p>
          </div> -->
          <v-recipient>
            <span slot="text1" >收件人:</span>
            <span slot="text2" >{{item.send_name}}</span>
            <span slot="text3" >{{item.send_phone}}&nbsp;&nbsp;<span class="fr">{{item.add_time.substring(0,10) }}</span></span>
            <span slot="text4" ><i class="icon-address"></i></span>
            <span slot="text5" >{{item.send_adress}}</span>
          </v-recipient>
         <div class="imgBox">
            <span v-for="k in item.image">
             <img v-lazy="k" alt=""  >
            </span>
          </div>
          <div class="buttonBox">
            <p><span style="margin-right:.2rem;">共{{item.count}}件商品</span><span>实付款：￥{{item.price}}</span></p>
            <p>
              <!-- <v-tags2><span slot="title">&nbsp;&nbsp;&nbsp;&nbsp;评价&nbsp;&nbsp;&nbsp;&nbsp;</span></v-tags2> -->
            </p>
          </div>
        </div>
        </li>
      </ul>
      <div v-if="!orderList.length">
        <p class="tips">您没有该类型的订单 -.-</p>
      </div>
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

	</div>
</template>

<script>
import Tags2 from '@/common/base/tags/tags2.vue';
import Tags5 from '@/common/base/tags/tags5.vue';
import Recipient from '@/components/order/recipient.vue';
import GBt from '@/common/base/modal/general/bt.vue';
import GPanel from '@/common/base/modal/general/panel.vue';
import ClosePanelBt from '@/common/base/modal/closePanelBt.vue';
import  { api } from '@/global/siteConfiguration';
import detail from '@/http/mock.js' //模拟数据

export default {
	components: {
    'v-tags2': Tags2,
    'v-tags5': Tags5,
    'v-recipient': Recipient,
    'v-g-bt':GBt,
    'v-g-panel': GPanel,
    'v-closePanelBt':ClosePanelBt
  },
  data(){
    return{
      confirmItem:{}
    }
  },
   methods: {
    orderDel(item){
      // 取消订单
      let this_=this;
      this.$http.post(api.orderDel, {'order_id':item.order_id}, function(data){
          this_.orderList.forEach(function(e,i){
            if(e===item){
              let orderList=this_.orderList;
              orderList.splice(i, 1);
              this_.$store.commit('ORDER_TLIST',orderList);
              this_.$Message.success('成功取消');
            }
          });
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials()); 

    },
    close(){
      $('#mask').trigger('click');
    },
    confirm(){
      // 确认收货
      let this_=this;
      this.$http.post(api.orderStatus2, {'order_id':this.confirmItem.order_id}, function(data){
          this_.orderList.forEach(function(e,i){
            if(e===this_.confirmItem){
              let orderList=this_.orderList;
              orderList.splice(i, 1);
              this_.$store.commit('ORDER_TLIST',orderList);
              this_.$Message.success('收货成功');
              this_.close();
            }
          });
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials()); 
    },
    remind(){
      this.$Message.success('已经提醒卖家发货，请耐心等待！');
    }
  },
  computed:{
    //获取订单列表
    orderList(){
      // vuex
      return this.$store.state.order.orderList
    }
  },
  mounted(){
  }
}
</script>


<style lang="less" scoped>
@import '../../assets/fz.less';
.tips{
    padding: .2rem 0;
    text-align: center;
    letter-spacing: .2vw;
    color:@color-text2;
    font-family: @font-family-title;
    font-weight: 400;
    font-size: @font-size-small-s;
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
.showNum{
  padding: .1rem 0 0 0;
  .title{
    font-size: @font-size-medium-x;
    font-family: @font-family-text;
    color: @color-text1;
    text-align: center;
    padding: .2rem 0;
  }
  ul{
    li{
      line-height: .7rem;
      height: .7rem;
      font-size: .3rem;
      font-family: @font-family-num;
      color: @color-text1;
      padding: 0 .24rem;
      &:last-child{
        line-height: .9rem;
        height: .9rem;
        .bt(@color-assist3);
      }
    }
  }
}
.main{
  background: @color-assist4;
  padding-top: 1.08rem;
  .remind{
    color: @color-main1;
  }
  .logistics{
    padding: .2rem .24rem;
    color: @color-main2;
    font-size: @font-size-small;
    font-family: @font-family-text;
    position: relative;
    .ivu-icon{
      position: absolute;
      right: .24rem;
      color: @color-text1;
      top: 50%;
      font-size: @font-size-small;
      margin-top: -@font-size-small/2;

    }
  }

  
  li{
    margin-top: .2rem;
    background: #fff;
    &:first-child{
      margin-top: 0;
    }
    .buttonBox{
      text-align: right;
      padding: .2rem .24rem .2rem .24rem;
      font-size: @font-size-medium;
      >p:first-child{
        margin-bottom:.2rem;
      }
      .bt{
        margin-right: .1rem;
        .tag{
          margin-right: 0;
        }
      }
      .tag{
        margin-right: .1rem;
      }
    }
    .imgBox{
      padding: .2rem .24rem;
      span{
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        margin-right: .2rem;
        overflow: hidden;
        .ba(@color-assist3,2px);
        img{
          width: 100%;
        }
      }
    .bd(@color-assist3);

    }
  }

  .title{
    padding: .2rem .24rem;
    font-size: 0;
    .bd(@color-assist3);
    span{
      font-size: @font-size-small;
      color: @color-text2;
    }
    .fr{
      .text{
        color: @color-main1;
      }
    }
  }
    .text{
      font-family: @font-family-text;
    }
}

</style>
