<template lang="html">
  <ul class="quickbox">
    <li @click="$router.push({name: '订单列表页',query: { type:  1}})">
      <div class="imgbox"></div>
      <div class="title">
         待付款
      </div>
   </li>
   <li @click="$router.push({name: '订单列表页',query: { type:  2}})">
      <div class="imgbox"></div>
      <div class="title">
         待发货
      </div>
   </li>
   <li @click="$router.push({name: '订单列表页',query: { type:  3}})">
      <div class="imgbox"></div>
      <div class="title">
         待收货
      </div>
   </li>
   <li @click="$router.push({name: '订单列表页',query: { type:  4}})">
      <div class="imgbox">
        <slot name='box4_img'></slot>
      </div>
      <div class="title">
          已完成
      </div>
   </li>
<!--    <li @click="$router.push({name: '售后订单列表',query: { type:  5}})">
      <div class="imgbox">
        <slot name='box5_img'></slot>
      </div>
      <div class="title">
         退款/售后
      </div>
   </li> -->
  </ul>
</template>
<script>
  export default {
  }
</script>
<style lang="less" scoped>
  @import '../../assets/fz.less';
.quickbox{
    background-color: #fff;
    border-radius: .06rem;
    width: 100%;
    font-size: 0;
    padding: .38rem 0;
  li{
    vertical-align: top;
    display: inline-block;
    text-align: center;
    width: 25%;
    .title{
      text-align: center;
      display: inline-block;
      .no-wrap(1);
      font-size: @font-size-small;
      font-family: @font-family-text;
      color: @color-text1;
      margin-top: .2rem;
    }
    .imgbox{
      width: .44rem;
      height: .36rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin: 0 auto;
      padding:0 .46rem;
    }
      &:nth-of-type(1){
        .imgbox{
          .bg-image('/images/quick-box01');
        }
      } 
      &:nth-of-type(2){
        .imgbox{
          .bg-image('/images/quick-box02');
        }
      }  
      &:nth-of-type(3){
         .imgbox{
          .bg-image('/images/quick-box03');
        }
      }  
      &:nth-of-type(4){
         .imgbox{
          .bg-image('/images/quick-box04');
        }
      }  
       &:nth-of-type(5){
         .imgbox{
          .bg-image('/images/quick-box05');
        }
      }  
  }

}
</style>
