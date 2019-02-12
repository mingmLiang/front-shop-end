<template lang="html">
  <Affix>
    <header  class="demo-affix">
      <!-- <router-link  class="icon-back":to="{ name: '首页'}"v-if="$route.matched[0].path=='/category'"></router-link> -->
      <span class="icon-back"  :class="{ active: iconTheme }" @click="$router.go(-1)"></span>
      <h1><slot name="title"></slot></h1>
      <!-- <span class="tips" @click="busToggle(true);toggle=true;" v-if="toggle===false">编辑</span> -->
      <!-- <span class="tips" @click="busToggle(false);toggle=false;" v-if="toggle===true">完成</span> -->
    </header>
  </Affix>

</template>


<style lang="less" scoped>
@import '../../assets/fz.less';
.header {
  height: .88rem;
  line-height: .88rem;
  max-width: 7.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 .24rem;
  background-color: #fff;
  position: fixed;
  z-index: 9999;
  .bd(@color-assist3);
  .tips{
    position: absolute;
    right:.24rem;
    color: @color-text2;
    top: 0;
  }
  .icon-back{
    position: absolute;
    left: .24rem;
    top: .305rem;
  }
  h1{
    color: @color-main2;
    font-size: @font-size-large ;
    text-align: center;
    &when (@siteConfiguration = 'hisant'){
      color: @color-text1;
    }
  }


}

</style>


<script>
import { bus } from '@/global/bus.js'
export default {
  data(){
    return{
      toggle:false
    }
  },
  props: {
     iconTheme: {
       type: Boolean
     }
  },
  methods:{
    busToggle(bl){
      bus.$emit('deleteBT', bl);
    }
  }
}
</script>
