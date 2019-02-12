<template lang="html">
  <div>
  <div class="main">
      <div class="couponsBox">
        <div class="clearfix coupons-floor01">
          <div class="fl info clearfix">
            <p class="fl">
              <span class="num">50</span>
              <span class="subtitle">满800可用</span>
            </p>
            <div class="text fl">
              <p>此区域内美赞臣，婴幼儿产品参加满减活动</p>
              <p>有效期:2017.10.12-12.16</p>
            </div>
          </div>
          <div class="fr button">
            <span>立即<br>领取</span>
          </div>
        </div>
        <div style="text-align:left;width:7.02rem;" class="clearfix">
          <div class="clearfix coupons-floor02 fl">
            <div class="fl info clearfix">
              <div class="top clearfix">
                <p class="num fl">50</p>
                <p class="text fl">
                  <span>满800可用</span>
                  <span class="unnotice time">11.10-11.17</span>
                </p>
              </div>
              <p class="bottom">此区域内产品专用</p>
            </div>
            <div class="fl button">
              <span>立即<br>领取</span>
            </div>
        </div>
          <div class="clearfix coupons-floor02 fr">
            <div class="fl info clearfix">
              <div class="top clearfix">
                <p class="num fl">50</p>
                <p class="text fl">
                  <span>满800可用</span><br>
                  <span class="unnotice time">11.10-11.17</span>
                </p>
              </div>
              <p class="bottom">此区域内产品专用</p>
            </div>
            <div class="fl button">
              <span>立即<br>领取</span>
            </div>
        </div>
        </div>
      </div>
      <div class="item" v-for="(item,i) in productList" :value="item.id" :key="item.id" @click="$router.push({ name: '详情页', params: { 'productid': item.id }})" >
        <div>
          <div class="imgBox">
              <img v-lazy="item.img" alt="">
              <!-- 热卖标签 -->
              <v-hot1></v-hot1>
          </div>
        </div>
          <div class="info">
            <h2 class="title">{{item.name}}</h2>
            <p class="tagsBox"  v-if="item.label">
              <v-tags1 v-for="(item_,i) in item.label" :value="item_" :key="item_" v-if="show(item_,'段')"><span slot="title" >{{item_}}</span></v-tags1>
              <v-tags1><span slot="title" >{{item.BrandName}}</span></v-tags1>
            </p>
            <p class="priceBox">
              <span>￥</span>
              <span>{{item.UnitPrice}}<!-- <i>.56</i> --></span>
              <span>{{item.subtitle}}</span>
            </p>
            <div class="tagsBox" v-if="item.label">
              <div v-for="(item_,i) in item.label" :value="item_" :key="item_">
                <v-tags4 v-if="show(item_,'赠品')"><span slot="title">{{item_}}</span></v-tags4>
                <span v-else-if="show(item_,'段')"></span>
                <v-tags2 v-else><span slot="title" >{{item_}}</span></v-tags2>                
              </div>
              
              <v-tags1><span slot="title" >{{item.delivery}}发货</span></v-tags1>
            </div>
            <!-- 加入购物车按钮 -->
            <v-addbt></v-addbt>
          </div>
    </div>
  </div>
  <!-- 加入购物车弹出面板 （一个页面只可以有一个）-->
  <v-panelcart class="listpanelcart"></v-panelcart>
</div>
</template>

<script>
import Tags1 from '@/common/base/tags/tags1.vue';
import Tags2 from '@/common/base/tags/tags2.vue';
import Tags4 from '@/common/base/tags/tags4.vue';
import Hot1 from '@/common/base/hot/hot1.vue';
import Addbt from '@/common/base/modal/cart/bt.vue';
import  { api } from '@/global/siteConfiguration';
import detail from '@/http/mock.js' //模拟数据
import Panelcart from '@/common/base/modal/cart/panel.vue';


