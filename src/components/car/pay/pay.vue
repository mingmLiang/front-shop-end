<template lang="html">

  <div class="pay">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>填写订单</i>
      </span>
    </v-header>
    <div class="wapper">
        <div class="titleBar">
            <span>温馨提示：</span>
            <span>请仔细核对订单信息，确保正确后，提交订单</span>
        </div>
        <!-- @click.native="$router.push({ name: '我的地址列表页', params: { 'userid': 123 }})" -->
         <v-recipient  style="padding-top:1.6rem;">
            <span slot="text1" >收件人:</span>
            <span slot="text2" ><input type="text" name="" v-model="form.name"></span>
            <span slot="text3" ><input type="text" name="" v-model="form.phone"></span>
            <!-- <span slot="text6" class="icon" ><Icon type="ios-arrow-right"></Icon></span> -->
            <span slot="text4" ><i class="icon-address"></i></span>
            <span slot="text5"><input type="text" name="" v-model="form.address" style="width: 6.2rem;"></span>
          </v-recipient>
        <div  style="margin-top:.2rem;">
          <ul>
            <li v-for="k in carList">
              <a class="clearfix" style="padding-top:.2rem;">
                <span class="imgbox fl">
                    <img v-lazy="k.image.split(';')[0]" alt="">
                </span>
                <div class="fl" style="height:1.6rem;position: relative;width:5rem;">
                  <h2>{{k.pro_name}}</h2>
                  <p class="num">
                    <span class="fl">规格：{{k.spe_name}}</span>
                    <span class="fr">￥{{k.sale_price}}x{{k.cart_count}}</span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
    <div class="floor price">
        <ul>
            <li class="clearfix">
                <div class="fl">商品金额({{num}}件)</div>
                <div class="fr num_ notice">￥{{price}}.00</div>
            </li>
              <li class="clearfix">
                <div class="fl">运费</div>
                <div class="fr num_ notice">+￥0.00</div>
            </li>
             <li class="clearfix totlePrice">
                <div class="fl notice">订单总额</div>
                <div class="fr num_ notice">=￥{{price}}.00</div>
            </li>
            <li>
                <span class="icon-checked02"></span><span>购买抢淘淘商城产品需同意</span> 
                <span class=" notice">
                  <v-g-bt :name="'userNotice'">
                     <i slot="content">《用户购买须知》</i>
                  </v-g-bt>
                </span>
            </li>
        </ul>
    </div>
    </div>

    <footer ontouchstrat="">
      <div class="text">
          <span>实付金额：</span>
          <span class="num num_"><i>￥</i>{{price}}<i>.00</i></span>
      </div>
      <span  @click="payConfirm" class="submitBt">提交订单</span>
    </footer>

    <!-- 用户购买须知 -->
    <div class="panelNotice">
      <v-g-panel :name="'userNotice'">
          <div slot="content" class="userNotice" style="    overflow: scroll;height: 8rem;">
            <h3 class="title" style="position:fixed; background:#fff;">抢淘淘商城购物须知<i @click="close" class="icon icon-close-red"></i></h3>
            <div class="text" style="padding-top:.9rem;">
              在抢淘淘商城购买的商品，均通过正规的清关渠道进口，一切遵照海关相关法律、法规进行操作。 
            </div>
            <div class="text">
             <h4>一、实名认证</h4>
             <p>
               根据海关总署公告2016年第26号（关于电子商务零售进出口商品有关监管事宜的公告），电子商务企业应当对购买电子商务零售进口商品的个人（订购人）身份信息进行核实，并向海关提供由国家主管部门认证的身份有效信息。无法提供或者无法核实订购人身份信息的，订购人与支付人应当为同一人。
             </p>
            </div>         
            <div class="text">
              <p>温馨提示：以上于2017年1月根据即时生效的国家政策而编辑发布，供参考，各商品的税率明细表需以国家不时公布的有关法律法规为准。</p>
            </div>
          </div>

      </v-g-panel>      
    </div>
      <!-- 优惠券选择页面 -->
