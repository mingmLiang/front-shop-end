<template lang="html">
<div>
  <v-header class="header" :share=false :iconTheme=true>
      <span slot="title">
       <i>特约会员</i>
      </span>
</v-header>
<v-framework>
  <div slot="content" class="content">
          <div class="my_section">
            <ul class="list">
              <li class="clearfix"  @click="$router.push({ name: '我的商户信息', params: { 'userid': 123 }})">
                <div class="fl">
                  <span>我的商户信息</span>
                </div>
                <div class="fr">
                   <Icon type="ios-arrow-right"></Icon>                 
                </div>
              </li>
              <li class="clearfix" @click="$router.push({ name: '我的客户信息列表页', params: { 'userid': 123 }})">
                <div class="fl">
                  <span>我的客户</span>
                </div>
                <div class="fr">
                   <Icon type="ios-arrow-right"></Icon>                  
                </div>
              </li>
              <li class="clearfix" @click="$router.push({ name: '业绩管理页', params: { 'userid': 123 }})">
                <div class="fl">
                  <span>业绩管理</span>
                </div>
                <div class="fr">
                   <Icon type="ios-arrow-right"></Icon>                  
                </div>
              </li>
            </ul>
          </div>
  </div>
</v-framework>
</div>

</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据
  import Framework from '@/components/User/framework.vue'
  import Header from '@/common/_header.vue'

  export default {
    components: {
      'v-framework': Framework,
      'v-header':Header,

    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  .header{
  background: @color-main2;
  border-bottom-color: transparent;
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

