<template lang="html">
  <section class="list"  v-if=datas>
    <v-title1><span slot="title" >{{datas.title}}</span></v-title1>
    <div class="content">
      <router-link v-for="k in datas.list" :key="k.id" :to="{name:'详情页'}"><img v-lazy="k.imgPath" alt=""></router-link>
    </div>
  </section>
</template>

<script>
import Advertising from '@/components/index/advertising.vue'
import Title1 from '@/common/base/floor-title/title1.vue';
import detail from '@/http/mock.js' //模拟数据

  export default {
    data() {
      return {
       datas:''
      }
    },
    components: {
      'v-advertising': Advertising,
      'v-title1': Title1
    },
    mounted() {
      let _this=this;
      this.$http.get('/section2', {}, function(data){
        _this.datas=data.data;
      }, function(obj){
          console.info('ERROR');
          console.info(obj);
      }, this.$http.withCredentials());
    }
  }

</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';

  .list {
    background-color: @color-assist4;
    padding: .2rem .24rem;
    font-size: 0;
    .content{
      margin: 0 auto;
       a{
        display: inline-block;
        margin-top: .2rem;
         img{
          width: 100%;
          border-radius: .06rem;
        }
       }
    }
   
    
  }

</style>
