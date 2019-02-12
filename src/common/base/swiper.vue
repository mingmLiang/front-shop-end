<template lang="html">
<div class="carousel" v-if="datas.image">
  <Carousel autoplay  v-model="value2" :radius-dot=true loop>
  <CarouselItem v-for="(k,index) in datas.image" :key="k">
    <div class="demo-carousel">
      <div>
        <img :src="k" :data-proid="datas.pro_id[index]">
      </div>
    </div>
  </CarouselItem>
</Carousel>
</div>
</template>

<script>
import  { api } from '@/global/siteConfiguration';

export default {
    data() {
      return {
        value2: 0,
        datas:{
          'image':[],
          'pro_id':[]
        }
      }
    },
    methods:{
    },
    mounted() {
      let _this=this;
      this.$http.post(api.adv_one, {'adv_type':'1'}, function(data){
        _this.datas.image=data.data[0].image.split(';');
        _this.datas.pro_id=data.data[0].pro_id.split(';');
      }, function(obj){
          console.info('ERROR');
          console.info(obj);
      }, this.$http.withCredentials());

      // 移动端手指滑动方向控制滚动方向
      let startX, moveEndX, X,direction;
        $(".carousel").on("touchstart",
        function(e) {
          e.preventDefault();
          startX = e.originalEvent.changedTouches[0].pageX;
        });
        $(".carousel").on("touchmove",
        function(e) {
          e.preventDefault();
          moveEndX = e.originalEvent.changedTouches[0].pageX;
          X = moveEndX - startX;
          if (X > 50) {
            direction="right";
          } else if ( X < -50) {
            direction="left";
          } else {
            direction="";
          }
        });
        $(".carousel").on("touchend",
        function(e) {
            e.preventDefault();
            switch (direction) {
              case ("right"):
                $('.ivu-icon-chevron-left').trigger('click');
                break; 
              case ("left"):
                $('.ivu-icon-chevron-right').trigger('click');
                break;
              default:
                _this.$router.push({ name: '详情页', query: { 'pro_id': $(e.target).data('proid') }});
                break;
          }
          direction="";
        });
    }

  }
</script>

<style lang="less" scoped>
div{
  display: inline-block;
  width: 100%;
  img{
    width: 100%;
  }
}
</style>
