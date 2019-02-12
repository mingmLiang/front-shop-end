<template lang="html">
<div>
    <Affix>
    <header  class="demo-affix">
      <!-- <router-link  class="icon-back":to="{ name: '首页'}"v-if="$route.matched[0].path=='/category'"></router-link> -->
      <span class="icon-back"  :class="{ active: iconTheme }" @click="$router.go(-1)"></span>
      <h1>编辑收货地址</h1>
      <span class="delete" @click="deleteAddress()">删除</span>
    </header>
  </Affix>
  <div class="wapper">
    <ul>
      <li>
        <span class="title">收货人:</span>
        <input type="text" name="" value="李美美">
      </li>
      <li>
        <span class="title">联系方式:</span>
        <input type="text" name="" value="13437892236">
      </li>
      <li>
        <v-g-bt :name="'delConfirm'">
          <div slot="content">
            <span class="title">所在地区:</span>
            <span class="text"><i>{{provinces.label}}</i>&nbsp;&nbsp;<i v-if="city.label!=='请选择'">{{city.label}}</i></span>
            <div class="icon">
              <div class="iconBox">
                <Icon type="ios-arrow-right"></Icon>
              </div>
            </div>
          </div>
         </v-g-bt>
      </li>
      <li>
        <span class="title">详细地址:</span>
        <input type="text" name="" value="">
      </li>
    </ul>
  </div>
  <span class="bt_">保存</span>
   <v-g-panel1 :name="'delConfirm'">
      <div slot="content">
        <v-closePanelBt></v-closePanelBt>
        <div class="address">
          <div class="title">所在地区</div>
          <div class="addressList">
            <nav>
              <span :class="{active:toggle}" @click="pre()">{{provinces.label}}</span>
              <span v-if="!toggle" @click="findNext(key,value,'city')" class="active">{{city.label}}</span>
            </nav>
            <div class="list" v-if="toggle">
              <ul>
                <li v-for="(value,key) in ChineseDistricts_[86]" @click="findNext(key,value,'provinces')">{{value}}</li>
              </ul>
            </div>
            <div class="list" style="margin-left:.8rem;">
              <ul>
                <li v-for="(value,key) in cityList" @click="findNext(key,value,'city')">{{value}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </v-g-panel1>
    <v-mask></v-mask>
</div>

</template>


<style lang="less" scoped>
@import '../../assets/fz.less';
.address{
  .title{
    height: .9rem;
    line-height: .9rem;
    text-align: center;
    font-size: @font-size-medium-x;
    color: @color-text1;
    font-family: @font-family-text;
  }
  .addressList{
    font-size: @font-size-medium;
    nav{
      padding: 0 .24rem;
      .bt(@color-assist3);
      .bd(@color-assist3);
      height: .68rem;
      line-height: .68rem;
      .active{
        color: @color-main1;
      }
      span{
        display: inline-block;
        padding: 0 .12rem;
        position: relative;
        &.active::after{
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.02rem;
          width: 100%;
          height: .04rem;
          background: @color-main1;
        }
      }
    }
    .list{
      padding: 0 .24rem;
      float: left;
      ul{
        height: 5.32rem;
        width: 2rem;
        display: inline-block;
        overflow-y: scroll;
        li{
          height: .74rem;
          line-height: .74rem;
          border:none;
          overflow: hidden;
        }
      }
    }
  }
}
header {
  height: .88rem;
  line-height: .88rem;
  max-width: 7.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 .24rem;
  background-color: #fff;
  position: fixed;
  z-index: 9999;
  .bd(@color-assist3);
  .delete{
    position: absolute;
    right:.24rem;
    color: @color-text2;
    top: 0;
    font-size: @font-size-medium;
  }
  .icon-back{
    position: absolute;
    left: .24rem;
    top: .24rem;
  }
  h1{
    color: @color-main2;
    font-size: @font-size-large ;
    text-align: center;
  }
}
ul{
  font-size: @font-size-medium;
  color: @color-text1;
  font-family: @font-family-text;
  padding-bottom: .84rem;
  background-color: #fff;
    li{
      height: .88rem;
      line-height: .88rem;
      padding: 0 .26rem;
      .bd(@color-assist3);
      position: relative;
      span,input{
        display: inline-block;
        font-size: @font-size-medium;
        color: @color-text1;
        font-family: @font-family-text;
      }
      input{
        width: 5rem;
        height: .4rem;
      }
      &:last-child{
        border:none;
      }
      .title{
        margin-right: .18rem;
      }
      .icon{
        position: absolute;
        display: inline-block;
        right: .24rem;
        top: 0;
        .iconBox{
          .extend-click();
        }
      }
    }
}
.bt_{
  display: inline-block;
  height: .88rem;
  line-height: .88rem;
  width: 7.04rem;
  color: @color-text3;
  background-color: @color-main1;
  position: fixed;
  bottom: .2rem;
  border-radius: .06rem;
  font-size: @font-size-medium-xx;
  text-align: center;
  left: .23rem;
}
</style>


<script>
import GBt from '@/common/base/modal/general/bt.vue';
import GPanel01 from '@/common/base/modal/general/panel01.vue';
import Mask from '@/common/base/mask.vue';
import ClosePanelBt from '@/common/base/modal/closePanelBt.vue';
import ChineseDistricts from '@/assets/ChineseDistricts';
export default {
  data(){
    return{
      ChineseDistricts_:'',
      provinces:{
        label:'请选择',
        key:''
      },
      city:{
        label:'请选择',
        key:''
      },
      detaiaddress:'请选择',
      toggle:true,
      cityList:''
    }
  },
  props: {
     iconTheme: {
       type: Boolean
     }
  },
  components: {
        'v-g-bt':GBt,
        'v-g-panel1': GPanel01,
        'v-mask': Mask,
        'v-closePanelBt':ClosePanelBt
    },
    methods:{
      findNext(key,value,str){
        if(str==='provinces'){
          this.provinces.label=value;
          this.provinces.key=key;
          this.toggle=false;
          this.cityList=this.ChineseDistricts_[key];

        }else{
          this.city.label=value;
          this.city.key=key;
          $('#mask').trigger('click');
        }
      },
       deleteAddress(){
        this.$Message.success('删除成功');
        this.$router.go(-1);
      },
      pre(){
        this.toggle=true;
        this.cityList='';
        this.city.label='请选择';
      }
    },
    mounted(){
      this.ChineseDistricts_=ChineseDistricts;
    }
}
</script>
