<template lang="html">
  <div class="Brand">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>品牌授权</i>
      </span>
    </v-header>
    <section class="wapper">
        <div class="tabs">
          <Tabs value="name1">
            <TabPane label="香港美赞臣" name="name1">
              <div class="brandContent">
                <div class="topBar">
                  <div class="imgbox">
                    <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                  </div>
                  <div class="info">
                   <div>
                      <p class="name">香港美赞臣</p>
                      <p class="text">在售商品<i>59</i>个</p>
                   </div>
                  </div>
                  <div class="bt">
                    <span @click="$router.push({ name: '分类页', params: { 'productid': 123 }})">进入购物专区</span>
                  </div>
                </div>
              </div>
                <div class="brandImg">
                  <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                </div>
            </TabPane>
            <TabPane label="亨氏" name="name2">
            <div class="brandContent">
                <div class="topBar">
                  <div class="imgbox">
                    <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                  </div>
                  <div class="info">
                   <div>
                      <p class="name">亨氏</p>
                      <p class="text">在售商品<i>59</i>个</p>
                   </div>
                  </div>
                  <div class="bt">
                    <span @click="$router.push({ name: '分类页', params: { 'productid': 123 }})">进入购物专区</span>
                  </div>
                </div>
              </div>
                <div class="brandImg">
                  <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                </div>
              </TabPane>
            <TabPane label="高露洁" name="name3">
              <div class="brandContent">
                <div class="topBar">
                  <div class="imgbox">
                    <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                  </div>
                  <div class="info">
                   <div>
                      <p class="name">高露洁</p>
                      <p class="text">在售商品<i>59</i>个</p>
                   </div>
                  </div>
                  <div class="bt">
                    <span @click="$router.push({ name: '分类页', params: { 'productid': 123 }})">进入购物专区</span>
                  </div>
                </div>
              </div>
                <div class="brandImg">
                  <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                </div>
            </TabPane>
            <TabPane label="高露洁" name="name4">
              <div class="brandContent">
                <div class="topBar">
                  <div class="imgbox">
                    <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                  </div>
                  <div class="info">
                   <div>
                      <p class="name">高露洁</p>
                      <p class="text">在售商品<i>59</i>个</p>
                   </div>
                  </div>
                  <div class="bt">
                    <span @click="$router.push({ name: '分类页', params: { 'productid': 123 }})">进入购物专区</span>
                  </div>
                </div>
              </div>
                <div class="brandImg">
                  <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                </div>
            </TabPane>
            <TabPane label="高露洁" name="name5">
              <div class="brandContent">
                <div class="topBar">
                  <div class="imgbox">
                    <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                  </div>
                  <div class="info">
                   <div>
                      <p class="name">高露洁</p>
                      <p class="text">在售商品<i>59</i>个</p>
                   </div>
                  </div>
                  <div class="bt">
                    <span @click="$router.push({ name: '分类页', params: { 'productid': 123 }})">进入购物专区</span>
                  </div>
                </div>
              </div>
                <div class="brandImg">
                  <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510389768917&di=fe86d53abbe575058d687dcacf20e1e2&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F21%2F61%2F61%2F63y58PICiTX.jpg'" alt="">
                </div>
            </TabPane>
          </Tabs>
          <div class="allBt">
            <v-allbt></v-allbt>
          </div>
        </div>
    </section>

  <!-- 所有分类面板 -->
  <v-panelclasses :datas="datas"></v-panelclasses> 
  <v-mask></v-mask>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Allbt from '@/common/base/modal/classes/bt.vue';
import Panelclasses from '@/common/base/modal/classes/panel.vue';
import listsTobuy from '@/http/mock.js' //模拟数据
import Mask from '@/common/base/mask.vue';
 export default {
          components:{
          'v-header':Header,
          'v-allbt': Allbt,
          'v-panelclasses': Panelclasses,
          'v-mask': Mask
        },
        data () {
            return {
              datas:''
            }
        },
        methods: {
        },
      mounted(){
             let _this=this;
    // 获取一般分类列表
        this.$http.get('/goods/category/lists', {}, function(data){
          _this.datas=data;

        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials());
      }
    }


</script>

<style lang="less">
@import '../assets/fz.less';
.Brand{
.ivu-tabs-ink-bar{
  visibility: hidden;
}
.ivu-tabs-bar{
  border:none;
  margin-bottom: 0;
  .bd(@color-assist3);
}
.brandImg{
  margin-top: .16rem;
  padding: 0 .24rem;
  width: 100%;
  overflow: hidden;
  img{
    width: 100%;
  }
}
.brandContent{
  padding: 0 .24rem;
  position: relative;
  .topBar{
    display: flex;
  }
  .imgbox{
    width: 1.22rem;
    height: 1.22rem;
    border-radius: 50%;
    .ba(@color-assist3,50%);
    overflow: hidden;
    margin:.32rem  .24rem .32rem 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .info{
    font-family: @font-family-text;
    color: @color-text1;
    font-size: @font-size-large;
        display: flex;
    justify-content:center;
    align-items:Center;
    .text{
      color: @color-text2;
      font-size: @font-size-small;
      i{
        color: @color-main1;
      }
    }
  }
  .bt{
    position: absolute;
    right: .24rem;
    top: 50%;
    margin-top: -.27rem;
    span{
      display: inline-block;
      height: .54rem;
      line-height: .54rem;
      background-color: @color-main1;
      font-size: @font-size-small;
      color:@color-text3;
      width: 1.84rem;
      text-align: center;
      border-radius: .06rem;
    }
  }
}
.tabs{
  position: relative;
  .allBt{
    position: absolute;
    right: .24rem;
    top: .2rem;
  }
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
}
.ivu-tabs-tab-active{
  position: relative;
  color: @color-main1 !important;
  &::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.02rem;
    width: 100%;
    height: .04rem;
    background: @color-main1;
  }
}
}
</style>
