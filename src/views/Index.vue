<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <v-header></v-header>
      <!-- <v-nav></v-nav> -->

    <div class="wapper">
      <v-swiper></v-swiper>
      <!-- <v-quickbox></v-quickbox> -->
      <v-advertising></v-advertising>
      <v-section1></v-section1>
      <!-- <v-section2></v-section2> -->
      <!-- <v-section6 :api="api.indexSection7"></v-section6> -->
      <!-- <v-section3 :api="api.indexSection3"></v-section3> -->
      <!-- <v-section5 :api="api.indexSection8"></v-section5> -->
      <!-- <v-section4 :api="api.indexSection4"></v-section4> -->
      <!-- <v-section4 :api="api.indexSection5"></v-section4> -->
      <!-- <v-section4 :api="api.indexSection6"></v-section4> -->
    </div>
    <v-footer :num="1"></v-footer>
    <v-mask></v-mask>
  </div>
</template>

<script>
import Header from '@/components/index/header.vue'
import Swiper from '@/common/base/swiper.vue'
import Quickbox from '@/components/index/quickbox.vue'
import Advertising from '@/components/index/advertising.vue'
import Section1 from '@/components/index/section1.vue'
import detail from '@/http/mock.js' //模拟数据

// import Section2 from '@/components/index/section2.vue'
// import Section3 from '@/components/index/section3.vue'
// import Section4 from '@/components/index/section4.vue'
// import Section5 from '@/components/index/section5.vue'
// import Section6 from '@/components/index/section6.vue'
import Footer from '@/common/_footer.vue'
// import Nav from '@/components/index/nav.vue'
import Mask from '@/common/base/mask.vue';
import  { api } from '@/global/siteConfiguration';

export default {
  components: {
    'v-header': Header,
    'v-swiper': Swiper,
    'v-quickbox': Quickbox,
    'v-advertising': Advertising,
    'v-section1': Section1,
    // 'v-section2': Section2,
    // 'v-section3': Section3,
    // 'v-section4': Section4,
    // 'v-section5': Section5,
    // 'v-section6': Section6,
    // 'v-nav': Nav,
    'v-footer': Footer,
    'v-mask': Mask
  },
  data() {
    return {
      datas: '',
      loading:false,
      api:''
    }
  },
  beforeCreate() {
  },
  mounted(){
    this.api=api;
  }
}
</script>



<style lang="less" scoped>
@import '../assets/fz.less';

.index {
    width: 100%;
    background-color: #F8FCFF;
    font-size: @font-size-medium;
    .wapper{
      position: relative;
      &when (@siteConfiguration = 'hisant'){
          padding-top: 1.74rem;
          
        }
    img{
        display: block;
        width: 100%;
      }
    }


}
</style>
