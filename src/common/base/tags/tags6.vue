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
  color: #eb4043;
  background-color: #feeeec;
  line-height: @font-size-medium;
  padding: .05rem .08rem;
  border-radius: .04rem;
  margin-right: .12rem;
  font-family: @font-family-text;
  .extend-click();
  overflow: hidden !important;
  vertical-align: middle;
  text-overflow:ellipsis; 
  white-space:nowrap; 
  overflow:hidden;  
}
</style>
