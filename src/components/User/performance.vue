<!-- 业绩管理 -->
<template lang="html">
<div class="performance">
  <v-header class="header" :share=false :iconTheme=true>
      <span slot="title">
       <i>业绩管理</i>
      </span>
</v-header>
<v-framework>
  <span slot="content">
      <div class="title clearfix">
            <v-title1><span slot="title">业绩概况</span></v-title1>
        </div>
        <Collapse v-model="value2" accordion>
            <Panel name="1">
                本月累计业绩 <Icon type="ios-arrow-down"></Icon>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-order"></span>
                    <span class="text">成交订单</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货订单数</span>
                      <span class="fr">10笔</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货订单数</span>
                      <span class="fr">10笔</span>
                    </p>
                  </div>
                </div>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-shop"></span>
                    <span class="text">成交商品数</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货商品数</span>
                      <span class="fr">10件</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货商品数</span>
                      <span class="fr">10件</span>
                    </p>
                  </div>
                </div>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-price"></span>
                    <span class="text">成交总金额</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货总金额</span>
                      <span class="fr">2000元</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货总金额</span>
                      <span class="fr">600元</span>
                    </p>
                  </div>
                </div>
            </Panel>
        </Collapse>
        <Collapse v-model="value" class="floor2" accordion>
            <Panel name="1">
                2017年8月 <Icon type="ios-arrow-down"></Icon>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-order"></span>
                    <span class="text">成交订单</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货订单数</span>
                      <span class="fr">10笔</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货订单数</span>
                      <span class="fr">10笔</span>
                    </p>
                  </div>
                </div>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-shop"></span>
                    <span class="text">成交商品数</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货商品数</span>
                      <span class="fr">10件</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货商品数</span>
                      <span class="fr">10件</span>
                    </p>
                  </div>
                </div>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-price"></span>
                    <span class="text">成交总金额</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货总金额</span>
                      <span class="fr">2000元</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货总金额</span>
                      <span class="fr">600元</span>
                    </p>
                  </div>
                </div>
            </Panel>
            <Panel name="2">
                2017年8月 <Icon type="ios-arrow-down"></Icon>
                                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-order"></span>
                    <span class="text">成交订单</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货订单数</span>
                      <span class="fr">10笔</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货订单数</span>
                      <span class="fr">10笔</span>
                    </p>
                  </div>
                </div>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-shop"></span>
                    <span class="text">成交商品数</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货商品数</span>
                      <span class="fr">10件</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货商品数</span>
                      <span class="fr">10件</span>
                    </p>
                  </div>
                </div>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-price"></span>
                    <span class="text">成交总金额</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货总金额</span>
                      <span class="fr">2000元</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货总金额</span>
                      <span class="fr">600元</span>
                    </p>
                  </div>
                </div>
            </Panel>
            <Panel name="3">
                2017年8月 <Icon type="ios-arrow-down"></Icon>
                               <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-order"></span>
                    <span class="text">成交订单</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货订单数</span>
                      <span class="fr">10笔</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货订单数</span>
                      <span class="fr">10笔</span>
                    </p>
                  </div>
                </div>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-shop"></span>
                    <span class="text">成交商品数</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货商品数</span>
                      <span class="fr">10件</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货商品数</span>
                      <span class="fr">10件</span>
                    </p>
                  </div>
                </div>
                <div slot="content" class="item">
                  <p class="title">
                    <span class="icon-price"></span>
                    <span class="text">成交总金额</span>
                  </p>
                  <div class="textBox">
                    <p class="clearfix">
                      <span class="fl">已确认收货总金额</span>
                      <span class="fr">2000元</span>
                    </p>
                    <p class="clearfix">
                      <span class="fl">未确认收货总金额</span>
                      <span class="fr">600元</span>
                    </p>
                  </div>
                </div>
            </Panel>
        </Collapse>
  </span>
  </v-framework>

</div>
</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据
  import Framework from '@/components/User/framework.vue'
  import Title1 from '@/common/base/floor-title/title1.vue';
  import Header from '@/common/_header.vue'

  export default {
    data () {
            return {
                value: '',
                value2: '1'
            }
        },
    components: {
      'v-framework': Framework,
      'v-title1': Title1,
      'v-header':Header,

    },
    mounted(){
    }
  }
</script>

<style lang="less" >
  @import '../../assets/fz.less';

  .performance{
    .title{
      margin-bottom: .2rem;
    }
      .ivu-icon-arrow-right-b{
    
    display: none;
  }
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
.floor2.ivu-collapse > .ivu-collapse-item > .ivu-collapse-header{
  padding: .3rem .24rem;
}

  .ivu-collapse{
    border:none;
    background: #fff;
    margin-bottom: .2rem;

  }
  .ivu-collapse>.ivu-collapse-item{
    border:none;
  }
  .ivu-collapse>.ivu-collapse-item.ivu-collapse-item-active>.ivu-collapse-header>i{
        transform: rotate(180deg);
  }
  .ivu-collapse>.ivu-collapse-item:last-child .ivu-collapse-header{
    border:none;
  }
.ivu-collapse>.ivu-collapse-item>.ivu-collapse-header{
  padding: .2rem .24rem;
  line-height: @font-size-medium;
  height: @font-size-medium;
  box-sizing: content-box;
  font-family: @font-family-text;
  font-size: @font-size-medium;
  color: @color-text1;
  position: relative;
  .bd(@color-assist3);
  .ivu-icon{
    position: absolute;
    right: .24rem;
  }
}
.ivu-collapse-content{
    padding:0;
    margin-top: -1px;
  .ivu-collapse-content-box{
    padding: 0;
    .item{
      .bt(@color-assist3);
      padding: .2rem .24rem 0 .28rem;

      &:first-child{
      
      }
    }
    .title{
      font-size: 0;
      .icon-order,.icon-shop,.icon-price{
        vertical-align: middle;   

      }
      .text{
        font-size: @font-size-small;
        font-family: @font-family-text;
        color: @color-text2; 
        margin-left: .24rem; 
        line-height: .28rem;     
        vertical-align: middle; 
      }

    }
    .textBox{
      padding: .15rem 0 .05rem .44rem;
      p{
        font-size: @font-size-medium;
        color: @color-text1;
        font-family: @font-family-text;
        padding: .15rem 0;
      }
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

  }


</style>
