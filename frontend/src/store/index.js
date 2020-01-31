import Vue from 'vue'
import Vuex from 'vuex'
import bulletin from './modules/bulletin.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		b : bulletin,
	},
})