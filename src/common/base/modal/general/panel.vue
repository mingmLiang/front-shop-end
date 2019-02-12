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
    border-radius: .06rem;
    width: 6rem;
    opacity: 0;
    top: 25%;
    left: 50%;
    margin-left: -3rem;
    transition: all .2s;
    transition-delay:0;
    z-index: -1;
    font-size: 0;
    &.show{
    transition-delay:0s;
    opacity: 1;
    visibility: visible;
    z-index: 9999;
    }
}
</style>
