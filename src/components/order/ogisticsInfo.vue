<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="">
    <v-header class="header" :share="false" :iconTheme="false">
      <span slot="title">
       <i>订单跟踪</i>
      </span>
    </v-header>
    <div class="wapper">
      <div style="position:relative;">
          <ul class="top">  
            <li>  
              <span>物流状态:</span>
              <span class="state">已签收</span>
            </li>
            <li>  
              <span>物流公司:</span>
              <span>圆通快递</span>
            </li>
            <li>  
              <span>快递单号:</span>
              <span>HTH4889562588</span>
            </li>
        </ul>
        <span class="copyBt">复制</span>
      </div>
      <ul class="box"> 
          <li>
            <p>快件已签收，签收人:拍照签收,感谢您使用中通快递，期待再次为您服务！ </p>
            <p><span>2017-10-28</span><span>13:08:25</span></p>
            <span class="icon icon-dotted"></span>
          </li>
          <li> 
            <p>广州新芳村 的 公司杨惠权 正在派件,请保持电话畅通哦! </p>
            <p><span>2017-10-28</span><span>13:08:25</span></p>
             <span class="icon icon-grey"></span>
          </li>
          <li> 
            <p>广州新芳村 的 公司杨惠权 正在派件,请保持电话畅通哦! </p>
            <p><span>2017-10-28</span><span>13:08:25</span></p>
             <span class="icon icon-grey"></span>

          </li>
          <li> 
            <p>广州新芳村 的 公司杨惠权 正在派件,请保持电话畅通哦! </p>
            <p><span>2017-10-28</span><span>13:08:25</span></p>
             <span class="icon icon-grey"></span>

          </li>
          <li> 
            <p>广州新芳村 的 公司杨惠权 正在派件,请保持电话畅通哦! </p>
            <p><span>2017-10-28</span><span>13:08:25</span></p>
             <span class="icon icon-grey"></span>
          </li>
      </ul> 
      <div class="tips">
        提示:物流信息由第三方企业提供,请您核对后再确认收货.
      </div> 
    </div>
    <v-footer :num="4"></v-footer>
    <v-mask></v-mask>

  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Footer from '@/common/_footer.vue'
import Mask from '@/common/base/mask.vue';
import Orderlist from '@/components/order/list.vue';

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-mask': Mask
  },
  data() {
    return {
      datas: '',
      loading:false
    }
  },
  beforeCreate() {
  

  },
  mounted(){
    // 获取查询类型
    // console.log(this.$route.query.type);
  }
}
</script>



<style lang="less" scoped>
@import '../../assets/fz.less';

.nav{
  background: #fff;
  position: fixed;
}
.wapper{
  background-color: @color-assist4;
  .tips{
    background-color: #fff;
    height: .66rem;
    line-height: .66rem;
    font-size: @font-size-small-s;
    color: @color-text2;
    font-family: @font-family-text;
    margin-top: .2rem;
    padding: 0 .24rem;
  }
  .copyBt{
    font-size: @font-size-small;
    font-family: @font-family-text;
    color: @color-text1;
    .ba(@color-text1,.06rem);
    display: inline-block;
    line-height: .36rem;
    height: .36rem;
    width: .88rem;
    text-align: center;
    position: absolute;
    bottom:.2rem;
    right: .24rem;

  }
  ul.top{
    background-color: #fff;
    padding:  .1rem .24rem;
    li{
      height: .46rem;
      line-height: .46rem;
      font-size: @font-size-medium;
      color: @color-text1;
      font-family: @font-family-text;
      span{
        &:first-child{
          margin-right: .2rem;
        }
        &.state{
          color: @color-main2;
        }
      }
    }
  }
  .box{
    margin-top: .2rem;
    background-color: #fff;
    padding-left: .92rem;
    li{
      .bd(@color-assist3);
      position: relative;
      padding-right: .24rem;
      &:last-child{
        border:none;
      }
      .icon{
        position: absolute;
        left: -.5rem;
        top: .14rem;
        z-index: 2;
        &.icon-grey{
          display: inline-block;
          width: .12rem;
          height: .12rem;
          border-radius: 50%;
          background-color: @color-text2;
          left: -.38rem;
          top: .22rem;
        }
      }
      p{
          font-size: @font-size-medium;
          color: @color-text2;
          line-height: .46rem;
          font-family: @font-family-text;
          &:last-child{
            line-height: .42rem;
            font-size: @font-size-small-s;
            font-family: @font-family-num;
            span{
              &:first-child{
                margin-right: .18rem;
              }
            }
          }

      }
      &:first-child{
        p:first-child{
          color: @color-main2;
        }
      }
      &:after{
        content: '';
        position: absolute;
        left: -.32rem;
        top: .32rem;
        width: 1px;
        height: 100%;
        background: @color-text2;
        z-index: 1;
      }
      &:last-child:after{
        display: none;

      }
    }

  }
}

</style>
