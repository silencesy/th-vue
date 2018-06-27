import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


// 状态
const state={
   trigger: 'Home'
}
// 方法
const mutations = {
	changeTrigger(state,name) {
		state.trigger = name
	}
}
// 过滤
const getters = {

}

// 异步
const actions = {

}

// 公开
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})