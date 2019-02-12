<template>
  <!-- 加入购物车按钮 -->
  <div class="icon-add"  @click.stop="showPanel('cart')"></div> 
</template>
<script>
    export default {
        data () {
            return {
               
            }
        },
        methods: {
          //显示购物车面板和遮罩层
            showPanel(name){
              $('#mask').addClass('show');
              $('.panel').removeClass('show');
              $.each($('.panel'),function(index, el) {
                if($(el).data('name')===name){
                 $(el).addClass('show');
                }
              });
               
            }
        }
    }
</script>
<style lang="less" scoped>
@import '../../../../assets/fz.less';
  .icon-add{
    position: absolute;
    right: .24rem;
    bottom: .2rem;
    cursor: pointer;
  }   

</style>