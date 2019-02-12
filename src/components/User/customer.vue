<template lang="html">
<div class="customer">
  <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>客户信息</i>
      </span>
</v-header>
<div class="wapper">
  <div class="my_section" style="position:relative;">
    <ul class="list">
      <li class="clearfix">
        <div>
          <span>商户ID：<i class="num_">658989885</i></span>
        </div>
      </li>
      <li class="clearfix">
        <div>
          <span>主体名称：<i class="num_">658989885</i></span>
        </div>
      </li>
      <li class="clearfix">
        <div>
          <span>联系人：<i class="num_">王女士</i></span>
        </div>
      </li>
      <li class="clearfix">
        <div>
          <span>联系电话：<i class="num_">13437860059</i></span>
        </div>
      </li>
      <li class="clearfix">
        <div>
          <span>绑定时间：<i class="num_">2015.11.20</i></span>
        </div>
      </li>
      <li class="clearfix">
        <div>
          <span>电子邮件：<i class="num_">23246071@qq.com</i></span>
        </div>
      </li>
      <li class="clearfix">
        <div>
          <span>商户地址：<i class="num_">广东省荔湾区阿萨德刚玉吴越古道食发鬼</i></span>
        </div>
      </li>
       <v-g-bt :name="'unbindpanel'">
           <div class="bt_" slot="content">
            <v-tags5 @click.native="show"><span slot="title" >申请解除绑定</span></v-tags5>
          </div>
      </v-g-bt>
     
    </ul>
  </div>
  <div class="my_section">
     <Collapse v-model="value" class="floor2" accordion>
            <Panel name="1">
                本月有效订单 <Icon type="ios-arrow-down"></Icon>
                <div slot="content" class="item">
                 <div class="title clearfix">
                    <div class="item1">订单号</div>
                    <div class="item2">商品</div>
                    <div class="item3">灌数</div>
                 </div>
                 <div class="text clearfix">
                    <div class="item1"><div><span>TY875528589662477</span></div></div>
                    <div class="item2"><p>美赞臣5段2罐装</p><p>美赞臣5段2罐装</p></div>
                    <div class="item3"><p>2</p><p>2</p></div>
                 </div>
                 <div class="accounting">
                   推广金额核算：未确认收货，未计算
                 </div>
                </div>
                <div slot="content" class="item">
                 <div class="title clearfix">
                    <div class="item1">订单号</div>
                    <div class="item2">商品</div>
                    <div class="item3">灌数</div>
                 </div>
                 <div class="text clearfix">
                    <div class="item1"><div><span>TY875528589662477</span></div></div>
                    <div class="item2"><p>美赞臣5段2罐装</p><p>美赞臣5段2罐装</p></div>
                    <div class="item3"><p>2</p><p>2</p></div>
                 </div>
                 <div class="accounting">
                   推广金额核算：未确认收货，未计算
                 </div>
                </div>
            </Panel>
        </Collapse>
  </div>
</div>
<v-mask></v-mask>
 <v-g-panel :name="'unbindpanel'">
    <div slot="content">
      <div class="unbindTips">
          <p class="tips">提示</p>
          <p class="text">您将申请解除与该客户的绑定关系，一旦申请通过，该客户的交易将不再计算您的推广金</p>
          <p class="bordertop">
            <Row class="button">
              <Col span="12" @click.native="close">
                <span>返回页面</span>
              </Col>
              <Col span="12" class="special" @click.native="unbind_">
                <span>取消绑定</span>
              </Col>
            </Row>
          </p>
        </div>
    </div>
</v-g-panel>
</div>

</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据
  import Header from '@/common/_header.vue'
  import Tags5  from '@/common/base/tags/tags5.vue'
  import Mask from '@/common/base/mask.vue';
  import GPanel from '@/common/base/modal/general/panel.vue';
  import GBt from '@/common/base/modal/general/bt.vue';
  export default {
        data () {
            return {
                value: ''
            }
        },
    components: {
      'v-header':Header,
      'v-tags5': Tags5,
      'v-mask': Mask,
      'v-g-panel': GPanel,
      'v-g-bt':GBt
    },
    mounted(){
    },
    methods: {
      show(){
        $('#mask').addClass('show');
      },
      close(){
        $('#mask').trigger('click');
      },
      unbind_(){
        this.$Message.success('申请成功！请耐心等待');
        this.close();
      }
    },

  }
</script>

<style lang="less" >
  @import '../../assets/fz.less';
  .customer{
    .unbindTips{
      padding: .15rem 0 0 0;
      .tips{
        font-size: @font-size-medium-x;
        font-family: @font-family-text;
        color: @color-text1;
        text-align: center;
        line-height: .6rem;
      }
      .text{
        line-height: .4rem;
        font-size: @font-size-medium;
        color: @color-text1;
        font-family: @font-family-text;
        padding: 0 .36rem 1.12rem .36rem;

      }
      .button{
        font-size: @font-size-medium-xx;
        font-family: @font-family-text;
        color: @color-text1;
        text-align: center;
        line-height: .98rem;
        height: .98rem;
        .bt(@color-assist3);
         .special{
          color: @color-text3;
          background-color:#ff0504;
          border-bottom-right-radius: .06rem;
        }
      }
    }
    .tag{
      width: 2rem !important;
      height: .48rem !important;
      line-height: .48rem !important;
      padding: 0 !important;
      border-radius: .06rem !important;
      margin-right: 0 !important;
      .extend-click();

    }
    .wapper{
    background-color: @color-assist4;
    padding-bottom: 0;
  }
  .bt_{
    position: absolute;
    right: 0;
    top: 0;
    width: 2.26rem;
    height: 1.74rem;
    line-height: 1.74rem;
    text-align: center;
    background: #fff;
  }
  .ivu-collapse-content{
    padding: 0;
    .ivu-collapse-content-box{
      background-color: @color-assist4;
      padding: 0;
      .item{
        margin-bottom: .2rem;
        background-color: #fff;
        .title{
          font-family: @font-family-text;
          font-size: @font-size-small;
          color: @color-text2;
          height: .64rem;
          line-height: .64rem;
          .bd(@color-assist3);
          padding: 0 .24rem;
        }
        .text{
          padding: .05rem .24rem;
          font-size: @font-size-medium;
          font-family: @font-family-text;
          color: @color-text1;
          .bd(@color-assist3);
          .item1{
            color: @color-text2;
           >div{
            width: 1.54rem;
            word-wrap:break-word;
            margin-top:.15rem;
           }
          }
          .item2{
            width: 3.66rem;
            float: left;
            line-height: .56rem;

          }
          .item3{
            float: left;
            line-height: .56rem;
            
          }          
        }
        .accounting{
           font-size: @font-size-medium;
          font-family: @font-family-text;
          color: @color-text1;
          padding: 0 .24rem;
          line-height: .68rem;
        }
        .item1{
          width: 2.62rem;
          float: left;
        }
        .item2{
          width: 3.66rem;
          float: left;
        }
        .item3{
          float: left;
          
        }
      }
    }

  }
 .my_section{
          margin-top: .2rem;
          background-color: #fff;
          .list{
            li{
              padding: 0 .24rem;
              line-height: .88rem;
              height: .88rem;
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
  floor2.ivu-collapse > .ivu-collapse-item > .ivu-collapse-header{
  padding: .3rem .24rem;
}
  .ivu-icon-arrow-right-b{
    display: none;
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
  padding: .3rem .24rem;
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
  
}

</style>

