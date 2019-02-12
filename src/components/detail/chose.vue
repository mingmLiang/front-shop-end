<template lang="html">
  <section class="chose">
    <div class="chose-view">
      <h1 class="chose-view-title">
        {{detailProdect.pro_name}}
      </h1>
      <h2 class="chose-view-title">
        {{detailProdect.decript}}
      </h2>

      <p class="tagesBox" v-if="detailProdect.tags">
         <v-tags2 v-for="item in detailProdect.tags.split(',')"><span slot="title">{{item}}</span></v-tags2>
         <v-tags1 v-if="detailProdect.city"><span slot="title">{{detailProdect.city}}发货</span></v-tags1> 
      </p>
      <div class="pricebox">
          <span>
              <i>￥</i>
              <i>{{detailProdect.sale_price}}</i>
          </span>
          <span>
              <i>￥</i>
              <i>{{detailProdect.price}}</i>
          </span>
      </div>
    </div>
    <div class="panelbg">
<!--      <ul class="listBox">
            <li @click="$router.push({ name: '分类页', params: { 'productid': 123 }})">
                 <v-tags2><span slot="title">满减</span></v-tags2>
                 <span class="promotion">美赞臣满减专场满400减50</span>
                 <Icon type="ios-arrow-right"></Icon>
            </li>
           <li @click="$router.push({ name: '领券中心', params: { 'productid': 123 }})">
                 <v-tags2><span slot="title">领劵</span></v-tags2>
                 <span class="promotion">满199减50</span>
                 <Icon type="ios-arrow-right"></Icon>
            </li>
            <v-g-bt :name="'giftShow'" class="giftBt" style="width:100%;">
              <li  slot="content">
                   <v-tags2><span slot="title" >赠品</span></v-tags2>
                   <span class="promotion">赠送全棉时代纱一份</span>
                   <Icon type="ios-arrow-right"></Icon>                  
              </li>
            </v-g-bt>
          <h4>促销</h4>
      </ul> -->  
        <ul class="listBox"   @click="showPanel('cart')">
            <li>
                 <span class="promotion"> 规格</span>
                 <Icon type="ios-arrow-right"></Icon>
            </li>
          <h4>选择</h4>
      </ul> 
      <ul class="listBox">
            <li>
                 <span class="promotion">正品保障 商品税费 不支持7天无理由退货</span>
            </li>
          <h4>说明</h4>
      </ul> 
    </div>
    <!-- 赠品提示面板 -->
    <v-g-panel1 :name="'giftShow'" class="giftPanel">
      <div slot="content" class="giftShow">
        <v-closePanelBt></v-closePanelBt>
        <div class="title">赠品</div>
        <div class="text">
          移动联通电信4G手机壳
        </div>
      </div>
    </v-g-panel1>
  <!-- 添加空函数 解决Safari浏览器 :active无效 -->
<!--     <div class="chose-mychosed" ontouchstart="">
      <div class="colChose">
        <span
           v-for="(k,i) in view.chose"
           :class="{active:colSelected==i}"
           @click="colChose(i)"
         >{{k.col}}</span>
      </div>
      <div class="sizeChose" >
        <span
          v-for="(k,i) in view.chose"
          :class="{active:sizeSelected==i}"
          @click="sizeChose(i)"
        >
          {{k.size}}
        </span>
      </div>
    </div> -->
  </section>


</template>

<script>
import Tags1 from '@/common/base/tags/tags1.vue';
import Tags2 from '@/common/base/tags/tags2.vue';
import GPanel01 from '@/common/base/modal/general/panel01.vue';
import ClosePanelBt from '@/common/base/modal/closePanelBt.vue';
import GBt from '@/common/base/modal/general/bt.vue';

// import {
//   MessageBox
// } from 'mint-ui';
import {
  mapState
} from 'vuex'


