<template lang="html">
  <p class="icon"><slot name='title'></slot></p>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  @import '../../../assets/fz.less';
.icon{
  display: inline-block;
  font-size: @font-size-small-s;
  color: @color-text3;
  background-color: @color-main2;
  line-height: @font-size-medium;
  border-radius: 50%;
  .ba(@color-main2,50%);
  width: .32rem;
  height: .32rem;
  line-height: .32rem;
  text-align: center;
}
</style>