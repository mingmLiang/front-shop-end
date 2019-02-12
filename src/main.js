import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import $ from 'jquery'
import router from './router'
import store from '@/vuex/store.js' //vuex
import http from '@/http/http.js' //http请求
import less from 'less'
import iView from 'iview'; // iview-UI框架
import 'iview/dist/styles/iview.css';    
import VueLazyload from 'vue-lazyload';//图片懒加载
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
Vue.use(VueLazyload);
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.$http = http;


// 用钩子函数beforeEach()对路由进行判断

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 需要权限,进一步进行判断
    if (store.state.login.userId) { // 通过vuex state获取当前的token是否存在
      next();
    } else { //如果没有权限,重定向到登录页,进行登录
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else { //不需要权限 直接跳转
    next();
  }
})

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})


// 注册一个全局自定义指令 v-icon,渲染图标
Vue.directive('icon', {
  bind: function (el) {
    // console.log(el);
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})


// 改变html标签font-size,实现移动端适配
$(window).resize(fzHtml);
function fzHtml() {
  let fz = $(window).width() / 7.5;
  if (fz > 100) {
    fz = 100;
  }
  $('html').css('font-size', fz + 'px');
}
$(function() {
  $(window).trigger('resize');
});