export default {
    props: ["detailProdect"],
    data () {
            return {
                value2: '1'
            }
        },
components: {
        'v-tags1': Tags1,
        'v-tags2': Tags2,
        'v-g-panel1': GPanel01,
        'v-closePanelBt':ClosePanelBt,
        'v-g-bt':GBt,


    },
  computed: mapState({

    view: state => state.detail.productDatas.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,

  }),
  methods: {
          //显示购物车面板和遮罩层
            showPanel(name){
              $('#mask').addClass('show');
              $('.panel').removeClass('show');
              $.each($('.panel'),function(index, el) {
                if($(el).data('name')===name){
                 $(el).addClass('show');
                }
              });  
    this.$store.commit('PRODUCT_SPEC',this.detailProdect);

      },
    //点击后把i赋值给colSelected,再通过判断决定是否添加选中样式 (active)
    colChose(i) {
      this.$store.commit('CHANGE_COL_SELECTED', i);
    },
    sizeChose(i) {
      this.$store.commit('CHANGE_SIZE_SELECTED', i);
    }

  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.panelbg{
    background-color:@color-assist4;
}
.giftPanel.show{
  bottom: .88rem !important;
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
.chose {
    .chose-view {
        padding: .18rem .24rem;
        background: #fff;
        font-size: 0;
        > h1 {
            font-size: @font-size-medium-x;
            font-family: @font-family-text;
            color:@color-text1;
            margin: .2rem 0 .12rem 0;
            > span {
                color: rgb(238, 113, 80);
            }
        }
        >h2{
            color: @color-main1;
            font-family: @font-family-text;
            font-size: @font-size-small;
            margin: .12rem 0;
        }
        .tagesBox{
            margin: .12rem 0;
        }
        .pricebox{
            font-family: @font-family-num;
            font-size: 0;
            span:first-child{
                color: @color-main1;
                i{
                    &:first-child{
                        font-size:@font-size-large-xx/2;
                    }
                    font-size:@font-size-large-xx;
                }
            }
            span:last-child{
                text-decoration: line-through;
                i{
                     &:first-child{
                        font-size:@font-size-medium/2;
                    }
                    font-size:@font-size-medium;
                }
                color: @color-text2;
            }
        }
        > span {
            color: red;
            font-size: @font-size-medium;
            font-weight: 600;
        }

    }
        .listBox{
            position: relative;
            padding-left: .92rem;
            margin: .18rem  0;
            background-color: #fff;
            >h4{
               font-family: @font-family-text;
               color: @color-text2;
               font-size: @font-size-small;
               display: inline-block; 
               position: absolute;
                left: .24rem;
                top: .24rem;
            }
            li{
                position: relative;
                padding-bottom: .24rem;
                padding-top: .24rem;
                &:firat-child{
                    padding-top: 0;

                }
                .bd(@color-assist3);
                .promotion{
                    font-size: @font-size-medium;
                    font-family: @font-family-text;
                    color:@color-text1;

                }
                .ivu-icon-ios-arrow-right{
                    font-size: @font-size-large;
                    position: absolute;
                    right: .24rem;
                }
                &:nth-last-of-type(1){
                    border: none;
                }
            }
        }
    .chose-mychosed {

        background-color: #fff;
        > div {
            padding-top: 20px;
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            span {
                font-size: @font-size-large;
                padding: 6px 10px;
                border: 1px solid rgb(111, 111,111);
                margin-right: 6vw;
                color: rgb(111, 111, 111);
                &:active {
                    color: red;
                    border-color: red;
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }

            }
        }
    }

    .footer {
        width: 100%;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        height: 14vw;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #ffffff;
        -moz-user-select: none;
        -webkit-user-select: none;
        .bt(@color-assist3);
        .footer-addcar,
        .footer-gocar,
        .footer-index {
            text-align: center;
        }

        .footer-index {
            -webkit-flex: 3;
            -ms-flex: 3;
            flex: 3;
            line-height: 14vw;
            height: 14vw;
            padding-top: 1.5vw;
            .br(@color-assist3);

            i {
                font-size: @font-size-large-x;
            }
            &:active {
                background-color: #f1f1f1;
            }
        }

        .footer-gocar {
            position: relative;
            -webkit-flex: 3;
            -ms-flex: 3;
            flex: 3;
            height: 14vw;
            line-height: 14vw;
            padding-top: 1.6vw;
            span {
                height: 5.5vw;
                width: 5.5vw;
                line-height: 5.5vw;
                position: absolute;
                top: 0.5vw;
                right: 5.5vw;
                background-color: red;
                border-radius: 50%;
                color: #fff;
                font-size: @font-size-large;
            }
            &:active {
                background-color: #f1f1f1;
            }
            i {
                font-size: @font-size-large-x;
            }
        }

        .footer-addcar {
            -webkit-flex: 6;
            -ms-flex: 6;
            flex: 6;
            line-height: 14vw;
            height: 14vw;

            color: #fff;
            background-color: red;
            letter-spacing: 0.2vw;
            &:active {
                background-color: #ff7d00;
            }
        }
    }
}
</style>
