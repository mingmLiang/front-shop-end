<template lang="html">
  <p class="button"><slot name='title'></slot></p>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  @import '../../../assets/fz.less';
.button{
  display: inline-block;
  background-color: @color-text2;
  height: .4rem;
  line-height:.4rem;
  border-radius: @font-size-small-s;
  color: @color-text3;
  width: 1.6rem;
  font-size: @font-size-small-s;
  .extend-click();
  text-align: center;
  font-family: @font-family-text;
  box-shadow: .04rem .04rem .1rem #959595;
}
</style>
