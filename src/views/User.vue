<template lang="html">
<div>
  <v-header class="header special" :share=false :iconTheme=true>
      <span slot="title">
       <i>个人中心</i>
      </span>
</v-header>
<v-framework>
  <span slot="content">
      <div class="title clearfix">
            <v-title1>
              <div slot="title">我的订单 
                <div class="more" @click="$router.push({name: '订单列表页',query: { type:  1}})">查看更多<Icon type="ios-arrow-right"></Icon></div>
              </div>
          </v-title1>
           
        </div>
          <div class="my_section">
            <v-quickbox></v-quickbox>
          </div>
          <div class="my_section">
            <ul class="list">
<!--               <li class="clearfix" @click="$router.push({ name: '我的优惠券', params: { 'userid': 123 }})">
                <div class="fl">
                  <span>我的优惠券</span>
                </div>
                <div class="fr">
                   <span class="tips">兑换优惠券</span> 
                   <Icon type="ios-arrow-right"></Icon>                 
                </div>
              </li> -->
              <li class="clearfix" @click="$router.push({ name: '修改密码页', params: { 'userid': 123 }})">
                <div class="fl">
                  <span>修改密码</span>
                </div>
                <div class="fr">
                   <Icon type="ios-arrow-right"></Icon>                  
                </div>
              </li>
<!--               <li class="clearfix" @click="$router.push({ name: '客服与帮助', params: { 'userid': 123 }})">
                <div class="fl">
                  <span>帮助与客服</span>
                </div>
                <div class="fr">
                   <Icon type="ios-arrow-right"></Icon>                  
                </div>
              </li> -->
            </ul>
          </div>
<!--           <div class="my_section">
            <ul class="list">
              <li class="clearfix" @click="$router.push({ name: '用户列表页', params: { 'productid': 123 }})">
                <div class="fl">
                  <span>VIP中心</span>
                </div>
                <div class="fr">
                   <Icon type="ios-arrow-right"></Icon>                  
                </div>
              </li>
            </ul>
          </div> -->
  </span>
  </v-framework>

</div>
</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据
  import Framework from '@/components/User/framework.vue'
  import Quickbox from '@/components/User/quickbox.vue';
  import Title1 from '@/common/base/floor-title/title1.vue';
  import Header from '@/common/_header.vue'

  export default {
    components: {
      'v-framework': Framework,
      'v-quickbox': Quickbox,
      'v-title1': Title1,
      'v-header':Header,

    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/fz.less';
  .header{
  background: @color-main2 !important;
  border-bottom-color: @color-main2 !important;
  box-shadow: none;
  h1{
    span{
      i{
        color: @color-text3 !important;        
      }
    }

  }
}
        .my_section{
          margin-top: .2rem;
          background-color: #fff;
          .list{
            li{
              padding: .3rem .24rem;
              font-size: @font-size-medium;
              font-family: @font-family-text;
              color: @color-text1;
              .bd(@color-assist3);
              .tips{
                color: @color-text2;
              }
              &:last-child{
                border:none;
              }
            }
            .ivu-icon{
              margin-left: .1rem;
            }
          }
      }
      .title .floor-title{
        display: block;
        span{
          color: @color-text1;
          font-size: @font-size-medium-x; 
          font-family: @font-family-text;
          float: left;

        }
      }
      .more{
        float: right;
        color: @color-text1;
        font-size: @font-size-medium-x;
        font-family: @font-family-text;
        .ivu-icon{
          font-size: @font-size-medium-x*1.2;
          margin-left: .1rem;
        }
      }
</style>
