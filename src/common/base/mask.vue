<template>
    <!-- 遮罩层 -->
    <div id="mask" @click="hidden"></div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
         // 隐藏面板和遮罩层 
          hidden(){
            $('#mask').removeClass('show');
            $('.panel').removeClass('show');
          }
        }
    }
</script>
<style lang="less" scoped>
  #mask{
    position: fixed;
    width: 100%;
    max-width: 7.5rem;
    height: 100%;
    top: 0;
    z-index: 10;
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all .4s;
    &.show{
        background-color: rgba(0,0,0,0.6);
        opacity: 1;
        visibility: visible;
    }
  }
</style>