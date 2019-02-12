<template lang="html">
  <section class="list"  v-if="datas">
    <div class="box">
      <v-title1>
        <span slot="title" class="top_title">{{datas.title}}<Icon type="ios-arrow-right"></Icon></span>
      </v-title1>
      <div class="content">
          <router-link v-for="k in datas.list" :key="k.id" :to="{name:'详情页'}">
            <img v-lazy="k.imgPath" alt="">
            <p class="title">
              {{k.name}}
            </p>
            <p class="price">
              ￥{{k.price}}
            </p>
          </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Advertising from '@/components/index/advertising.vue'
import Title1 from '@/common/base/floor-title/title1.vue';
import detail from '@/http/mock.js' //模拟数据
  export default {
    props: {
     api: {
       type: String
     }
    },
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
      this.$http.get(_this.api, {}, function(data){
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
    font-size: 0;
    padding-top: .2rem;
    .box{
      background: #fff;
      padding: .2rem 0;
      .top_title{
        display: block;
        .ivu-icon{
          position: absolute;
          right: .24rem;
          top: 50%;
          font-size: @font-size-medium-x;
          margin-top: -.15rem;
        }
      }
      h1{
        padding-left: .4rem;
        .bd(@color-assist3);
      }
      .floor-title:before{
        left: .24rem;
      }
      .content{
        margin: 0 auto;
        padding: .2rem .24rem 0 .24rem;

          a{
          display: inline-block;
          margin:  0;
          width:33.3%;
          overflow:hidden;
           img{
            width:2.28rem;
            border-radius: .06rem;
          }
         }
         .title{
          font-size: @font-size-small;
          font-family: @font-family-text-s;
          margin: .2rem 0;
          .no-wrap(2);
          color: @color-text1;
          line-height: .3rem;

         }
          .price{
            color: @color-main1;
            font-size: @font-size-small;
            font-family: @font-family-num;
            text-align: center;
          }
      }      
    }

  }
</style>
