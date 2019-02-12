<template lang="html">
  <h1 class="floor-title"><slot name='title'></slot></h1>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  @import '../../../assets/fz.less';
    .floor-title{
      margin: 0 auto;
      height: .86rem;
      line-height: .86rem;
      font-size: .28rem;
      font-family: @font-family-title;
      color: @color-text1;
      position: relative;
      padding-left: .16rem;
      &:before{
        content: '';
        width: .08rem;
        height: .3rem;
        background: @color-main1;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -.15rem;
      }
    }
</style>
