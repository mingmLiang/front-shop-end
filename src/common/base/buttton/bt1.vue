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
  width: 100%;
  font-size: @font-size-medium-xx;
  color: @color-text3;
  font-family: @font-family-text;
  background-color: @color-main1;
  height: 100%;
  text-align: center;

}
</style>
