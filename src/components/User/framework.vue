<template lang="html">
<div>
  <div class="wapper">
    <div class="user">
        <div class="user_header">
            <div>
              <div class="imgBox">
                <img v-lazy="'http://img.hb.aicdn.com/1ddb3cdef7236c7b5a082667933e8f7acac168f2f005-2d9gwP_fw658'" alt="">
              </div>
                <div class="userInfo">
                  <p class="name">{{name}}</p>
                  <!-- 特约会员没有皇冠 -->
                  <p class="role"><span class="icon-crown" v-if="false"></span>特约会员</p>
                </div>
            </div>
        </div>
        <div class="main">
           <slot name='content'></slot>
        </div>

      </div>     
  </div>
<v-footer :num=4></v-footer>
</div>

</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据
  import Baseline from '@/common/_baseline.vue';
  import Footer from '@/common/_footer.vue';
  export default {
    components: {
      'v-baseline': Baseline,
      'v-footer': Footer,

    },
    data(){
      return{
        name:''
      }
    },
    mounted(){
      this.name=sessionStorage.getItem("qtt_user_uname");
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';

  .user {
    background: @color-main2;
    padding-top: .88rem;
    position: relative;
    .icon-crown{
      width: .24rem;
      height: .24rem;
      display: inline-block;
      .bg-image('/images/icon-crown');
      background-size: cover;
      margin-right: .1rem;
    }
    .user_header {
        position: absolute;
        width: 7.5rem;
        padding: 0 .24rem;
        top: 0;
        z-index: 12;
      >div{
        background-color:#fff;
        border-radius: .06rem;
        padding:  .3rem .24rem;
        .imgBox{
          width: 1.2rem;
          height: 1.2rem;
          overflow: hidden;
          border-radius: 50%;
          display: inline-block;
          vertical-align: top;
          img{
            width: 100%;
          }
        }
        .userInfo{
          width: 5rem;
          display: inline-block;
          vertical-align: top;
          margin: .3rem 0 0 .2rem;
          .name{
            color: @color-text1;
            font-size: @font-size-medium-x;
            font-family: @font-family-num;
          }
          .role{
            color: @color-text2;
            font-size: @font-size-small;
            font-family: @font-family-text;
            
          }
        }
      }      
    }

    .main{
      background-color: @color-assist4;
      padding-top: 1.7rem;
      padding: 1.5rem .24rem .24rem .24rem;
    }
  }


</style>
