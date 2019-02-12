<template lang="html">
  <div class="Mycoupons">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>我的优惠券</i>
      </span>
    </v-header>
    <section class="wapper">
        <div class="tabs">
          <Tabs value="name1">
            <TabPane label="未使用" name="name1">
              <div class="content">
                <div class="my_section">
                  <div class="inputBox">
                    <input type="text">
                    <span class="button" @click="get">兑换</span>
                  </div>
                </div>
                <div class="item">
                  <div class="right">
                    <div class="title">
                      美赞臣奶粉专用[除美赞臣一段不参加，其他可用]
                    </div>
                    <div class="time clearfix">
                      <p class="fl">
                        <span>有效期:</span><br>
                        <span>2017.11.12-2017.12.12</span>
                      </p>
                      <div class="fr">
                        <v-bt4 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title" >立即使用</span></v-bt4>
                      </div>
                    </div>
                  </div>
                  <div class="left clearfix">
                    <div class="triangle-border-left fl">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div class="block fl">
                      <i>￥</i>
                      <span>50</span><br>
                      <i>满300可用</i>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="right">
                    <div class="title">
                      美赞臣奶粉专用[除美赞臣一段不参加，其他可用]
                    </div>
                    <div class="time clearfix">
                      <p class="fl">
                        <span>有效期:</span><br>
                        <span>2017.11.12-2017.12.12</span>
                      </p>
                      <div class="fr">
                        <v-bt4 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title" >立即使用</span></v-bt4>
                      </div>
                    </div>
                  </div>
                  <div class="left clearfix">
                    <div class="triangle-border-left fl">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div class="block fl">
                      <i>￥</i>
                      <span>50</span><br>
                      <i>满300可用</i>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane label="已使用" name="name2">
             <div class="content">
                <div class="item type02">
                  <div class="right">
                    <div class="title">
                      美赞臣奶粉专用[除美赞臣一段不参加，其他可用]
                    </div>
                    <div class="time clearfix">
                      <p class="fl">
                        <span>有效期:</span><br>
                        <span>2017.11.12-2017.12.12</span>
                      </p>
                      <div class="fr">
                        <v-bt4 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title" >立即使用</span></v-bt4>
                      </div>
                    </div>
                    <div class="flagImg"></div>
                  </div>
                  <div class="left clearfix">
                    <div class="triangle-border-left fl">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div class="block fl">
                      <i>￥</i>
                      <span>50</span><br>
                      <i>满300可用</i>
                    </div>
                  </div>
                </div>
                <div class="item type02">
                  <div class="right">
                    <div class="title">
                      美赞臣奶粉专用[除美赞臣一段不参加，其他可用]
                    </div>
                    <div class="time clearfix">
                      <p class="fl">
                        <span>有效期:</span><br>
                        <span>2017.11.12-2017.12.12</span>
                      </p>
                      <div class="fr">
                        <v-bt4 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title" >立即使用</span></v-bt4>
                      </div>
                    </div>
                    <div class="flagImg"></div>

                  </div>
                  <div class="left clearfix">
                    <div class="triangle-border-left fl">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div class="block fl">
                      <i>￥</i>
                      <span>50</span><br>
                      <i>满300可用</i>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
             <TabPane label="已过期" name="name3">
                         <div class="content">
                <div class="item type03">
                  <div class="right">
                    <div class="title">
                      美赞臣奶粉专用[除美赞臣一段不参加，其他可用]
                    </div>
                    <div class="time clearfix">
                      <p class="fl">
                        <span>有效期:</span><br>
                        <span>2017.11.12-2017.12.12</span>
                      </p>
                      <div class="fr">
                        <v-bt4 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title" >立即使用</span></v-bt4>
                      </div>
                    </div>
                    <div class="flagImg"></div>
                  </div>
                  <div class="left clearfix">
                    <div class="triangle-border-left fl">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div class="block fl">
                      <i>￥</i>
                      <span>50</span><br>
                      <i>满300可用</i>
                    </div>
                  </div>
                </div>
                <div class="item type03">
                  <div class="right">
                    <div class="title">
                      美赞臣奶粉专用[除美赞臣一段不参加，其他可用]
                    </div>
                    <div class="time clearfix">
                      <p class="fl">
                        <span>有效期:</span><br>
                        <span>2017.11.12-2017.12.12</span>
                      </p>
                      <div class="fr">
                        <v-bt4 @click.native="$router.push({ name: '分类页', params: { 'productid': 123 }})"><span slot="title" >立即使用</span></v-bt4>
                      </div>
                    </div>
                    <div class="flagImg"></div>

                  </div>
                  <div class="left clearfix">
                    <div class="triangle-border-left fl">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div class="block fl">
                      <i>￥</i>
                      <span>50</span><br>
                      <i>满300可用</i>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
    </section>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Bt4 from '@/common/base/button/bt4.vue';
