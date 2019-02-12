<!-- 我的客户信息 -->
<template lang="html">
<div class="">
  <v-header class="header" :share=false :iconTheme=false>
        <span slot="title">
         <i>我的客户</i>
        </span>
  </v-header>
 <div class="wapper">
  <nav>
    <span :class="{ active: toggle===0 }" @click="toggle=0">绑定时间</span>
    <span :class="{ active: toggle===1 }" @click="toggle=1">总销售情况</span>
    <span :class="{ active: toggle===2 }" @click="toggle=2">月销售情况</span>
  </nav>
  <div class="box">
    <ul>
      <li @click="$router.push({ name: '我的客户信息详情页', params: { 'userid': 123 }})">
        <div class="clearfix">
          <p class="fl">
            <span class="imgbox">
              <img v-lazy="'http://img.hb.aicdn.com/1ddb3cdef7236c7b5a082667933e8f7acac168f2f005-2d9gwP_fw658'" alt="">
            </span>
          </p>
          <p class="fl account">
            <span>账号：<i class="num_">13737850023</i><i class="num_">(ID:8958962878)</i></span><br>
            <span>绑定时间：<i class="num_">2007.12.12</i></span>
          </p>
          <Icon type="ios-arrow-right"></Icon>
        </div>
        <Row class="floor">
            <Col span="12" class="fr_">
             <div class="floorBox">
                <span class="num_">200</span>
                <br>
                <span>总成交商品</span>      
             </div>       
            </Col>
            <Col span="12" class="fl_">
            <div class="floorBox">
               <span class="num_">60</span>
              <br>
              <span>月成交商品</span>
            </div>
            </Col>
        </Row>
      </li>
      <li @click="$router.push({ name: '我的客户信息详情页', params: { 'userid': 123 }})">
        <div class="clearfix">
          <p class="fl">
            <span class="imgbox">
              <img v-lazy="'http://img.hb.aicdn.com/1ddb3cdef7236c7b5a082667933e8f7acac168f2f005-2d9gwP_fw658'" alt="">
            </span>
          </p>
          <p class="fl account">
            <span>账号：<i class="num_">13737850023</i><i class="num_">(ID:8958962878)</i></span><br>
            <span>绑定时间：<i class="num_">2007.12.12</i></span>
          </p>
          <Icon type="ios-arrow-right"></Icon>
        </div>
        <Row class="floor">
            <Col span="12" class="fr_">
             <div class="floorBox">
                <span class="num_">200</span>
                <br>
                <span>总成交商品</span>      
             </div>       
            </Col>
            <Col span="12" class="fl_">
            <div class="floorBox">
               <span class="num_">60</span>
              <br>
              <span>月成交商品</span>
            </div>
            </Col>
        </Row>
      </li>
    </ul>
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
        toggle:0
            }
        },
    components: {
      'v-header':Header
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
nav{
  position: relative;
  width: 100%;
  font-size: 0;
  .bd(@color-assist3);
  background-color: #fff;
  span{
    display: inline-block;
    width: 33.3%;
    font-size: @font-size-medium-x;
    color: @color-text1;
    font-family: @font-family-text;
    text-align: center;
    height: .68rem;
    line-height: .68rem;
    &.active{
      color: @color-main1;
    }
  }
}
.box{
  background: @color-assist4;
  padding: .2rem .24rem;
  ul>li{
  background: #fff;
  margin-bottom: .2rem;
  padding:.2rem;
  position: relative;
  .ivu-icon-ios-arrow-right{
    position: absolute;
    right: .2rem;
    top: .5rem;
    font-size: @font-size-medium;
    color: @color-text1;
  }
    .imgbox{
      display: inline-block;
      margin-right: .24rem;
      width: 1.2rem;
      height: 1.2rem;
      overflow: hidden;
      border-radius: 50%;
      img{
        width: 100%;
      }
    }
    .account{
      margin-top: .2rem;
      font-size: @font-size-medium;
      color: @color-text1;
      span{
        &:first-child{
          i:first-child{
            margin-right:.12rem;
          }
          i:last-child{
            color: @color-text2;
          }
        }
      }
    }
  }
  .floor{
    font-family: @font-family-text;
    color: @color-text2;
    font-size: 0;
    span{
      font-size: @font-size-small;
    }
    .num_{
      font-size: @font-size-large-x;
      color: @color-main1;
    }
    .fr_{
      text-align: right;
      .br(@color-assist3);
      padding-right: .4rem;
    }
    .fl_{
      padding-left: .4rem;
      text-align: left;
    }
  }
  .floorBox{
    display: inline-block;
    text-align: center;
  }
}
</style>
