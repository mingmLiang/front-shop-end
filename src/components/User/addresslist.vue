<template lang="html">
<div>
  <v-header class="header" :share=false :iconTheme=false>
    <span slot="title">
      <i>收货地址</i>
    </span>
  </v-header>
  <div class="wapper">
    <ul class="addresslist">
      <li>
        <div class="clearfix item">
          <div class="fl">
            <span class="icon-check icon-tochecked" @click="toggle"></span>
          </div>
          <div class="fl address">
            <p><span style="margin-right:.2rem;line-height:.5rem;">李美和</span><span>13437059895</span></p>
            <p class="unnotice" style="line-height:.44rem;"><span>广东省阳江市阳春春城阿斯蒂芬季后赛的</span></p>
          </div>
        </div>
        <div class="button">
          <div  @click="$router.push({ name: '编辑地址页', params: { 'userid': 123 }})"><i class="icon-edit"></i><span>编辑</span></div>
          <div @click="deleteAddress()"><i class="icon-delete"></i><span>删除</span></div>
        </div>
      </li>
      <li>
        <div class="clearfix item">
          <div class="fl">
            <span class="icon-check icon-tochecked" @click="toggle"></span>
          </div>
          <div class="fl address">
            <p><span style="margin-right:.2rem;line-height:.5rem;">李美和</span><span>13437059895</span></p>
            <p class="unnotice" style="line-height:.44rem;"><span>广东省阳江市阳春春城阿斯蒂芬季后赛的</span></p>
          </div>
        </div>
        <div class="button">
          <div @click="$router.push({ name: '编辑地址页', params: { 'userid': 123 }})"><i class="icon-edit"></i><span>编辑</span></div>
          <div @click="deleteAddress()"><i class="icon-delete"></i><span>删除</span></div>
        </div>
      </li>
      <li>
        <div class="clearfix item">
          <div class="fl">
            <span class="icon-check icon-tochecked" @click="toggle"></span>
          </div>
          <div class="fl address">
            <p><span style="margin-right:.2rem;line-height:.5rem;">李美和</span><span>13437059895</span></p>
            <p class="unnotice" style="line-height:.44rem;"><span>广东省阳江市阳春春城阿斯蒂芬季后赛的</span></p>
          </div>
        </div>
        <div class="button">
          <div @click="$router.push({ name: '编辑地址页', params: { 'userid': 123 }})"><i class="icon-edit"></i><span>编辑</span></div>
          <div @click="deleteAddress()"><i class="icon-delete"></i><span>删除</span></div>
        </div>
      </li>
    </ul>
  </div>
</div>

</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据
  import Header from '@/common/_header.vue'
  
  export default {
        data () {
            return {

            }
        },
    components: {
      'v-header':Header,

    },
    mounted(){
    },
    methods: {
      deleteAddress(){
        this.$Message.success('删除');
      },
      toggle(e){
        $('.icon-check').addClass('icon-tochecked');
        $(e.target).removeClass('icon-tochecked');
      }
    },

  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  ul{
    li{
      padding: .3rem .24rem .22rem .24rem;
      background-color: #fff;
      margin-top: .16rem;
      height: 2.17rem;
      position: relative;
      .item>div{
        height: .94rem;
        &:first-child{
          line-height: .94rem;
          margin-right: .1rem;

        }
      }
      .icon-check icon-tochecked{
        margin-right: .24rem;
      }
      .button{
        text-align: right;
        position:absolute;
        bottom: .22rem;
        width: 100%;
        right: .24rem;
        >div{
          font-size: @font-size-medium-x;
          display: inline-block;
          color: @color-text1;
          font-family: @font-family-text;
          &:first-child{
            margin-right:.59rem;
          }
          i,span{
            vertical-align: middle;
          }
          i{
            margin-right: .2rem;
          }
        }
      }
      .address{
        font-family: @font-family-text;
        font-size: @font-size-medium-x;
        color: @color-main1;
        .unnotice{
          font-size: @font-size-small;
        }
      }
    }
  }
</style>

