<template lang="html">
  <ul class="nav_ clearfix">
    <li v-for="(item, index) in list" @click="num=index" :class="{ active: num===index }"><span>{{item.label}}</span></li>
  </ul>
</template>
<script>
  import detail from '@/http/mock.js' //模拟数据
  export default {
  props:['api'],
  data() {
    return {
      num:0,
      list:[]
    }
  },
    
    mounted(){
    },
    watch:{
      api:function(){
        let _this=this;
        this.$http.get(this.api, {}, function(data){
          _this.list=data.data.list;
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials());   
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/fz.less';
.nav_{
  height: .88rem;
  line-height: .88rem;
  background: #fff;
  width: 7.5rem;
  overflow: hidden;
  position: static;
  li{
    font-family: @font-family-text;
    font-size: @font-size-medium-x;
    color: @color-text1;
    float: left;
    width: 16.5%;
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
