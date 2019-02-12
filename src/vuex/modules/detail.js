import Util from '../../util/common'
import * as types from '../types'
import Vue from 'vue'

// 容器
const state = {
  productDatas: '', //detail父组件请求的当前页面商品数据
  colSelected: 0, //0是index,表示第一个
  sizeSelected: 0, //0是index,表示第一个
  count: 0, //购物车里的商品数量
  carList: '', //购物车的商品列表
  fetchLoading: true, //全局加载状态的Loading
  selectedList: '', //已选择的购物车商品列表
  unSelectedList: '', //未选择的购物车商品列表,提交订单后用它替换carList
  detailTab:0 //头部切换状态
}

//更改 store 中的状态的唯一方法:提交 mutation
/*
  购物车逻辑:
      unSelectedList：未打钩的购物车商品列表
      SelectedList：已勾选的购物车商品列表
      carList:购物车商品列表
      当支付成功之后,购物车列表需要减掉SelectedList，留下unSelectedList
      直接用unSelectedList替换当前carList即可
*/
const mutations = {
//头部切换状态
  [types.DETAIL_TAB] (state,res) {
    state.detailTab = res
  },

  //异步请求的数据
  [types.SET_DATAS](state, res) {
    state.productDatas = res
  },

  //详情页商品颜色的选择
  [types.CHANGE_COL_SELECTED](state, res) {
    state.colSelected = res;
  },

  //详情页商品尺寸的选择

  [types.CHANGE_SIZE_SELECTED](state, res) {
    state.sizeSelected = res;
  },

  // 向购物车商品列表添加商品
  [types.ADD_PRODUCT](state) {
    state.carList = Util.getLocal('carList');
  },

  //获取当前购物车商品数量
  [types.CHANGE_COUNT](state) {
    state.count = Util.getLocal('count')
  },

  // 重置购物车
  [types.RESET_CARLIST](state) {
    state.carList = Util.getLocal('carList')
  },

  // 重置购物车数量
  [types.RESET_COUNT](state) {
    state.count = Util.getLocal('carList').length
  },

  // loading开关
  [types.SET_LOADING](state, res) {
    state.fetchLoading = res
  },
  // 购物车里打钩的商品
  ['SET_SELECTEDLIST'](state, res) {
    state.selectedList = Util.getLocal('selectedList')
  },

  //购物车里没打钩的商品

  ['SET_UNSELECTEDLIST'](state) {
    state.unSelectedList = Util.getLocal('unSelectedList')
  }

}

let vm = new Vue({});

// action提交mutations，不直接更改状态（通过store.dispatch触发）
const actions = {



}

// 如同计算属性,处理state的某个状态
const getters = {
}



export default {
  state,
  actions,
  getters,
  mutations
}