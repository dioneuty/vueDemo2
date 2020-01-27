import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 1
    ,menuIdx : 0
    ,buletinTitle : '게시판'
    ,bulThead : {title: '제목', cont: '내용'}
    ,data : [
      {title: '게시판1', content: '아 어려워1'},
      {title: '게시판1', content: '아 어려워23'},
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
    ,decrement (state) {
      if(state.count > 1) state.count--
    }
    ,incMenuIdx (state) {
      state.menuIdx++
    }   
    ,decMenuIdx (state) {
      state.menuIdx--
    }       
  },
  actions: {
  },
  modules: {
  }
})
