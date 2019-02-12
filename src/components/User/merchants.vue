<template lang="html">
<div>
  <v-header class="header special" :share=false :iconTheme=false>
    <span slot="title">
      <i>我的商户信息</i>
    </span>
  </v-header>
  <div class="wapper">
    <div class="title clearfix">
      <v-title1>
        <span slot="title">我的订单</span></v-title1>
    </div>
  <div class="my_section">
    <ul class="list">
      <li class="clearfix">
        <div class="fl">
          <span><i>登录账号:</i>13438960012</span>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <span><i>会员身份:</i></span></div>
      </li>
    </ul>
  </div>
  <div class="title clearfix">
      <v-title1>
        <span slot="title">我的信息</span></v-title1>
  </div>
  <div class="my_section">
    <ul class="list">
      <li class="clearfix">
        <div class="fl">
          <span><i>商户ID:</i>8789555</span>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <span><i>主体名称:</i></span></div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <span><i>唯一商号:</i></span></div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <span><i>主体名称:</i></span></div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <span><i>商户地址:</i></span></div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <span><i>联系人:</i></span></div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <span><i>联系电话:</i></span></div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <span><i>固定电话:</i></span></div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <span><i>电子邮件:</i></span></div>
      </li>
    </ul>
  </div>
  <p class="toEdit">申请修改</p>
</div>
</div>
</div>

</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据
  import Title1 from '@/common/base/floor-title/title1.vue';
  import Header from '@/common/_header.vue'

  export default {
    components: {
      'v-title1': Title1,
      'v-header':Header,

    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  .toEdit{
    /* width: 100%; */
    margin: 0 .24rem;
    background-color: @color-main1;
    color: @color-text3;
    font-family: @font-family-text-s;
    font-size:@font-size-medium-xx;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    border-radius: .06rem;
  }
  .wapper{
    background-color: @color-assist4;
    padding-bottom: 0;
  }
        .my_section{
          background-color: #fff;
          margin: 0 .24rem .2rem .24rem;
          .list{
            li{
              padding:0 .24rem;
              height: .84rem;
              line-height: .84rem;
              font-size: @font-size-medium;
              font-family: @font-family-text;
              color: @color-text1;
              .bd(@color-assist3);
              &:last-child{
                border:none;
              }
              span i{
                display: inline-block;
                width: 1.2rem;
              }
            }
            .ivu-icon{
              margin-left: .1rem;
            }
          }
      }
      .title{
        padding: .2rem .24rem;
        .floor-title{
        display: block;
        span{
          color: @color-text1;
          font-size: @font-size-medium-x; 
          font-family: @font-family-text;
          float: left;

        }
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
