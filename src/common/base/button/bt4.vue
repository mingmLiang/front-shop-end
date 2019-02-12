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
  background-color: #fff;
  height: .4rem;
  line-height:.4rem;
  border-radius: @font-size-small-s;
  color: @color-main1;
  width: 1.6rem;
  font-size: @font-size-small-s;
  .extend-click();
  text-align: center;
  font-family: @font-family-text;
  .ba(@color-main1,0rem);
}
</style>
