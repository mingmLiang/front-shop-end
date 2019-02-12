<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="">
    <v-header class="header" :share="false" :iconTheme="false">
      <span slot="title">
       <i>优惠专区</i>
      </span>
    </v-header>
    <div class="wapper">
      <div class="nav">
        <li  @click="toggle=0"> <router-link  to="/activity/section1"><span :class="{active:toggle===0 }">特价专区</span></router-link></li>    
        <li  @click="toggle=1"> <router-link  to="/activity/section2"><span :class="{active:toggle===1 }">秒杀专区</span></router-link></li>
        <li  @click="toggle=2"> <router-link  to="/activity/section3"><span :class="{active:toggle===2 }">满减专区</span></router-link></li>
      </div>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive>  -->
    </div>
    <v-footer :num="4"></v-footer>
    <v-mask></v-mask>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Footer from '@/common/_footer.vue'
import Mask from '@/common/base/mask.vue';

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-mask': Mask
  },
  data() {
    return {
      datas: '',
      // loading:false,
      toggle:0
    }
  },
  methods:{
    toggle_(num){
      // console.log(num)
    }
  },
  beforeCreate() {
  

  },
  mounted(){
    // 获取查询类型
    // console.log(this.$route.query.type);
  }
}
</script>



<style lang="less" scoped>
@import '../assets/fz.less';

.nav{
  background: #fff;
  position: fixed;
  white-space: nowrap; 
  width: 7.5rem;
  overflow-x: hidden;
  .bd(@color-assist3);
  height: .88rem;
  line-height: .88rem;
  z-index: 2;
  li{
    display: inline-block;
    width: 33.3%;
    text-align: center;
    font-size: @font-size-medium-x;
    color: @color-text1;
    font-family: @font-family-text;
    vertical-align: bottom;
    a{
      display: inline-block;
      height: 100%;
      width: 100%;

      span{
          position: relative;
          color: @color-text1;
        padding: 0 .02rem;
        display: inline-block;
        height: 100%;
        &.active{
          color: @color-main1;
          &:after{
          content: '';
          position: absolute;
          left: 0;
          bottom: .02rem;
          width: 100%;
          height: .04rem;
          background: @color-main1;
        }
          }        
      }

    }
  }
}

</style>
