<template>
<!-- 打开所有分类按钮 -->
<span class="icon icon-chevron-down" @click.stop='showPanel("classes")'></span> 
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
.icon{
    margin: 0;
}


</style>