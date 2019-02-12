<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="">
    <v-header class="header" :share="false" :iconTheme="false">
      <span slot="title">
       <i>我的订单</i>
      </span>
    </v-header>
    <div class="wapper">
       <v-nav class="nav"></v-nav>
       <!-- 订单列表 -->
       <v-list></v-list>
    </div>
    <v-footer :num="4"></v-footer>
    <v-mask></v-mask>

  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Footer from '@/common/_footer.vue'
import Nav from '@/components/order/nav.vue'
import Mask from '@/common/base/mask.vue';
import Orderlist from '@/components/order/list.vue';

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-nav': Nav,
    'v-mask': Mask,
    'v-list':Orderlist
  },
  data() {
    return {
      datas: '',
      loading:false
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
}

</style>
