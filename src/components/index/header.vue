<template lang="html">
<div>
  <Affix>
      <header class="demo-affix" style="position:fixed;">
          <span class="logo"></span>
          <h1>抢淘淘</h1>
          <router-link :to="{name:'搜索页'}">
            <!-- <span class="search icon-search"></span> -->
          </router-link>
      </header>
  </Affix>

    </div>  
</template>

<script>
import  { api } from '@/global/siteConfiguration';
import GBt from '@/common/base/modal/general/bt.vue';
import GPanel from '@/common/base/modal/general/panel.vue';
export default {
  data(){
    return{
    }
  },
  components: {
        'v-g-bt':GBt,
        'v-g-panel': GPanel,
    },
   methods: {
  },
  mounted(){
  }
}
</script>


<style lang="less" scoped>
@import '../../assets/fz.less';
header {
	 height: .88rem;
   width: 100%;
   max-width: 7.5rem;
   margin: 0 auto;
   background-color: #fff;
   color: @color-main2!important;
   font-size: @font-size-large !important;
   padding: 0 .24rem;
   position: relative;
   z-index: 9999;
    .bd(@color-assist3);
    .logo{
      width: 1.33rem;
      max-width: 180px;
      height: 1.35rem; 
      margin-top: .14rem;
      display: inline-block; 
      position:  absolute;
      left: .24rem;
      .bg-image('/images/logo');
      background-size: cover; 
    }
    h1{
      text-align: center;
      height: .97rem;
      line-height: .97rem;
      font-size:  @font-size-large !important;
      font-family: @font-family-title;
    }
    a{
      display: inline-block;
      .search{
        position:  absolute;
        top:.305rem;
        right: .24rem;
        &when (@siteConfiguration = 'hisant'){
          right: 1.2rem;
        } 
      }
    }

}
</style>
