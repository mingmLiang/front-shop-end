/*
* @Author: Administrator
* @Date:   2017-11-13 20:16:30
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-13 20:17:32
*/
import Util from '../../util/common'
import * as types from '../types'

const state = {
  orderList: '' //商品列表
}

const mutations = {
   [types.ORDER_TLIST] (state,res) {
    state.orderList = res
  }
}


export default {
  state,
  mutations
}
