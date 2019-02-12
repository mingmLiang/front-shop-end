<template lang="html">
    <Carousel autoplay v-model="value1" loop class="detailSwiper" v-if="image">
        <CarouselItem  v-for="(i,index) in image.split(';')"  v-if="index<5">
            <div class="demo-carousel"><img :src="i"></div>
        </CarouselItem>
      </div>
    </Carousel>
</template>
<script>
    export default {
        props: ["image"],
        data () {
            return {
                value1: 0
            }
        }, 
      computed:{
        swiper(){
            return this.$store.state.detail.productDatas.swiper
        }
      },
    mounted() {
      // 移动端手指滑动方向控制滚动方向
      let startX, moveEndX, X,direction;
      let _this=this;
        $(".detailSwiper").on("touchstart",
        function(e) {
          e.preventDefault();
          startX = e.originalEvent.changedTouches[0].pageX;
        });
        $(".detailSwiper").on("touchmove",
        function(e) {
          e.preventDefault();
          moveEndX = e.originalEvent.changedTouches[0].pageX;
          X = moveEndX - startX;
          if (X > 50) {
            direction="right";
          } else if ( X < 50) {
            direction="left";
          } else {
            direction="";
          }
        });
        $(".detailSwiper").on("touchend",
        function() {
            switch (direction) {
              case ("right"):
                $('.ivu-icon-chevron-left').trigger('click');
                break;
              case ("left"):
                $('.ivu-icon-chevron-right').trigger('click');
                break;
              default:
                break;
          }
        });
    }
    }
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.detailSwiper{
  img{
    width: 100%;
  }
}

</style>
