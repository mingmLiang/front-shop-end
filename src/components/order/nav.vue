<template lang="html">
  <ul class="nav_ clearfix" v-if="list.length">
    <li v-for="(item, index) in list" @click="num=index;getOrderList(index+1)" :class="{ active: num===index }" class="js-order-nav"><span>{{item}}</span></li>
  </ul>
</template>
<script>
  import  { api } from '@/global/siteConfiguration';
  export default {
  data() {
    return {
      num:0,
      list:['待付款','待发货','待收货','已完成'],
    }
   }, 
   methods:{
    getOrderList(type){
        let _this=this;
        // 获取订单列表
        this.$http.post(api.orderList, {'tag':type,'user_id':sessionStorage.getItem("qtt_user_id")}, function(data){
          _this.$store.commit('ORDER_TLIST',data.data);
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials());   
    }
   },
    mounted(){
      if(!this.$route.query.type){
        this.num= 0;
        this.getOrderList(1);
      }else{
        this.num= this.$route.query.type-1;
        this.getOrderList(this.$route.query.type);        
      }

    },
    watch:{
      list:function(){
          setTimeout(function(){
          $($('.js-order-nav')[0]).trigger('click');
        }, 300);
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../assets/fz.less';
.nav_{
  height: .88rem;
  line-height: .88rem;
  z-index: 999;
  background: #fff;
  width: 7.5rem;
  overflow: hidden;
  li{
    font-family: @font-family-text;
    font-size: @font-size-medium-x;
    color: @color-text1;
    float: left;
    width: 25%;
     white-space: nowrap;
    text-align: center;
    height: 100%;
    span{
      position: relative;
      display: inline-block;
      height: 100%;
      padding: 0 .12rem;
      .no-wrap(1);

    }
    &.active span::after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: .04rem;
      background: #ee3f43;
    }
  }
}
</style>