<template lang="html">
  <p class="tag"><slot name='title'></slot></p>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  @import '../../../assets/fz.less';
.tag{
  display: inline-block;
  font-size: @font-size-small-s;
  color: @color-text1;
  background-color: #fff;
  line-height: @font-size-medium;
  padding: .05rem .08rem;
  margin-right: .12rem;
  .ba(@color-text2,.04rem);
  .extend-click();
  font-family: @font-family-text;
  overflow: hidden !important;
  vertical-align: middle;
  text-overflow:ellipsis; 
  white-space:nowrap; 
  overflow:hidden; 
}
</style>
