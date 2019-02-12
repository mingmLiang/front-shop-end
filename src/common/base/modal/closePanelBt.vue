<!-- 关闭面板按钮 -->
<template lang="html">
  <span class=" icon-close closeBt" @click="close"></span>
</template>
<script>
   export default {
        components: {

          },
        data () {
            return {
            }
        },
        methods: {
          close(){
            $('#mask').trigger('click');
          }
        }
    }
</script>
<style lang="less" scoped>
  @import '../../../assets/fz.less';
  .closeBt{
    position: absolute!important;
    right: .24rem;
    top: .3rem;
    z-index: 9999;
  }
</style>
