<template lang="html">
  <div class="recipient">
  <p style="margin-bottom: .12rem;">
    <span><slot name='text1'></slot></span>
    <span><slot name='text2'></slot></span>
    <span><slot name='text3'></slot></span>
    <span><slot name='text6'></slot></span>
    </p>
  <p>
    <span><slot name='text4'></slot></span>
    <span><slot name='text5'></slot></span></p>
</div>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  @import '../../assets/fz.less';
  .recipient{
    padding: .2rem .24rem;
    font-size: @font-size-small;
    color: @color-text2;
    .bd(@color-assist3);
    span{
      vertical-align: middle;
    }
    input{
      width: 1.8rem;
      color: @color-text1;
      font-size: @font-size-small;
      vertical-align: middle;
    }
    p:first-child{
      color:@color-text1;
    }
  }

</style>
