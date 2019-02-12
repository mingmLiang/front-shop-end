<template lang="html">
<div>
<!-- {{datas.aside[tabIndex].title}} -->
<!-- {{datas}} -->
  <nav class="nav" v-if="datas">
    <ul>
      <li v-for="(k,i) in datas.data" @click='changeTabIndex(i,k)'  :class='{active:i==tabIndex}' v-if="i < 4">
        <router-link :to="{path:'/category/'+k.sor_id}">{{k.sor_name}}</router-link>
      </li>
      <v-allbt></v-allbt>
    </ul>
  </nav>     
  <!-- 所有分类面板 -->
  <v-panelclasses :datas="datas"></v-panelclasses> 
</div>

</template>

<script>
import Allbt from '@/common/base/modal/classes/bt.vue';
// 所有分类面板
import Panelclasses from '@/common/base/modal/classes/panel.vue';
import categoryScreen from '@/http/mock.js' //模拟数据
import  { api } from '@/global/siteConfiguration';
  export default {
    components: {
      'v-allbt': Allbt,
      'v-panelclasses': Panelclasses,
    },
    data: function () {
      return {
        selected:{}, // 筛选配置
        screenData:'',
        datas:''
       }
    },
    created(){
      if(!this.datas){
        this.getNav();
      }
    },
    computed:{
      tabIndex(){
        return this.$store.state.category.tabIndex
      }
    },
    methods:{
      changeTabIndex(i,k) {
         this.$store.commit('CHANGE_TABINDEX',i)
         this.getList(k);
         // this.getScreening();
      },
      // 获取头部导航
      getNav(){
      let _this=this;
      // 获取一般分类列表
        this.$http.get(api.navList, {}, function(data){
          _this.datas=data;
        }, function(obj){
            console.info('ERROR');
            console.info(obj);
        }, this.$http.withCredentials());
      },
      //获取分类筛选配置
      // getScreening(){
      //     let _this=this;
      //     let id=_this.datas.data[_this.tabIndex].id;
      //     this.$http.post(api.navConfig, {'id':id}, function(data){
      //       _this.screenData=data;
      //     }, function(obj){
      //         console.info('ERROR');
      //         console.info(obj);
      //     }, this.$http.withCredentials());  
      //     this.getList();  
      // },
      // 获取商品列表信息
      getList(k){
           let _this=this;
          // let map=this.selected;
          this.$http.get(api.goodsList, {'sor_id':k.sor_id}, function(data){
            // 将商品列表保存到vuex（全局变量）
            _this.$store.commit('PRODUCT_TLIST',data.data);
          }, function(obj){
              console.info('ERROR');
              console.info(obj);
          }, this.$http.withCredentials());    
      },

    },  
    watch:{
      // 当头部导航数据发生变化之后
      datas:function(val){
         // this.getList();
         this.changeTabIndex(0,this.datas.data[0]);
        // 初始化筛选配置
       // this.getScreening();
      },
      // selected:function(){
      //   this.getList();
      // }
    },
    mounted(){

    }
  }
</script>

<style lang="less">
@import '../../assets/fz.less';
  .nav {
    position: fixed;
    z-index: 10;
    background: #fff;
    width: 100%;
    max-width: 750px;
    .bd(@color-assist3);
    .ivu-select-selection{
      height: auto;
    }
    ul{
      text-align: center;
      li{
        width: 1.7rem;
        display: inline-block;
        text-align: center;
        padding: .11rem 0;
        color: @color-text1;
        font-family: @font-family-text;
        font-size: @font-size-medium-x;
        position: relative;
        a{
          .no-wrap(1);
          color: @color-text1;

        }
        &.active::after{
          content: '';
          position: absolute;
          left: 0;
          bottom: -.02rem;
          width: 100%;
          height: .04rem;
          background: @color-main1;
        }
        .sort{
          font-size: @font-size-medium;
          color: @color-text1;
          background-color: @color-assist4;
          padding: .12rem 0;
          height: .48rem;
          line-height: @font-size-medium;
          padding-right: 0.3rem;
        }
        .ivu-select-selection{
            border: none;
            .ivu-select-placeholder,.ivu-select-selected-value{
              font-size: @font-size-medium;
              color: @color-text1;
              background-color: @color-assist4;
              padding: .12rem 0;
              height: .48rem;
              line-height: @font-size-medium;
              padding-right: 0.3rem;

            }
            .ivu-select-arrow{
              font-size: @font-size-medium;
              color: @color-text1;
              margin-top: 0;
              top: 0;
              margin-top: .13rem;
              right: .08rem;
            }
        }
      }
      .ivu-select-item{
        font-size: @font-size-medium !important;
        .no-wrap(1);
        display: inline-block;
        width: 100%;
        .ivu-select-arrow{
          right: .08rem;
        }
      }

    }

    .ivu-select-dropdown{
      margin-top: .2rem;
    }
    .ivu-select-visible .ivu-select-selection{
      box-shadow: none;
    }
    .ivu-select-dropdown-list{
      overflow-x:hidden;
    }
      .sreeningBox{
        .bt(@color-assist3);
        height: .8rem;
        overflow-x:scroll;
        overflow-y:hidden;
        line-height: .8rem;
        padding: 0 .12rem;
        text-align: left;
        width: 100%;
        li{
          padding: 0 .12rem;
          .ivu-select{
            overflow: hidden;
            border-radius: .06rem;
          }
        } 
        .screening{
          text-align: left;
          white-space:nowrap;
          li{
            white-space:normal;
            text-align: left;
            .ivu-select-item{
              .no-wrap(1);
                height: .5rem;
                line-height: .5rem;
            }
          }
        }       
      }
  }
    
</style>


