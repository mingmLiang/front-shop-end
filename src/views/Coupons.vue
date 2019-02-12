<template lang="html">
  <div class="Coupons">
    <v-header class="header">
      <span slot="title">
       <i>领券中心</i>
      </span>
    </v-header>
    <section class="wapper grey">
      <div class="title">
        你有三张优惠券快到期，请尽快使用！
      </div>
      <div class="item clearfix">
        <div class="imgBox fl">
          <img v-lazy="'http://hbimg.b0.upaiyun.com/013a63c0c2b529429eef0a075c9a512171548020c0913-goL7UG_fw658'" alt="">
        </div>
        <div class="text fl">
          <p class="name">南间做社期图志包严能维展南我部须结度向很九受住非铁实商角果新东多据电原</p>
          <p class="time">有效期：2017.10.11-11.11</p>
          <div class="price">
            <span class="num">50</span>
            <v-tags6><span slot="title" >满500可用</span></v-tags6>
          </div>
        </div>
        <div>
          <div class="couponsBox fl">
            <div style="position:relative;">
              <div class="myChart" :style="{width: '1.08rem', height: '1.08rem'}"></div>
              <div class="myChartTips">
                <p>已抢</p>
                <p>89%</p>
              </div>              
            </div>
            <v-bt1 @click.native="getCoup()"><span slot="title">立即领取</span></v-bt1>
          </div>
        </div>
      </div>
      <div class="item clearfix">
        <div class="imgBox fl">
          <img v-lazy="'http://hbimg.b0.upaiyun.com/013a63c0c2b529429eef0a075c9a512171548020c0913-goL7UG_fw658'" alt="">
        </div>
        <div class="text fl">
          <p class="name">南间做社期图志包严能维展南我部须结度向很九受住非铁实商角果新东多据电原</p>
          <p class="time">有效期：2017.10.11-11.11</p>
          <div class="price">
            <span class="num">50</span>
            <v-tags6><span slot="title" >满500可用</span></v-tags6>
          </div>
        </div>
        <div>
          <div class="couponsBox fl">
            <div class="imgbox type01"></div>
            <v-bt2 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title" >进场看看</span></v-bt2>
          </div>
        </div>
      </div>
      <div class="item clearfix">
        <div class="imgBox fl">
          <img v-lazy="'http://hbimg.b0.upaiyun.com/013a63c0c2b529429eef0a075c9a512171548020c0913-goL7UG_fw658'" alt="">
        </div>
        <div class="text fl">
          <p class="name">南间做社期图志包严能维展南我部须结度向很九受住非铁实商角果新东多据电原</p>
          <p class="time">有效期：2017.10.11-11.11</p>
          <div class="price">
            <span class="num">50</span>
            <v-tags6><span slot="title" >满500可用</span></v-tags6>
          </div>
        </div>
        <div>
          <div class="couponsBox fl">
            <div class="imgbox type02"></div>
            <v-bt3 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title">进场看看</span></v-bt3>
          </div>
        </div>
      </div>
      <div class="item clearfix">
        <div class="imgBox fl">
          <img v-lazy="'http://hbimg.b0.upaiyun.com/013a63c0c2b529429eef0a075c9a512171548020c0913-goL7UG_fw658'" alt="">
        </div>
        <div class="text fl">
          <p class="name">南间做社期图志包严能维展南我部须结度向很九受住非铁实商角果新东多据电原</p>
          <p class="time">有效期：2017.10.11-11.11</p>
          <div class="price">
            <span class="num">50</span>
            <v-tags6><span slot="title" >满500可用</span></v-tags6>
          </div>
        </div>
        <div>
          <div class="couponsBox fl">
            <div class="imgbox type03"></div>
            <v-bt1 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title">立即使用</span></v-bt1>
          </div>
        </div>
      </div>
      <div class="item clearfix">
        <div class="imgBox fl">
          <img v-lazy="'http://hbimg.b0.upaiyun.com/013a63c0c2b529429eef0a075c9a512171548020c0913-goL7UG_fw658'" alt="">
        </div>
        <div class="text fl">
          <p class="name">南间做社期图志包严能维展南我部须结度向很九受住非铁实商角果新东多据电原</p>
          <p class="time">有效期：2017.10.11-11.11</p>
          <div class="price">
            <span class="num">50</span>
            <v-tags6><span slot="title" >满500可用</span></v-tags6>
          </div>
        </div>
        <div>
          <div class="couponsBox fl">
            <p class="starting">距离开始还剩</p>
            <div class="countdown">
              <span class="num">05</span>
              <span>:</span>
              <span class="num">05</span>
              <span>:</span>
              <span class="num">06</span>
            </div>
            <v-bt2 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title" >进场看看</span></v-bt2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Tags6 from '@/common/base/tags/tags6.vue';
