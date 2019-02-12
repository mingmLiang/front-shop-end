<template lang="html">
  <section class="list" v-if="datas">
   <v-title1><span slot="title" >{{datas.title}}</span></v-title1>
    <div class="content">
      <div class="left">
      <router-link :to="{ name: '详情页', query: { 'pro_id':  datas.pro_id[0]}}">
        <img :src="datas.image[0]" alt="">
      </router-link>
    </div>
    <div class="right">
       <router-link :to="{ name: '详情页', query: { 'pro_id':  datas.pro_id[1]}}">
        <img :src="datas.image[1]" alt="">
      </router-link>
       <router-link :to="{ name: '详情页', query: { 'pro_id':  datas.pro_id[2]}}">
        <img :src="datas.image[2]" alt="">
      </router-link>
    </div>
    </div>
  </section>
</template>

<script>
  import Title1 from '../../common/base/floor-title/title1.vue';
  import  { api } from '@/global/siteConfiguration';

  export default {
    components: {
        'v-title1': Title1
    },
    data () {
      return {
        datas:{
          'image':[],
          'pro_id':[],
          'title':''
        }
      }
    },
    mounted() {
      let _this=this;
      this.$http.post(api.adv_one, {'adv_type':'3'}, function(data){
        _this.datas.image=data.data[0].image.split(';');
        _this.datas.pro_id=data.data[0].pro_id.split(';');
        _this.datas.title=data.data[0].adv_key;
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
    padding: .2rem .24rem;
    background-color: @color-assist4;
    font-size: 0;
    .content{
      margin: 0 auto;
      border-radius: .06rem;
      overflow: hidden;
      margin-top: .2rem;
      max-width: 7.5rem;
      .left{
        width: 3.48rem;
      }
      .right{
        width:3.54rem;
      }
      .left,.right{
            display: inline-block;
            vertical-align:text-top;
            a,img{
              display: inline-block;
              width: 100%;
            }
          }
      .right{
        a{
          &:last-child{
            position: relative;
            &::after{
              content: '';
              position: absolute;
              width: 100%;
              left: 0;
              top: 0;
              z-index: 1;
              width: 100%;
              height: 1px;
              background: @color-assist3;
            }

          }
        }
      }      
    }  
  }

</style>