<!--       <v-g-panel1 :name="'chooseCoupons'">
          <div slot="content" class="chooseCoupons">
            <v-closePanelBt></v-closePanelBt>
            <div class="title">店铺优惠</div>
            <ul class="">
              <li>
                  <span>优惠100元</span>
                  <span class="unnotice">(满500-200)</span>
                  <i class="icon-check" :class="{ 'icon-tochecked': toggleCheck!==0 }" @click="toggleCheck=0"></i>
              </li>
             <li>
                  <span>优惠100元</span>
                  <span class="unnotice">(满500-200)</span>
                  <i class="icon-check" :class="{ 'icon-tochecked': toggleCheck!==1 }" @click="toggleCheck=1"></i>
              </li>
              <li>
                  <span  class="unnotice">优惠300元</span>
                  <span  class="unnotice">(满1400-300)</span>
                  <i class="icon-check" :class="{ 'icon-tochecked': toggleCheck!==2 }" @click="toggleCheck=2"></i>
              </li>
              <li>
                  <span>不使用优惠券</span>
                  <i class="icon-check" :class="{ 'icon-tochecked': toggleCheck!==3 }" @click="toggleCheck=3"></i>
              </li>
            </ul>
          </div>
      </v-g-panel1> --> 
<v-mask></v-mask>
  </div>
</template>

<script>
import Util from '../../../util/common'
import Header from '@/common/_header.vue'
import Recipient from '@/components/order/recipient.vue';
import GBt from '@/common/base/modal/general/bt.vue';
import GPanel from '@/common/base/modal/general/panel.vue';
import GPanel01 from '@/common/base/modal/general/panel01.vue';
import ClosePanelBt from '@/common/base/modal/closePanelBt.vue';
import Mask from '@/common/base/mask.vue';
import  { api } from '@/global/siteConfiguration';

