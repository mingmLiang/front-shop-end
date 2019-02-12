<template lang="html">
  <div class="wapper">
    <div class="panel">
      <ul class="something" v-if='carList'>
        <li v-for="(k,i) in carList" @click="$router.push({ name: '详情页', query: { 'pro_id': k.pro_id }})">
        <div class="floor">
            <div class="floor_title" @click.stop="">
<!--                <label class="true icon-check" :class="{'icon-tochecked':!k.choseBool} ">
                <input type="checkbox" v-model="k.choseBool">
              </label> -->
              <span class="text" v-if="k.city">
                {{k.city}}仓库
              </span>
            </div>
            <Row class="tips">
              <Col span="18" class="left">
                <v-tags2 v-for="(item_,i) in k.tags.split(',')"><span slot="title" >{{item_}}</span></v-tags2>
                <span>春季新品上市</span>
              </Col>
              <Col span="6" class="right">
                 <span  @click.stop="$router.push({name: '分类页'})">去凑单<Icon type="ios-arrow-right"></Icon></span>
              </Col>
            </Row>
            <div class="product-list">
              <div class="something-left" @click.stop="toggle">
              <label class="true icon-check" :class="{'icon-tochecked':!k.choseBool}">
                <input type="checkbox" v-model="k.choseBool">
              </label>
            </div>
            <div class="something-middle">
              <img v-lazy="k.image.split(';')[0]" alt="" v-if="k.image">
            </div>
            <div class="something-right">
              <p class="title">{{k.pro_name}}</p>
              <p class="size">规格：{{k.spe_name}}</p>
              <div class="right-bottom clearfix">
                  <p class="fl price">
                    <span>￥</span>
                    <span><i>{{k.sale_price}}</i></span>
                  </p>
                  <p class="fr number" @click.stop>
                    <span @click.stop="decrease(k)" :class='{ disable: k.cart_count<2 }'>-</span>
                    <span v-model.trim.number="k.cart_count">{{k.cart_count}}</span>
                    <span @click.stop="k.cart_count++;updateCar(k);">+</span>
                  </p>
              </div>
            </div>
            </div>
          </div>
          <!-- 赠品 -->
<!--           <v-g-bt :name="'giftShow'"  @click.native.stop class="giftBt">
          <div class="floor2" slot="content">
            <div class="title"><span>赠品</span><span>美赞臣大些礼包全棉时代婴儿手帕1份</span><span class="icon icon-top"></span></div>
            <div class="gift clearfix">
              <div class="imgbox fl">
                <img v-lazy="'http://img.hb.aicdn.com/cffb2d79ff7ac8f519aaa1fe33b7d4a9655a0b446d74-w8SF0n_fw658'" alt="">
              </div>
              <div class="text fl">
                <p style="overflow:hidden;"> <v-tags2><span slot="title" >换购</span></v-tags2>
                 荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机壳</p>
                 <p class="cart_count_ clearfix">
                   <span  class="fl price"><span>￥</span> <span><i>9</i><i>.26</i></span></span>
                   <span class="fr">x1</span>
                 </p>
              </div>
            </div>
          </div>
          </v-g-bt> --> 
        </li>
      </ul>
    </div> 
    <!-- 赠品提示面板 -->
<!--     <v-g-panel1 :name="'giftShow'" class="giftPanel">
      <div slot="content" class="giftShow">
        <v-closePanelBt></v-closePanelBt>
        <div class="title">赠品</div>
        <div class="text">
          移动联通电信4G手机壳
        </div>
      </div>
    </v-g-panel1> -->

    <!-- 换购面板 -->
<!--     <v-g-panel1 :name="'redemption'">
      <div slot="content" class="redemption">
        <v-closePanelBt></v-closePanelBt>
        <div class="title">换购商品</div>
        <ul>
          <li>
            <div class="left">
              <div class="iconBox">
                <span class="icon-check"></span>
              </div>
              <div class="imgBox">
                <img v-lazy="'http://img.hb.aicdn.com/cffb2d79ff7ac8f519aaa1fe33b7d4a9655a0b446d74-w8SF0n_fw658'" alt="">
              </div>
            </div>
            <div class="info">
              <p class="title">荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 </p>
              <div class="price">
                <div class="fl">
                  <span>￥</span> 
                  <span>
                    <i>360</i>
                    <i>.26</i>
                  </span>
                </div>
                <div class="fr num">
                  x1
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="top">
          <div class="buttonBox">
          <span class="tips">已换购1/1件</span>
          <span class="bt">确定</span>
        </div>
        </div>
      </div>
    </v-g-panel1> -->
  </div>

