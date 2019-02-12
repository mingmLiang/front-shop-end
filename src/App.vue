<template>
  <div id="app">

    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <keep-alive v-else>
      <router-view></router-view>
    </keep-alive>
    <v-loading v-show="fetchLoading"></v-loading>
  </div>
</template>

<script>
import Loading from '@/common/_loading'

export default {
  components:{
    'v-loading':Loading
  },
  computed:{
    fetchLoading(){
      return this.$store.state.detail.fetchLoading
    }
  },
  mounted(){
    this.$nextTick(function () {
      // 定义全局提示消息
        this.$Message.config({
          top: 90,
          duration: 1.2
      });
    })
  },
  created(){
    $(window).trigger('onresize');  
    // 加到时器主要是为了 展示Loading效果 项目中应去除
    setTimeout(()=>{
      this.$store.commit('SET_LOADING',false);
    },300)  
  }
}

</script>

<style lang="less">
@import './assets/fz.less';

#app{
 max-width: 7.5rem;
 margin: 0 auto;
 width: 100%;
 height: 100%;
 -webkit-tap-highlight-color:rgba(0,0,0,0);
}
html,body,#app{
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  /* overflow-x: hidden; */
}

body,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
img,
legend,
li,
ol,
p,
ul {
    margin: 0;
    padding: 0;
    -moz-user-select:none;-webkit-user-select:none;
    -webkit-tap-highlight-color:transparent;
}

button,
fieldset,
img,
input {
    border: none;
    padding: 0;
    margin: 0;
    outline-style: none;
}

ul,li {
 background: transparent;
}
ol,
ul {
    list-style: none;
}

input {
    padding-top: 0;
    padding-bottom: 0;
    font-family: "SimSun", "宋体";
}

input,
select {
    vertical-align: middle;
}

input,
select,
textarea {
    font-size: 12px;
    margin: 0;
}
textarea {
    resize: none;
}

/*防止拖动*/
img {
    border: 0;
    vertical-align: middle;
}

/*  去掉图片低测默认的3像素空白缝隙*/
table {
    border-collapse: collapse;
}
/* 去斜体 */
i {
  font-style:normal
}
body {
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    color: #666;
    background: #fff;
}

a {
    color: #555;
    text-decoration: none;
}
a:active,a:hover{
    color: #555;

}
h1,
h2,
h3,
h4,
h5,
h6 {
    text-decoration: none;
    font-weight: normal;
    font-size: 100%;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
}

.ac {
    text-align: center;
}
/* 图片加载时 */
img[lazy=loading] {
  background-image: url('../static/loading.gif');
  background-size: .6rem .6rem;
  background-repeat: no-repeat;
  background-position: center; 
} 
/* 头尾部固定 */
.wapper{
  padding: .88rem 0 .98rem 0;
}

/* 提示消息 */
.ivu-message{
  z-index: 9999;
}
.ivu-message-notice-content{
  background-color: rgba(0,0,0,.6) !important;
  color: @color-text3 !important;
  top: 15vh !important;
  font-size: @font-size-small-s !important;
  padding: 0 .2rem;
  line-height: .7rem;
  .ivu-icon{
    display: none;
  }
}

/* 清除浮动 */
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {
    *zoom: 1;
}
.fl{
  float: left;
}
.fr{
  float: right;
}

.ivu-affix{
  z-index: 15;
}

/* 图标 */
.icon-photo{
  .icon-photo();
}
.icon-dotted{
  .icon-dotted();
}
.icon-share{
  .icon-share();
}
.icon-back{
  .icon-back();
}
.icon-address{
  .icon-address();
}
.icon-tochecked{
  .icon-tochecked();
}
.icon-chevron-down{
  .icon-chevron-down();
}
.icon-search{
  .icon-search();
}
.icon-close{
  .icon-close();
}
.icon-delete{
  .icon-delete();
}
.icon-close-red{
  .icon-close-red();
}
.icon-arrows{
  .icon-arrows();
}
.icon-clear{
  .icon-clear();
}
.icon-phone{
  .icon-phone();
}
.icon-shearch01{
  .icon-shearch01();
}
.icon-price{
  .icon-price();
}
.icon-shop{
  .icon-shop();
}
.icon-order{
  .icon-order();
}
.icon-check{
  .icon-check();
}

.icon-checked02{
  .icon-checked02();
}
.icon-clock{
  .icon-clock();
}
.icon-edit{
  .icon-edit();
}
.icon-add{
.icon-add();  
}
.icon-top{
  .icon-top();
}
.icon-car{
  .icon-car();
}
</style>
