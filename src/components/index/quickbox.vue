<template lang="html">

  <div class="quickbox">
    <ul>
      <li @click="$router.push({name: '分类页'})"><p class="imgBox"></p><p class="title">全部分类</p></li>
      <li @click="$router.push({name: '品牌授权页'})"><p class="imgBox"></p><p class="title">品牌授权</p></li>
      <li @click="$router.push({name: '优惠专区页'})"><p class="imgBox"></p><p class="title">活动中心</p></li>
      <li @click="$router.push({name: '领券中心'})"><p class="imgBox"></p><p class="title">领券中心</p></li>
    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  .quickbox {
    &when (@siteConfiguration = 'iyangtao'){
      .bd(@color-assist3); 
    }
    ul {
      margin: 0 auto;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-around;
      padding: .32rem 0; 
      &when (@siteConfiguration = 'hisant'){
         padding: .3rem 0; 
      }
      li {
        align-items: center;
        width: 25%;
        text-align: center;
        color: @color-text1;
        font-size: @font-size-small;
        font-family: @font-family-text;
        .imgBox{
          display: block;
          width: .88rem;
          height: .88rem;
          margin: 0 auto;
          background-size: cover;
        }
        &:first-child{
          .imgBox{
            .bg-image('/images/imgta01');            
          }
        }
        &:nth-of-type(2){
          .imgBox{
            .bg-image('/images/imgta02');            
          }
        }
        &:nth-of-type(3){
          .imgBox{
            .bg-image('/images/imgta03');            
          }
        }
        &:nth-of-type(4){
          .imgBox{
            .bg-image('/images/imgta04');            
          }
        }
        .title{
          margin-top: .2rem;
          &when (@siteConfiguration = 'hisant'){
             color: @color-assist2;
             font-size: @font-size-medium;
             font-family: @font-family-text-s;
          }
        }
       
      }
    }
  }

</style>
