/** 
 * vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import getters from './getters'
import mutations from './mutations'
// import actions from './actions'
import createPersistedState from 'vuex-persistedstate'
import storage from './../utils/storage'

Vue.use(Vuex)

const state = {
    userInfo: '' || storage.getItem("userInfo") // 获取用户信息
}

export default new Vuex.Store({
  state,
//   getters,
  mutations,
//   actions,
  strict: false, // 生产环境下不开启严格模式,严格模式会深度监测状态树来检测不合规的状态变化，造成不必要的性能损失
  plugins: [createPersistedState()] // 持久化插件,解决刷新数据消失的问题
})
