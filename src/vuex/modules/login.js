import Util from '../../util/common'
import * as types from '../types'

const state = {
  token:0,
  userId:sessionStorage.getItem("qtt_user_id")
}
 
const mutations = {
  [types.CHANGE_TOKEN] (state,res) {
    state.token = res;
  },
  [types.USER_ID] (state,res) {
    state.userId = res
    sessionStorage.setItem("qtt_user_id", res);
  }
}


export default {
  state,
  mutations
}




