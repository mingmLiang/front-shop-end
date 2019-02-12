<template>
<!-- 打开通用面板按钮 -->
<div class="bt" @click="showPanel">
  <slot name='content'></slot>
</div>
</template>
<script>
    export default {
       props:['name'],
        data () {
            return {
            }
        },
        methods: {
            showPanel(e){
              $('#mask').addClass('show');
              $('.panel').removeClass('show');
              let _this=this;
              $.each($('.panel'),function(index, el) {
                let data_panel_name=$(el).find('.data-panel-name').text().trim();
                if(data_panel_name==_this.name){
                  $(el).addClass('show')
                }
              });
            }
        }
    }
</script>
<style lang="less" scoped>
.bt{
  display: inline-block;
}
</style>