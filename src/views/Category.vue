<template lang="html">
  <div class="wrap">
    <v-header class="header" :share="false" :iconTheme="false">
      <span slot="title">
       <i>产品列表</i>
      </span>
    </v-header>
    <section class="view wapper">
      <v-nav></v-nav>
      <router-view></router-view>
    <v-baseline></v-baseline>
    </section>
    <v-footer :num="2"></v-footer>
    <!-- 遮罩层（一个页面只可以有一个） -->
    <v-mask></v-mask> 
  </div>
</template>

<script>
import Header from '@/common/_header.vue';
import Footer from '@/common/_footer.vue';
// 遮罩层
import Mask from '@/common/base/mask.vue';
import Baseline from '@/common/_baseline.vue';
import Nav from '@/components/category/nav.vue'
import category from '@/http/mock.js' //模拟数据
export default {
  components:{
    'v-header':Header,
    'v-nav': Nav,
    'v-footer': Footer,
    'v-mask': Mask,
    'v-baseline': Baseline,
  },
  data(){
    return {
      allData:'',
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
  .wrap {
    width: 100%;
    font-size: @font-size-medium;
    .view {
      width: 100%;
      height:100%;

    }

  }

</style>