</template>

<script>
// 提示登录组件
import Gologin from '@/components/car/gologin.vue'
import Util from '../../util/common'
import Tags2 from '../../common/base/tags/tags2.vue';
import GBt from '@/common/base/modal/general/bt.vue';
import GPanel01 from '@/common/base/modal/general/panel01.vue';
import ClosePanelBt from '@/common/base/modal/closePanelBt.vue';
import  { api } from '@/global/siteConfiguration';

export default {
  props: ["carList"],
  components: {
    'v-gologin': Gologin,
    'v-tags2': Tags2,
    'v-g-bt':GBt,
    'v-g-panel1': GPanel01,
    'v-closePanelBt':ClosePanelBt
  },
  computed: {
  },

  mounted() {




  },
  methods: {
    decrease(k){
      if(k.cart_count>1){
        k.cart_count--;
      }
      this.updateCar(k);
      return;
    },
    updateCar(item){
        let _this=this;
        this.$http.post(api.updateCar, {'cart_id':item.cart_id,'amount':item.cart_count}, function(data){
          
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials()); 
    },
    toggle() {
    }

  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.giftPanel.show{
  bottom: .88rem !important;
}
  .giftBt{
    width: 100%;
  }
.redemption{

  .title{
    color: @color-text1;
    font-size: @font-size-medium-x;
    font-family: @font-family-text;
    text-align: center;
  }
  ul{
    padding-top: .48rem;
    li{
      padding: 0 .24rem;
      display: flex;
      flex: 1;
      height: 2rem;
      .left{
        order: -1;
         flex: 0 0 2.29rem;
        .iconBox{
          width: .45rem;
          display: inline-block;
          vertical-align: middle;

        }
        .imgBox{
          width: 1.6rem;
          height: 1.6rem;
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
          .ba(@color-assist3,.06rem);
          border-radius: .06rem;
          img{
            width: 100%;
          }
        }        
      }

      .info{
        position: relative;
        p{
          text-align: left;          
        }
        .num{
          font-size:@font-size-small;
          color: @color-text1;
        }
        .price{
          position: absolute;
          bottom: .24rem;
          width: 100%;
        }
      }
    }

  }
  .top{
    .bt(@color-assist3);
    .buttonBox{
       display: flex;
       flex: 1;
       height: .98rem;
       line-height: .98rem;
       .tips{
         flex: 0 0 5.22rem;
         order: -1;
         font-family: @font-family-text;
         font-size: @font-size-medium-x;
         color: @color-text1;
         text-align: center;
       }
       .bt{
         font-family: @font-family-text;
         font-size: @font-size-medium-x;
         color: @color-text3;
         background-color: @color-main1;
         display: block;
         width: 100%;
         text-align: center;
       }
    }    
  }

}
.wapper{
  padding-bottom: 1.96rem;
}
.giftShow{
  padding: 0 .24rem .3rem .24rem;
  font-family: @font-family-text;
  color: @color-text1;
  .title{
    font-size: @font-size-medium-x;
    text-align: center;
    margin-bottom: .48rem;
  }
  .text{
    font-size: @font-size-medium;
    margin-bottom: .5rem;
  }
}
.floor2{
  .title{
    color: @color-text1;
    font-family: @font-family-text;
    font-size: @font-size-small-s;
    padding-left: .72rem;
    background-color: #fff3e0;
    height: .56rem;
    line-height: .56rem;
    position: relative;
    span:nth-child(1){
      margin-right:.2rem;
    }
    .icon{
      position: absolute;
      top: -.12rem;
      left: .24rem;
    }
  }
  .imgbox{
    width: 1.6rem;
    height: 1.6rem;
    .ba(@color-assist3,.06rem);
    overflow: hidden;
    margin-right: .24rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .gift{
    padding: .2rem 0 .2rem .7rem;
    .text{
      width: 4.75rem;
      height: 1.62rem;
      .no-wrap(2);
      font-family: @font-family-text;
      color: @color-text1;
      font-size: @font-size-medium-x;
      position: relative;
      .number_{
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    }
  }
  .number_{
    .fl{
      vertical-align: bottom;
    }
    .fr{
      font-size: @font-size-small;
      vertical-align: bottom;

    }
  }
}
.panel {
    width: 100%;
    background-color: @color-assist4;
    padding-top: .2rem;
    label {
          .extend-click();
                    input {
                        opacity: 0;
                        filter: alpha(opacity=0);
                        height: 100%;
                        width: 100%;
                    }
                }
    .something {
        width: 100%;
        background-color: #fff;
        margin-bottom: .2rem;
        li{
          .bd(@color-assist3);
          &:last-child{
            border:none;
          }
        }
         .floor {
          padding: 0 .24rem .22rem .24rem;
          position: relative;

            .floor_title{
              display: block;
              height: .72rem;
              line-height: .72rem;
              position: relative;
              label{
                .extend-click();
                position: absolute;
                top: 50%;
                margin-top: -.16rem;

              }
              .text{
                font-family: @font-family-text;
                font-size: @font-size-medium-x;
                // padding-left: .52rem;
                color: @color-text1;
              }
            }
            .tips{
              height: .67rem;
              line-height: .67rem;
              color: @color-text1;
              font-family: @font-family-text;
              font-size: @font-size-small;
              .right{
                color: @color-main1;
                text-align: right;
                .ivu-icon{
                  margin-left: .2rem;
                }
                .no-wrap(1);

              }
              .left{
                .no-wrap(1);
                line-height: .67rem;
              }

            }
            .product-list{
              font-size: 0;

              .something-left {
                display: inline-block;
                vertical-align: middle;
                margin-right: .12rem;
              }
              .something-middle {
                display: inline-block;
                vertical-align: middle;
                width: 2.2rem;
                height: 2.25rem;
                overflow: hidden;
                .ba(@color-assist3,.06rem);
                  img {
                      display: inline-block;
                      width: 100%;
                  }
              }
              .something-right {
                display: inline-block;
                vertical-align: top;
                width: 4.3rem;
                min-width: 180px;
                overflow: hidden;
                  padding: 0rem .24rem;
                  height: 100%;
                  box-sizing: border-box;
                
                  .title{
                    font-family: @font-family-text;
                    font-size: @font-size-medium-x;
                    color: @color-text1;
                    line-height: @font-size-medium-x*1.2;
                    .no-wrap(2);
                  }
                  .size{
                    font-family: @font-family-text;
                    font-size: @font-size-small;
                    color: @color-text2;
                    margin-top: .19rem;
                  }
                  .right-bottom{
                    position: absolute;
                    bottom: .22rem;
                    width: 4.14rem;
                   
                  }

              }              
            }

        }
    }
    .something-left{
      label,
      span {
        .extend-click();
      }      
    }

}
                    .price{
                      font-family: @font-family-num;
                      color: @color-main1;
                      span{
                        &:nth-child(2){
                          font-size:0;
                          i:nth-child(2){
                            font-size: @font-size-small;
                          }
                           i:nth-child(1){
                            font-size:@font-size-medium-xx;
                          }
                        }
                        &:nth-child(1){
                          font-size: @font-size-small;

                        }
                      }
                    } 
.number{
  display: inline-block;
  height: .44rem;
  line-height: .44rem;
  font-size: 0;
  border-radius: 2px;
  .ba(@color-assist3,0);
  span{
    font-family: @font-family-num;
    font-size: @font-size-medium-x;
    color: @color-text1;
    display: inline-block;
    width: .48rem;
    text-align: center;
    height: 100%;
    vertical-align: top;
    &.disable{
      color: @color-assist3;
    }
    &:nth-child(1){
      .br(@color-assist3);
      font-size: @font-size-medium-x;
    }
    &:nth-child(2){
      width:.68rem;
    }
    &:nth-child(3){
      .bl(@color-assist3);
    }
  }
}
</style>
