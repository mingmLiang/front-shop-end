import Util from '../../util/common'
import * as types from '../types'

const state = {
  tabIndex:0,
  productList: '', //商品列表
  productSpec: '' //商品规格
}

const mutations = {
  [types.CHANGE_TABINDEX] (state,res) {
    state.tabIndex = res
  },
   [types.PRODUCT_TLIST] (state,res) {
    state.productList = res
  },
  [types.PRODUCT_SPEC] (state,res) {
    state.productSpec = res
  }
}


export default {
  state,
  mutations
}