export default {
  data(){
    return {
      item:'',
      productList:''
    }
  },
  components: {
    'v-tags1': Tags1,
    'v-tags2': Tags2,
    'v-tags4': Tags4,
    'v-addbt': Addbt,
    'v-hot1': Hot1,
    'v-panelcart': Panelcart,

  },
  computed:{
  },
  methods:{
  show(item_,str){
      if(item_.toString().indexOf(str)==-1){
        return false;
      }else{
        return true;
      }
    }
  },
  mounted(){
    let this_=this;
    //获取特价专区数据
    this.$http.post(api.activitySection3, {}, function(data){
      this_.productList=data.data;
    }, function(obj){
      console.info('ERROR');
      console.info(obj);
    }, this.$http.withCredentials()); 
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
    .listpanelcart{
      z-index: 17 !important;
    }
.main {
  display: block;
  font-size: 0;
  padding:  1rem 0 0 0;
  background-color: #fff;
  .couponsBox{
    text-align: center;
    width: 100%;
    background-color: @color-assist4;
    margin-bottom: .2rem;
    .coupons-floor01{
       .bg-image('/images/coupons-bg');
       width: 7.02rem;
       height: 1.34rem;
       background-size: cover;
       margin-top: .2rem;
       .button{
        color: @color-text3;
        font-family: @font-family-text;
        margin-top: .16rem;
        span{
          font-size: @font-size-large; 
          display: inline-block;
          height: 100%;
          width: 100%;
        }
       }
      .info{
        width: 5.42rem;
        padding: 0 .28rem;
        text-align: left;
        height: 100%;
        >p,>div{
          display: inline-block;
        }
        .num{
          font-size: .9rem;
          color: @color-main1;
          font-family: @font-family-num;
          line-height: .9rem;
          height: .9rem;
          overflow: hidden;
          display: block;
          margin-top: .08rem;
        }
       .subtitle{
        color: @color-text3;
        background-color: @color-main1;
        font-size: @font-size-small-s;
        font-family: @font-family-text;
        display: inline-block;
        border-radius: .02rem;
        width: 1.2rem;
        height: .28rem;
        line-height: .28rem;
        text-align: center;

       } 
       .text{
          font-family: @font-family-text;
          width: 3.3rem;
          margin-left: .28rem;
          padding-top: .1rem;
          height: 100%;
          position: relative;
          p{
            &:first-child{
              font-size: @font-size-medium;
              color: @color-text1;
              .no-wrap(2);
            }
            &:last-child{
              color: @color-text2;
              font-size: @font-size-small-s;
              position: absolute;
              bottom: .1rem;
              .no-wrap(1);
            }
          }
       }
      }
      .button{
        width: 1.6rem;
      }      
    }
    .coupons-floor02{
       .bg-image('/images/coupons-bg-01');
       width: 3.46rem;
       height: 1.34rem;
       background-size: cover;
       margin-top: .2rem;
       .info{
        padding: 0 0 0 .1rem;
        width: 2.6rem;
          .top{
            .time{
              position: absolute;
              width: 2rem;
              left: 1.2rem;
              font-size: @font-size-small-s;
              font-family: 'sf pro text light';
            }
            .num{
              font-size: .9rem;
              color: @color-main1;
              font-family: @font-family-num;
              line-height: .9rem;
              height: .9rem;
              overflow: hidden;
              display: block;
              margin-top: .05rem;
              margin-right: .1rem;
            }
            .text{
              font-size: @font-size-small-s;
              color: @color-main1;
              font-family: @font-family-text;
              margin-top: .18rem;
              width: 1.3rem;
              overflow: hidden;
              font-size: 0;
              height: .76rem;
              span{
                .no-wrap(1);
                font-size: 0.22rem;

              }
            }
          }
          .bottom{
            font-family: @font-family-text;
            color: @color-text2;
            font-size: @font-size-small-s;
            text-align: center;
            width: 100%;
          }
       }
        .button{
          color: @color-text3;
          font-family: @font-family-text;
          margin-top: .16rem;
          width: .85rem;
          text-align: center;
          span{
            font-size: @font-size-large; 
            display: inline-block;
            height: 100%;
            width: 100%;
          }
        }
      
    }
  }
  .item{
    width: 7.5rem;
    overflow: hidden;
  }
  div>a{
       width: 7.5rem;
    overflow-x: hidden; 
  }
  div,a{
    display: inline-block;
  }
  .imgBox{
    margin-top: .24rem;
    width: 2.24rem;
    font-size: 0;
    vertical-align: text-bottom;
    position: relative;
    
    img{
        width: 100%;
    }
  }
  .info{
    width: 5.26rem;
    padding: 0 .24rem .2rem .24rem;
    vertical-align: top;
    position: relative;
    .title{
      margin:.24rem 0 0 0;
      color: @color-text1;
      font-family: @font-family-text;
      font-size: @font-size-medium-x;
      .no-wrap(2);
      height: .7rem;
      line-height: .36rem;
    }
    .tagsBox{
      font-size: 0;
      margin-top: .05rem;
      >div{
        display: inline-block;
      }
    }
    .priceBox{
      margin-top: .07rem;
      font-family:@font-family-num;
      font-size:0;
      span:first-child{
         font-size:.25rem;
         color: @color-main1;
         margin-right: .1rem;
      }
      span:nth-of-type(2){
        font-size:.38rem;
        color: @color-main1;
        margin-right: .14rem;
        i{
          font-size: .20rem;
        }
      }
      span:nth-of-type(3){
        font-size: @font-size-small-s;
        color: @color-text2;
      }
    }
  }
}

</style>
