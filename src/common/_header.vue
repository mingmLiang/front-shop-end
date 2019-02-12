<template lang="html">
  <Affix>
    <header  class="demo-affix">
      <!-- <router-link  class="icon-back":to="{ name: '首页'}"v-if="$route.matched[0].path=='/category'"></router-link> -->
      <span class="icon-back"  :class="{ active: iconTheme }" @click="$router.go(-1)"></span>
      <h1><slot name="title"></slot></h1>
      <!-- <span class="icon-share" v-if="share" ></span> -->
    </header>
  </Affix>

</template>


<style lang="less" scoped>
@import '../assets/fz.less';

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
  h1{
    color: @color-main2;
    font-size: @font-size-large !important;
    text-align: center;
    font-family: @font-family-title;
    &when (@siteConfiguration = 'hisant'){
      color: @color-text1;
    }
  }
.icon-back{
  position: absolute;
  top: .24rem;
}

}


</style>


<script>
export default {
  props: {
     share: {
       type: Boolean
     },
     iconTheme: {
       type: Boolean
     }
  }
}
</script>
