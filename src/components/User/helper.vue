<template lang="html">
<div class="helper">
    <v-header class="header" :share=false :iconTheme=false>
        <span slot="title">
         <i>帮助与客服</i>
        </span>
  </v-header>
  <div class="wapper">
    <div class="my_section">
      <div class="inputBox">
        <i class="icon-shearch01 icon"></i>
        <input type="text" placeholder="       有问题？点我搜搜看看">
      </div>
    </div>

      <div class="my_section2">
         <Row>
            <Col span="8" class="item1">
              订单问题
            </Col>
            <Col span="8" class="item2">
              <p>修改订单</p>
              <p>修改订单</p>
            </Col>
            <Col span="8" class="item2">
              <p>修改订单</p>
              <p>修改订单</p>
              
            </Col>
        </Row>
      </div>
      <div class="my_section2">
         <Row>
            <Col span="8" class="item1">
              订单问题
            </Col>
            <Col span="8" class="item2">
              <p>修改订单</p>
              <p>修改订单</p>
            </Col>
            <Col span="8" class="item2">
              <p>修改订单</p>
              <p>修改订单</p>
              
            </Col>
        </Row>
      </div>
      <div class="my_section">
        <div class="phone">
          <i class="icon-phone"></i>
          <span style="margin-right:.2rem;">咨询电话：020-34586234556</span>
          <span class="unnotice">(9:00-18:00)</span>
        </div>
      </div>

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
    },

  }
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';

.wapper{
  padding-left: .24rem;
  padding-right: .24rem;
  .inputBox
  {
        .icon{
        position: absolute;
        left: 1.94rem;
        top: 50%;
        margin-top: -.125rem;
      }
    } 
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: @color-text2;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: @color-text2;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: @color-text2;
  }
  input::-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: @color-text2;
  }
  .my_section2{
    margin-top: .2rem;
    background: #fff;
    color: @color-text1;
    font-size: @font-size-medium;
    font-family: @font-family-text;
    border-radius: .06rem;
    text-align: center;

    >.ivu-row{
      display: flex;
    }
    .item1{
     justify-content: center;
      flex-direction: column;
      display: flex;
      .br(@color-assist3);
    }
    .item2{
     .br(@color-assist3);
      p{
        padding: .3rem 0;
        line-height: @font-size-medium;
      }
    }
    .item2:last-child{
      border-right: none;
    }
    .item2 p{
      .bd(@color-assist3);
    }
    .item2 p:last-child{
      border-bottom: none;
    }

  }

  .my_section{
    background: #fff;
    height: 1.08rem;
    line-height: 1.08rem;
    text-align: center;
    margin-top: .2rem;
    border-radius: .06rem;
    position: relative;
    .phone{
      text-align:left;
      padding-left:.24rem;
      font-size: 0;
      span,i{
        vertical-align: middle;
        font-size: @font-size-medium;
        font-family: @font-family-text;
      }
      i{
        margin-right: .08rem;
        color: @color-text1;

      }
      span:first-child{
        margin-right: .2rem;
        color: @color-text1;

      }
    }
    input{
      background-color: @color-assist3;
      width: 6.33rem;
      height: .68rem;
      line-height: .68rem;
      text-align: center;
      border-radius: .3rem;
      font-size: @font-size-medium;
      font-family: @font-family-text;
      color: @color-text1;


    }
  }
}

</style>

