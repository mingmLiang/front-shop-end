<!-- 关闭面板按钮 -->
<template lang="html">
  <div class="panel"> 
   <span class="data-panel-name">
      {{name}}
   </span>
    <slot name='content'></slot>
  </div>
</template>
<script>
   export default {
     props:['name'],
        components: {

          },
        data () {
            return {
            }
        },
        methods: {
          
        }
    }
</script>
<style lang="less" scoped>
  @import '../../../../assets/fz.less';
.panel{ 
    position: fixed;
    z-index: 12;
    background: #fff;
    width: 6rem;
    opacity: 0;
    bottom: -25rem;
    left: 0;
    transition: all .2s;
    transition-delay:0;
    font-size: 0;
    width: 100%;
    &.show{
      transition-delay:0s;
      opacity: 1;
      bottom: 0;
      visibility: visible;
    }
}
</style>