import Bt1 from '@/common/base/button/bt1.vue';
import Bt2 from '@/common/base/button/bt2.vue';
import Bt3 from '@/common/base/button/bt3.vue';

 export default {
          components:{
          'v-header':Header,
          'v-tags6': Tags6,
          'v-bt1': Bt1,
          'v-bt2': Bt2,
          'v-bt3': Bt3,
        },
        data () {
            return {
              datas:''
            }
        },
        methods: {
        getCoup(){
          this.$Message.success('领取成功');
        },
        drawLine(){
        // 基于准备好的dom，初始化echarts实例

        let myChart = this.$echarts.init($('.myChart')[0])
        // 绘制图表
        myChart.setOption({
            tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            series: [{
                name: '领取情况',
                type: 'pie',
                radius: ['85%', '100%'],
                avoidLabelOverlap: false,
                color: ['transparent','#ee3f43','#ffcfd0','transparent'],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 100/9,
                }, {
                    value: 600/9
                },{
                    value: 200/9
                }, {
                    value: 100/9
                }],

            }]
        });
    }
        },
      mounted(){
          this.drawLine();
      }
    }


</script>

<style lang="less" scoped>
@import '../assets/fz.less';
.wapper{
  padding-top: 1.74rem;
  .title{
    height: .76rem;
    line-height: .76rem;
    color: @color-text3;
    background-color: @color-main1;
    font-size: @font-size-small;
    text-align: center;
    position: fixed;
    width: 100%;
    top: .88rem;
    z-index: 15;
    left: 50%;
    max-width: 750px;
    margin-left: -3.75rem;
  }
  .myChart{
    margin: .24rem auto   .12rem  auto;
    transform: rotate(180deg);
    box-sizing:border-box;

  }
  .countdown{
    margin-top: .2rem;
    margin-bottom: .3rem;
    text-align: center;
    color:  @color-main1;
    .num{
      display: inline-block;
      width: .36rem;
      height: .36rem;
      text-align: center;
      background: @color-main1;
      color: @color-text3;
      border-radius: .04rem;
      font-family: @font-family-num;
    }
  }
  .myChartTips{
    position: absolute;
    z-index: 99;
    color: @color-main1;
    font-size: @font-size-small-s;
    top: .26rem;
    left: 50%;
    margin-left: -.22rem;
  }
  .item{
    padding: .2rem .12rem .2rem .2rem;
    margin-top: .2rem;
    background: #fff;
    .imgBox{
      width: 1.58rem;
      height: 1.48rem;
      margin-top: .2rem;
      overflow: hidden;
      .ba(@color-assist3,0);
      margin-right: .24rem;
      img{
        width: 100%;
      }
    }
    .couponsBox{
      .starting{
        margin-top: .12rem;
        text-align: center;
        font-size: @font-size-small-s;
        color: @color-text1;
      }
      .imgbox{
        display: block;
        width: 1.23rem;
        height: 1rem;
        margin: .24rem auto .24rem auto;
        background-size: cover;
        &.type01{
          .bg-image('/images/brought');
        }
        &.type02{
          .bg-image('/images/invalidation');
        }
        &.type03{
          .bg-image('/images/received');
        }
      }
    }
    .text{
      font-size: @font-size-medium;
      font-family: @font-family-text;
      color: @color-text1;
      width: 3.24rem;
      margin-top: .12rem;
      .name{
        .no-wrap(2);
      }
      .time{
        color: @color-text2;
        font-size: @font-size-small-s;
        font-family: @font-family-text;
        padding-top: .1rem;
        .no-wrap(1);

      }
      .price{
        .no-wrap(1);

        .num{
          font-size: @font-size-large-xx;
          color: #ee3f43;
          font-family: @font-family-text;

        }
        .tag{
          border-radius: .02rem;
        }
      }
    }
  }
}
</style>