import listsTobuy from '@/http/mock.js' //模拟数据
 export default {
          components:{
          'v-header':Header,
          'v-bt4': Bt4
        },
        data () {
            return {
              datas:''
            }
        },
        methods: {
          get(){
            this.$Message.error('您的兑换码输入有误，请重新输入');
          }
        },
      mounted(){
      }
    }


</script>

<style lang="less">
@import '../assets/fz.less';
.Mycoupons{
.ivu-tabs-ink-bar{
  visibility: hidden;
}
.content{
  background-color: @color-assist4;
  padding: .2rem .24rem;
  .item{
    margin-top: .2rem;
    background: #fff;
    display: flex;
    height: 1.98rem;
    &.type02{
      .left{
        .triangle-border-left{
          i{
             display: block;
              border: .03rem solid transparent;
              border-right: .06rem solid @color-text2;
              border-left: .06rem solid #fff;
              width: 0;
              height: .02rem;
          }
        }
        .block{
          background: @color-text2;
        }

      }
      .right .button{
         color: @color-text2;
         .ba(@color-text2,.22rem);
          margin-top: .11rem;
      }
      .flagImg{
        display: inline-block;
        height: 1.2rem;
        width: 1.2rem;
        .bg-image('/images/used');
        background-size: cover;
        position: absolute;
        right: .28rem;
        top: .28rem;

      }
    }
    &.type03{
      .left{
        .triangle-border-left{
          i{
             display: block;
              border: .03rem solid transparent;
              border-right: .06rem solid @color-text2;
              border-left: .06rem solid #fff;
              width: 0;
              height: .02rem;
          }
        }
        .block{
          background: @color-text2;
        }

      }
      .right .button{
         color: @color-text2;
         border-color: @color-text2;
         .ba(@color-text2,.22rem);
          margin-top: .11rem;
      }
      .flagImg{
        display: inline-block;
        height: 1.2rem;
        width: 1.2rem;
        .bg-image('/images/overdue');
        background-size: cover;
        position: absolute;
        right: .28rem;
        top: .28rem;

      }
    }
    flex: 1;
    .right{  
      flex: 1;
    }
    .left{
        order: -1;
        flex: 0 0 2.18rem;
        text-align: center;
        .triangle-border-left{
          display: inline-block;
          overflow: hidden;
          height: 100%;
          i{
              display: block;
              border: .03rem solid transparent;
              border-right: .06rem solid @color-main1;;
              border-left: .06rem solid #fff;
              width: 0;
              height: .02rem;
          }
        }
        .block{
          display: inline-block;
          background: @color-main1;
          color: @color-text3;
          font-family: 'SF TEXT Regular';   
          height: 100%; 
          width: 94%;      
          i{
            font-size: @font-size-small;
            &:last-child{
              font-family:@font-family-text;
            }
          }
          span{
            font-size: .9rem;

          }        
        }



    }
    .right{
      padding:  .24rem .2rem;
      position: relative;
      .title{
        font-family: @font-family-text;
        color: @color-text1;
        font-size: @font-size-medium;
      }

      .button{
          font-size: @font-size-small;
          width: 1.36rem;
          height: .4rem;
          line-height: .4rem;
          position: absolute;
          bottom: 0;
          right: .48rem;
          border-radius: .22rem;
      }
      .time{
        color: @color-text2;
        font-family: @font-family-text;
        font-size: 0;
        position: absolute;
        bottom:.24rem;
        width: 100%;
        i,span{
          font-size: @font-size-small-s;

        }
      }
    }
  }
  .my_section{
      font-family: @font-family-text;
      .inputBox{
        height: .88rem;
        line-height: .88rem;
        font-size: 0;
        position: relative;
        input{
          padding-left: .36rem;
          font-size: @font-size-medium;
          color: @color-text1;
          background: #fff;
          width: 5.03rem;
          font-family:  @font-family-text;
        }
          .button{
          display: inline-block;
          font-size: @font-size-large;
          position: absolute;
          right: 0;
          color: @color-text3;
          background: @color-main1; 
          width: 1.9rem;
          height: .88rem;
          line-height: .88rem;
          vertical-align: middle;
          text-align: center;
          border-radius: .06rem;
        }
      }

    }
}
.ivu-tabs-bar{
  border:none;
  margin-bottom: 0;
  .bd(@color-assist3);
}


.ivu-tabs-nav-scroll{
  padding: 0 .08rem;
  height: .88rem;
  line-height: .88rem;
}
.ivu-tabs-nav{
  width: 100%;
  padding-right: .42rem;
}
.ivu-tabs-tab{
  margin: 0;
  padding: 0 .16rem;
  font-size: @font-size-medium-x;
  color: @color-text1;
  width: 33.333333%;
  text-align: center;
}
.ivu-tabs-tab-active{
  position: relative;
  color: @color-main1 !important;
  &::after{
    content: '';
    position: absolute;
    left: 50%;
    margin-left: -.44rem;
    bottom: 0.02rem;
    width: .88rem;
    height: .04rem;
    background: @color-main1;
  }
}
}
</style>
