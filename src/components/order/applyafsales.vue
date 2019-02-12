<!-- 申请售后 -->
<template lang="html">
  <div class="appleBox">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>申请售后</i>
      </span>
    </v-header>
    <section class="wapper grey">
      <div class="my_section">
        <div class="productItem">
          <div class="imgbox">
            <img v-lazy="'http://img.hb.aicdn.com/52406396935abb352d20eed92db46ccddec2ffc1f4d0-gLvowL_fw658'">
          </div>
          <div class="info">
            <p class="title">
              之下算农强集严体军向多道委现起及产就何强场海种将第须了指意界持团装些千
            </p>
            <p class="bottomBox unnotice">
              数量：2灌装x2
            </p>
          </div>
        </div>
      </div>
      <div class="my_section">
        <p class="tips">请选择您实际收到的商品数量</p>
        <p class="numBox">
          <span class="icon-check icon-tochecked" @click="toggle"></span>
          <span style="margin:0 .1rem 0 .2rem;">实收数量:</span>
          <span class="num">
            <i @click="decrease" :class="{ disable: num1<1 }">-</i>
            <i>{{num1}}</i>
            <i @click="num1++">+</i>
          </span>
        </p>
      </div>
      <div class="my_section">
        <p class="tips">请选择您需要的处理方式</p>
        <p class="numBox">
          <span class="icon-check icon-tochecked" @click="toggle"></span>
          <span style="margin:0 .1rem 0 .2rem;">退货数量:</span>
          <span class="num">
            <i @click="decrease_" :class="{ disable: num2<1 }">-</i>
            <i>{{num2}}</i>
            <i @click="num2++">+</i>
          </span>
        </p>
        <p>
          <span>处理方式</span>
          <span>退货退款</span>
        </p>
      </div>
      <div class="my_section">
        <p class="tips">问题描述</p>
        <textarea v-focus  placeholder="请在此描述详细问题"></textarea>
      </div>
      <div class="my_section">
        <p class="tips">上传图片</p>
        <div class="photoBox" @click="upload()">
          <input  type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" name="" id="js-upload-bt">
          <p class="icon-photo"></p>
          <span class="text">上传图片最多5张</span>
        </div>
      </div>
      <div class="my_section" style="padding-left:0;padding-right:0;">
        <div class="item">
          <p>
            <span class="tips">联系人:</span>
            <input type="text" name="" placeholder="必填">
          </p> 
          <p>
            <span class="tips">联系电话:</span>
            <input  type="tel" placeholder="必填">
          </p>         
        </div>
      </div>
    </section>
    <p class="button">
      提交审核
    </p>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Tags5 from '@/common/base/tags/tags5.vue';
 export default {
          components:{
          'v-header':Header
        },
        data () {
            return {
              datas:'',
              num1:0,
              num2:0
            }
        },
        methods: {
          upload(){
            $('#js-upload-bt').trigger('click');
          },
          decrease(){
            if(this.num1>0){
              this.num1--;
            }
          },
          decrease_(){
            if(this.num2>0){
              this.num2--;
            }
          },
          toggle(e){
            $(e.target).toggleClass("icon-tochecked");
          }

        },
      mounted(){
      }
    }


</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.appleBox{
  // height: 100%;
  .button{
    width: 7.02rem;
    height: .88rem;
    color: @color-text3;
    background: @color-main1;
    border-radius: .06rem;
    text-align: center;
    margin: 0 auto .24rem auto;
    font-size: @font-size-medium-xx;
    line-height: .88rem;

  }
}
.wapper{
  padding-bottom: .2rem;
  height: 100%;
  .my_section{
    padding: .2rem .24rem;
    margin-top: .2rem;
    background: #fff;
    color: @color-text1;
    font-family:@font-family-text; 
    font-size: 0;
    .item{
      >p{
        padding: 0 .24rem;
        span{
          vertical-align: middle;
        }
        input{
          vertical-align: middle;
          padding-left: .2rem;
          font-size: @font-size-medium;
          font-family:@font-family-text; 
          color: @color-text1;
        }
        input::placeholder {
        color:    @color-text2;  
        }  
        input:placeholder {  
            color:   @color-text2;  
        }  
      }
    }
    textarea{
      padding: .12rem;
      width: 100%;
      border-radius: .06rem;
      height: 1.28rem;
      font-family: @font-family-text;
      font-size: @font-size-medium;
      color: @color-text1;
    }
    textarea::placeholder {
        color:    @color-text2;  
    }  
    textarea:placeholder { 
        color:   @color-text2;  
    }  
    .tips{
      margin-bottom: .2rem;
      font-size: @font-size-medium;

    }
    .photoBox{
      width: 1.2rem;
      height: 1.2rem;
      text-align: center;
      padding-top: .1rem;
      .ba(@color-text2,0);
      border-style:dashed;
      position: relative;
      input{
        visibility: hidden;
        display: inline-block;
        position: absolute;
        z-index: -1;
      }
      .text{
        font-size: @font-size-small;
        line-height:  .34rem;
        color: @color-text2;
        font-family: @font-family-text;
      }
      .icon-photo{
        display: block;
        margin:0 auto;
      }
    }
    .numBox{
      height: .44rem;
      line-height: .44rem;
      span{
        vertical-align: middle;
        font-size: @font-size-medium;

      }
      .num{
        display: inline-block;
        height: .44rem;
        line-height: .44rem;
        .ba(@color-assist3,.02rem);
        i{
          display: inline-block;
          width: .48rem;
          text-align: center;          
          &:first-child{
            font-size: @font-size-medium-x;
            .br(@color-assist3);
          }
          &:last-child{
            .bl(@color-assist3);
          }
          &.disable{
            color: @color-assist3;
          }
        }
      }
    }
    .productItem{
      display: flex;
      flex: 1;
      .info{
        padding-left: .24rem;
        font-family: @font-family-text;
        position: relative;
        .title{
          .no-wrap(2);
          font-size: @font-size-medium-x;
          color: @color-text1;
        }
        .bottomBox{
          font-size: @font-size-small;
          position: absolute;
          bottom: 0;
        }
      }
      .imgbox{
        flex: 0 0 1.6rem;
        height: 1.6rem;
        overflow: hidden;
        img{
          width: 100%;
          .ba(@color-assist3,0);
        }
      }
    }
  }
}

</style>