export default {
  components: {
    'v-header': Header,
    'v-recipient': Recipient,
    'v-g-bt':GBt,
    'v-g-panel': GPanel,
    'v-g-panel1': GPanel01,
    'v-mask': Mask,
     'v-closePanelBt':ClosePanelBt

  },
  data() {
    return {
      confirm: '',
      toggle:false,
      toggleCheck:0,
      carList:[],
      num:0,
      price:0,
      form:{
        'name':'',
        'phone':'',
        'address':'',
        'product':[]
      }
    }
  },
  mounted() {
  // 获取该用户的相关信息
  this.form.name=sessionStorage.getItem("qtt_user_uname");
  this.form.phone=sessionStorage.getItem("qtt_user_phone_num");
  this.form.address=sessionStorage.getItem("qtt_user_address");
  this.carList=JSON.parse(sessionStorage.getItem("selectList"));
  if(this.form.address=='null'){
    this.form.address='请输入收货地址';
  }
  let this_=this;
  this.carList.forEach(function(e,i){
    let pro={
          'pro_id':'',
          'num':'',
          'spe_id':'',
          'spe_name':''
        };
    pro.pro_id=e.pro_id;
    pro.num=e.cart_count;
    pro.spe_id=e.spe_id;
    pro.spe_name=e.spe_name;
    this_.form.product.push(pro);
    this_.num+=parseInt(e.cart_count);
    this_.price+=parseInt(e.cart_count)*parseFloat(e.sale_price);
  });
  },
  computed: {
  },

  methods: {
    editName(){
      this.toggle=true;
    },
    close(){
      $('#mask').trigger('click');
    },
    payConfirm() {
      let this_=this;
      // 生成订单
      this.$http.post(api.order_add, {user_id:sessionStorage.getItem("qtt_user_id"),'name':this.form.name,'phone':this.form.phone,'address':this.form.address,'product':JSON.stringify(this.form.product)}, function(data){

        this_.$router.push({ name: '支付方式页', query: { 'orderId': data.data.orderId }});
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials());
      if (this.carList) {

      } else { //提交了订单,数据清空
        alert('请勿重复提交订单')
      }

    }
  }

}
</script>

<style lang="less" scoped>
@import '../../../assets/fz.less';
.edit{
  input{
    color: @color-text1;
    font-family: @font-family-text;
    font-size: @font-size-medium;
    line-height: @font-size-medium;
    vertical-align: top;
    width: 5.5rem;
  }
  .unnotice{
    input{
      color: @color-text2;
      font-family: @font-family-num;      
    }

  }
}
.chooseCoupons{
  padding-bottom: 20vh;
  .title{
    margin: .3rem auto;
    font-size: @font-size-medium-x;
    font-family: @font-family-text;
    color: @color-text1;
    text-align: center;
    padding: 0;
  }
  ul{
    padding: 0 .24rem;

    li{
      line-height: .94rem;
      height: .94rem; 
      .bd(@color-assist3);
      position: relative;
      .icon-check{
        position: absolute;
        right: 0;
        top: .3rem;
      }
      &:last-child{
        border:none;
      }
      span{
        font-family: @font-family-text;
        color: @color-text1;
        font-size: @font-size-medium;
      } 
      .icon-check{
        vertical-align: middle;
      }  
    }
  }
}

.panelNotice{
  .panel{
    width: 7.02rem;
    margin-left: -3.51rem;
    
  }
}
.userNotice{
  padding: 0 .3rem .3rem .3rem;
  p{
    text-indent: 2em;
  }
  h4{
    font-weight: 600;
  }
  .title{
    height: .9rem;
    line-height: .9rem;
    font-size: @font-size-medium-x;
    color: @color-text1;
    font-family: @font-family-text;
    text-align: center;
    padding: 0;
    margin-bottom: .17rem;
    position: relative;
    margin-top: 0;
    padding-top: .12rem;
    width: 7.02rem;
    left: .24rem;
    border-radius: .06rem;
    .icon{
      position: absolute;
      right: .3rem;
      top: .34rem;
    }
  }
  .text{
    line-height: .52rem;
    font-size: @font-size-medium;
    color: @color-text1;
    font-family: @font-family-text;
    margin-bottom: .46rem;
  }
}
footer{
    position: fixed;
    bottom: 0;
    max-width: 750px;
    height: .98rem;
    background: #fff;
    text-align: right;
    .bt(@color-assist3);
    width: 100%;
    .text{
        margin-right: .2rem;
        display: inline-block;
        font-size: 0;
        span{
            font-family: @font-family-text;
            color: @color-main1;
            font-size: @font-size-medium-xx;
        }
    }
    .num i{
        font-size: @font-size-medium;
    }
    .submitBt{
        display: inline-block;
        height: 100%;
        text-align: center;
        width: 2.52rem;
        line-height: .98rem;
        font-size: @font-size-medium-xx;
        font-family: @font-family-text;
    }
}
.notice{
    position: relative;
}
.submitBt{
    background: @color-main1;
    color: @color-text3;
}
.icon-checked02{
    margin-right: .16rem;
}
.gift{
    color: @color-text1;
    font-size: @font-size-small-s;
    font-family: @font-family-text;
    background: #fff3e0;
}
.title{
    padding: .18rem .24rem .18rem .72rem;
    margin-top: .12rem;
    position: relative;
    .icon-top{
        position: absolute;
        left: .24rem;
        top: -.12rem;      
    }
}
.floor.price ul li{
    font-size: @font-size-medium;
    color: @color-text1;
    font-family: @font-family-text-s;
    border: none;
    padding: .1rem 0;
    &.totlePrice{
        font-size:@font-size-medium-x;
    }
}
ul{
}
li{
    font-size: 0;
    background: #fff;
    .bd(@color-assist3);
    &:last-child{
        border:none;
    }
    .num{
        font-size: @font-size-small;
        color: @color-text1;
        font-family: @font-family-text;
        position: absolute;
        bottom: 0;
        text-align: right;
        width: 100%;
    }
}
a{
    display: inline-block;
}
.icon-edit{
    margin-top: -.205rem;
    display: inline-block;
    position: absolute;
    right: .24rem;
    top: 50%;
}
.wapper{
    background: @color-assist4;
}
.recipient{
    border:none !important;
    background: #fff;
    font-size: .26rem;
}
   h2{
        width: 4.26rem;
        color: @color-text1;
        font-size: @font-size-medium-x;
        font-family: @font-family-text;
        .no-wrap(2);
    }
.floor{
    padding: .2rem  .24rem;
    margin-top: .2rem;
    color: @color-text1;
    background: #fff;
    font-size: @font-size-medium;
    margin-top: .2rem;
    position: relative;
    width: 100%;
}
.titleBar{
    padding: .26rem .24rem;
    background: #fe7a7b;
    color: @color-text3;
    font-size: @font-size-small;
    position: fixed;
    z-index: 1;
    width: 100%;
}
.icon{
    position: absolute;
    right: .24rem;
}
.imgbox{
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    overflow: hidden;
    margin-right: .26rem;
    margin-left: .44rem;
    .ba(@color-assist3,.06rem);
    img{
        width: 100%;
    }
}
</style>
