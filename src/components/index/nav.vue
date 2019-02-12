<template lang="html">
  <ul class="nav_ clearfix" v-if="list.length">
    <li v-for="(item, index) in list" @click="num=index;$router.push({ name: '分类页', params: { 'userid': 123 }})" :class="{ active: num===index }" class="js-order-nav"><span>{{item.label}}</span></li>
  </ul>
</template>
<script>
  import detail from '@/http/mock.js' //模拟数据
  import  { api } from '@/global/siteConfiguration';
  export default {
  data() {
    return {
      num:0,
      list:[]
    }
   },
   methods:{
   },
    mounted(){
      // 获取导航栏信息
        let _this=this;
        this.$http.get(api.indexNav, {}, function(data){
          _this.list=data.data.list;
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials());  
    },
    watch:{
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
  position: fixed;
  &when (@siteConfiguration = 'hisant'){
    top:.88rem;
  }
  li{
    font-family: @font-family-text;
    font-size: @font-size-medium-x;
    color: @color-text1;
    float: left;
    width: 16.666%;
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