<template lang="html">
<div class="advertisingBox"  v-if="datas.image.length">
  <div class="advertising"  v-for="(k,i) in datas.image">
    <router-link :to="{ name: '详情页', query: { 'pro_id':  datas.pro_id[i]}}" >
      <img :src="k" alt="">
    </router-link>
  </div>  
</div>

</template>

<script>
import  { api } from '@/global/siteConfiguration';

export default {
    data () {
      return {
        datas:{
          'image':[],
          'pro_id':[]
        }
      }
    },
    mounted() {
      let _this=this;
      this.$http.post(api.adv_one, {'adv_type':'2'}, function(data){
        _this.datas.image=data.data[0].image.split(';');
        _this.datas.pro_id=data.data[0].pro_id.split(';');
      }, function(obj){
          console.info('ERROR');
          console.info(obj);
      }, this.$http.withCredentials());
    }
}
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  .advertising{
    background-color: @color-assist4;
    padding: .2rem .24rem;
    a{
      display: block;
      width: 100%;
      height: 100%;
      border-radius: .06rem;
      overflow: hidden;
      margin: 0 auto;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }     
    }

  }

</style>
