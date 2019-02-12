<template lang="html">
<div>
  <footer class="footer">
   <div class="footerBox clearfix">
      <div class="footer-result fl clearfix">
        <!-- <p class="fl allBt" @click="chooseAll"> <span class="icon-tocheck"></span>全选</p> -->
        <div class="fl price" >
            <p><span>商品合计:</span><span class="num_">￥{{allpay}}</span></p>
            <p>
             <span>总额：</span><span class="num_">￥{{allpay}}</span>
             <span>立减：</span><span class="num_">￥0</span>
            </p>
        </div>
      </div>
<!--       <v-g-bt  v-if="!toggle" :name="'showWarehouse'" style="vertical-align: top;">
        <a class="footer-pay" slot="content">
          去结算({{count}})
        </a>
      </v-g-bt> -->
      <div @click="goPay()" class="footer-pay">去结算({{count}})</div>
      <v-g-bt  v-if="toggle" :name="'delConfirm'" style="vertical-align: top;">
         <a class="footer-pay" slot="content">
          删除商品
        </a>
      </v-g-bt>
   </div>
    
 
  </footer>
    <!-- 分仓库结算面板 -->
<!--     <v-g-panel :name="'showWarehouse'">
      <div slot="content">
        <div class="showWarehouse">
          <div class="title">请分开结算以下商品</div>
          <ul class="text" id="js-Warehouse-choose">
            <li @click="toggleChoose">
              <div class="left">
                <span class="icon icon-check icon-tochecked"></span>
              </div>
              <div class="right">
                <p>南沙保税仓商品</p>
                <p>3件</p>
              </div>
            </li>
            <li @click="toggleChoose">
              <div class="left">
                <span class="icon icon-check icon-tochecked"></span>
              </div>
              <div class="right">
                <p>南沙保税仓商品</p>
                <p>3件</p>
              </div>
            </li>
          </ul>
          <p class="button_">
            <span @click="close">返回购物车</span>
            <span @click="goPay()">去结算</span>
          </p>
        </div>
      </div>
    </v-g-panel> -->    

    <!-- 确认删除面板 -->
    <v-g-panel :name="'delConfirm'">
      <div slot="content">
        <div class="delConfirm">
          <p class="tips">确定要删除这2种商品吗？</p>
          <Row class="button">
              <Col span="12">
                <span @click="close">取消</span>
              </Col>
              <Col span="12">
                <span class="special" @click="deletecar()">确定</span>
              </Col>
          </Row>
        </div>
      </div>
    </v-g-panel>

    
</div>
</template>

<script>
import GPanel from '@/common/base/modal/general/panel.vue';
import GBt from '@/common/base/modal/general/bt.vue';
import { bus } from '@/global/bus.js'

export default {
  props: ["carList"],
   components: {
         'v-g-panel': GPanel,
         'v-g-bt':GBt
    },
    data(){
      return{
        toggle:''
      } 
    },
  computed:{
    // 勾选的商品数量
    count(){
      // 如果有勾选商品,计算总价格
      let count=0;
      if(this.carList) {
        this.carList.forEach(function(e,i){
          if(e.choseBool){
            count+=e.cart_count;
          }
        });
       

      }
      // 没有勾选 即为0
      return count

    },
    //勾选的商品的价格总和
    allpay(){
      // 如果有勾选商品,计算总价格
      let allpay=0;
      if(this.carList) {
        this.carList.forEach(function(e,i){
          if(e.choseBool){
            allpay+=e.price*e.cart_count;
          }
        });
       
      }
      // 没有勾选 即为0
      return allpay

    }
  },
created(){
   bus.$on('deleteBT', (bl) => {
    this.toggle=bl;
  })
},
  methods:{
    chooseAll(){
    },
    toggleChoose(e){
      $('#js-Warehouse-choose .icon-check').addClass('icon-tochecked');
      $(e.target).removeClass('icon-tochecked');
    },
    deletecar(){
      this.close();
    },
    close(){
      $('#mask').trigger('click');
    },
    //点击跳转到支付页
    goPay(){
      let selectList=[];
        this.carList.forEach(function(e,i){
          if(e.choseBool){
            selectList.push(e);
          }
        }); 
        // 如果有选择商品才能跳转
        if(selectList.length) {
          this.$router.push({name:'支付页'});
          sessionStorage.setItem("selectList", JSON.stringify(selectList));
      } else {
        this.$Message.error('你还没选择商品');
      }

    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
  .button_{
    .bt(@color-assist3);
    span{
      font-size: @font-size-medium-xx;
      color: @color-text1;
      display: inline-block;
      height: .98rem;
      line-height: .98rem;
      width: 50%;
      text-align: center;
      &:last-child{
        background:@color-main1;
        color: @color-text3;
        border-bottom-right-radius: .06rem;
      }
    }
  }
.showWarehouse{
   font-family: @font-family-text;
  .title{
    padding:.3rem 0 .48rem 0;
    font-size: @font-size-medium-x;
    color: @color-text1;
    text-align: center;
  }

  .text{
    padding-left: .7rem;

    li{
      margin-bottom: .48rem;
      .left{
          display: inline-block;
          vertical-align: middle;
        .icon{
          margin-right: .4rem;
        }
      }
      .right{
        display: inline-block;
        vertical-align: middle;
        font-family: @font-family-text;
        p{
          &:first-child{
            font-size: @font-size-medium-x;
            color: @color-text1;
            line-height: @font-size-medium-x;
          }
          &:last-child{
            font-size: @font-size-small;
            color: @color-text2;
            line-height: @font-size-small;
            margin-top: .2rem;
          }
        }

      }

    }
  }
}
.delConfirm{
    color: @color-text1;
    font-family: @font-family-text;
    font-size: @font-size-medium-xx;
    .tips{
      height: 1.66rem;
      line-height: 1.66rem;
      text-align: center;
      .bd(@color-assist3);
    }
    .button{
          span{
          display: inline-block;
          width: 100%;
          height: .98rem;
          line-height: .98rem;
          text-align: center;
          &.special{
            background:@color-main1;
            color: @color-text3;
            border-bottom-right-radius: .06rem;
          }
        }
      } 
}
  .footer {
    .footerBox{
      .bt(@color-assist3);
      max-width:750px;
      position: relative;
      margin: 0 auto;
    }
    overflow: hidden;
    width: 100%;
    height: .98rem;
    align-items: center;
    position: fixed;
    bottom: .98rem;
    left: 0;
    background-color: #ffffff;
    .footer-result {
      text-align: left;
      padding-left: .5rem;
      overflow: hidden;
      color: @color-text1;
      font-family: @font-family-text;
      font-size: @font-size-medium-xx;
      line-height: @font-size-medium-xx;
      .allBt{
        line-height: .98rem;
        margin-right: .2rem;
        span{
          margin-right: .08rem;
        }
      }
      .price{
        padding-top: .20rem;
        p:nth-child(2){
          margin-top:.12rem;
          font-size: @font-size-small;
          // line-height:  @font-size-small;

        }
      }
    }

    .footer-goon {
      background-color:@color-assist;
      color: @color-text3; 
      height: 100%;
      line-height: .98rem;
    }

    .footer-pay {
      display: inline-block;
      text-align: center;
      position: absolute;
      right: 0;
      height: 100%;
      color: @color-text3; 
      background-color:@color-main1;
      line-height: .98rem;
      width: 2.3rem;
      font-family: @font-family-num;
    }

  }
</style>
