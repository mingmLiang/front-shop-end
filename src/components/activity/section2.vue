<template lang="html">
  <div>
  <div class="main Activitysection2">
    <div class="titleTop clearfix">
      <div class="fl">秒杀进行中</div>
      <div class="fr"><span class="tips">距离结束</span><span class="countdown"><i class="num">02</i><i>:</i><i class="num">02</i><i>:</i><i class="num">02</i></span></div>
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
          </div>
          <!-- 立即秒杀 -->
          <div class="seckillBox">
            <span class="button">立即秒杀</span>
            <div class="progressBox">
              <Progress :percent="25" :hide-info="true"></Progress>
              <p class="tips">80%</p>
            </div>  
            
          </div>
    </div>
  </div>
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
    'v-hot1': Hot1

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
    this.$http.post(api.activitySection2, {}, function(data){
      this_.productList=data.data;
    }, function(obj){
      console.info('ERROR');
      console.info(obj);
    }, this.$http.withCredentials()); 
  }
}
</script>

<style lang="less">
@import '../../assets/fz.less';
.listpanelcart{
  z-index: 17 !important;
}
.main.Activitysection2{
  display: block;
  font-size: 0;
  padding:  1rem 0 0 0;
  background-color: #fff;
  .titleTop{
    height: .88rem;
    line-height: .88rem;
    background-color: @color-assist4;
    width: 100%;
    padding: 0 .24rem;
    font-family: @font-family-text;
    .fl{
      font-size: @font-size-medium-x;
      color: @color-main1;
    } 
    .fr{
     .tips{
       font-size: @font-size-small-s;
       color: @color-text2;
       margin-right: .1rem;
      }      
     .countdown{
        i{
          font-family: @font-family-num;
          &.num{
            display: inline-block;
            width: .36rem;
            height: .36rem;
            line-height: .36rem;
            text-align: center;
            border-radius: .06rem;
            background-color: @color-text1;
            color: @color-text3;
            font-size: @font-size-small-s;
            margin: 0 .06rem;
          }
          font-size: @font-size-small-s;
          color: @color-text1;
        }
      }
    }

  }
  .item{
    width: 7.5rem;
    overflow: hidden;
    position: relative;
    .seckillBox{
      position: absolute;
      bottom: .2rem;
      width: 1.4rem;
      right: .24rem;
      z-index: 1;
      .button{
        display: inline-block;
        width: 100%;
        height: .58rem;
        line-height: .58rem;
        color: @color-text3;
        background-color: @color-main1;
        font-size: @font-size-medium;
        font-family: @font-family-text;
        text-align: center;
        border-radius: .06rem;
        margin-bottom: .1rem;
        z-index: 1;
      }
      .progressBox{
        display: inline-block;
        width: 1.4rem;
        position: relative;
        .tips{
          color: @color-main1;
          position: absolute;
          right: 0;
          font-size:.2rem;
          font-family: @font-family-num;
          top:-.05rem;
        }
        .ivu-progress-outer{
          .ba(@color-main1,.1rem);
            height: auto;
            line-height: normal;
            height:.22rem !important;
            overflow: hidden;

          .ivu-progress-inner{
            background-color: #fff;
            height: auto;
            line-height: normal;
            height:.2rem !important;
            vertical-align: top;
            .ivu-progress-bg{
              background-color: #ff7477;
              padding: 0;
              margin: 0;
              border-radius:0;
              height:.5rem !important;
            }
          }
        }        
      }

    }
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
    .bd(@color-assist3);
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
