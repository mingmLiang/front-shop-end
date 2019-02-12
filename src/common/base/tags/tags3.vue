<template lang="html">
  <p class="tag" @click="add_ac"><slot name='title'></slot></p>
</template>
<script>
   export default {
        data () {
            return {
               
            }
        },
        methods: {
          add_ac(e){
            $(e.target).closest('.tag').parent().find('.active').removeClass('active');
            $(e.target).closest('.tag').addClass('active');
          }
        }
    }
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
  .extend-click();
  font-family: @font-family-text;
  overflow: hidden !important;
  vertical-align: middle;
  text-overflow:ellipsis; 
  white-space:nowrap; 
  overflow:hidden; 
  span{
    .extend-click();
  }
  .ba(@color-text2,.04rem);
  &.active{
    color: @color-main1;
    .ba(@color-main1,.04rem);
  }
}
</style>
