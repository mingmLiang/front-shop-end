<template lang="html">
  <div>
  <div class="main">
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
import detail from '@/http/mock.js'
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
    this.$http.post(api.activitySection1, {}, function(data){
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
