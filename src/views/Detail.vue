<template lang="html">
<div>
  <v-header class="header" :share=true :iconTheme=false>
    <span slot="title">
      <span class="detailTitle">
        <i :class='{active:0==detailTab}' @click="toggleTabs(0);gotoTarget(0)">商品</i>
        <i :class='{active:1==detailTab}' @click="toggleTabs(1);gotoTarget(1)">详情</i>
      </span>
    </span>
  </v-header>
  <div class="wapper">
    <v-swiper :image=detailProdect.image> </v-swiper>
    <v-chose :detailProdect=detailProdect></v-chose>
    <div class="panelbg">
        <!-- <v-recommend></v-recommend> -->
        <v-interaction :detailProdect=detailProdect></v-interaction>
    </div>
    <v-baseline></v-baseline>
    <v-footer></v-footer>
  </div>
</div>
</template>
<script>


import Header from '@/common/_header.vue';
import Swiper from '@/components/detail/swiper.vue'
import Chose from '@/components/detail/chose.vue'
import Recommend from '@/components/detail/recommend.vue'
import Interaction from '@/components/detail/interaction.vue'
import Footer from '@/components/detail/footer.vue'
import Baseline from '@/common/_baseline.vue'
import detail from '@/http/mock.js' //模拟数据
import  { api } from '@/global/siteConfiguration';

export default {
  components:{
    'v-header':Header,
    'v-swiper':Swiper,
    'v-chose':Chose,
    'v-recommend':Recommend,
    'v-interaction':Interaction,
    'v-footer':Footer,
    'v-baseline':Baseline
  },
  data(){
    return{
      detailTab:0,
      detailProdect:{}
    }
  },
   computed:{
    },
  beforeCreate(){
    if(this.$route.query.pro_id){
        let _this=this;
      // 商品详情信息
        this.$http.get(api.pro_detail, {'pro_id':this.$route.query.pro_id}, function(data){
          _this.detailProdect=data.data[0];
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials());
    }
  },
  methods:{
    toggleTabs(num){
      this.detailTab=num;
    },
    gotoTarget(num){
      if(num===0){
        $(document).scrollTop(0);
      }else if(num===1){
        $(document).scrollTop($('#js-detail').offset().top);
      }
    }
  },
  mounted(){
    let _this=this;
    setTimeout(function(){
      $(window).scroll(function(event) {
        if($('#js-detail').offset()){
          if($(document).scrollTop()>($('#js-detail').offset().top-100)&&$(document).scrollTop()<($('#js-detail').offset().top+$('#js-detail').height())){
            _this.toggleTabs(1);
          }else{
            _this.toggleTabs(0);
          }
        }
      });
    }, 300)

  }
}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
.detailTitle{
  height: .98rem;
  display: inline-block;
  i{
  color: @color-text1;
  display: inline-block;
  font-size: @font-size-medium-x;
  color: @color-text1;
  &:first-child{
    margin-right:.56rem;
  }
  &:last-child{
    margin-left:.56rem;
  }
  &.active{
    position: relative;
    color: @color-main1;

  }
  &.active::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .04rem;
    background:@color-main1;
  }
}
} 
.imgBox{
  padding: .12rem .24rem;
  img{
    width: 100%;
  }
}
  .panelbg{
    background-color:@color-assist4;
    padding-top: .2rem;
  }
</style>
