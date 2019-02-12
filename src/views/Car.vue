<template lang="html">

    <div class="car">
      <v-header class="header" :iconTheme="false">
        <span slot="title">
         <i>购物车</i>
        </span>
      </v-header>
      <!-- 根据购物车是否有商品加载不同的组件 -->
      <v-something :carList="carList" v-if="carList"></v-something>
      <v-nothing v-else></v-nothing>
      <v-footer :carList="carList" v-if="carList"></v-footer>
      <v-footer_ :num='3' :count=num></v-footer_>
      <v-mask></v-mask>
    </div>
</template>

<script>
import Header from '@/components/car/header.vue'
import Nothing from '@/components/car/nothing.vue'
import Something from '@/components/car/something.vue'
import Footer from '@/components/car/footer.vue'
import Footer1 from '@/common/_footer.vue'
import Mask from '@/common/base/mask.vue'
import  { api } from '@/global/siteConfiguration'
import detail from '@/http/mock.js' //模拟数据

export default {
  components:{
    'v-header':Header,
    'v-nothing':Nothing,
    'v-something':Something,
    'v-footer':Footer,
    'v-footer_':Footer1,
    'v-mask': Mask
  },
  data(){
    return{
      carList:''
    }
  },
  mounted(){
    // 获取购物车信息
    let this_=this;
    this.$http.post(api.car_list, {uid:this.userId}, function(data){
      this_.carList=data.data;
    }, function(obj){
      console.info('ERROR');
      console.info(obj);
    }, this.$http.withCredentials());
  },
  computed:{
    userId(){
      // vuex
        return this.$store.state.login.userId
    },
    num(){
      let num=0;
      if(this.carList.length>0){
        this.carList.forEach(function(e,i){
          num+=e.cart_count;
        });
      }

      return num;
    }
  }

}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
i{
  font-family: @font-family-title;
}
.car {
  width: 100%;
  font-size: @font-size-medium;
}
</style>
