import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nCnt : 1
    ,nMenuIdx : 0
    ,sBuletinTitle : '게시판'
    ,objBulThead : {title: '제목', cont: '내용'}
    ,arrThread : [
      [
        {title: '게시판1', content: '아 어려워1'},
        {title: '게시판1', content: '아 어려워23'},
        {title: '게시판1', content: '아 어려워23'},
        {title: '게시판1', content: '아 어려워23'},
        {title: '게시판1', content: '아 어려워23'},
        {title: '게시판1', content: '아 어려워23'},
        {title: '게시판1', content: '아 어려워23'},
        {title: '게시판1', content: '아 어려워23'},
        {title: '게시판1', content: '아 어려워23'},
        {title: '게시판1', content: '아 어려워23'},
      ],
      [
        {title: '게시판2', content: '아 어려워1'},
        {title: '게시판2', content: '아 어려워23'},
        {title: '게시판2', content: '아 어려워23'},
        {title: '게시판2', content: '아 어려워23'},
        {title: '게시판2', content: '아 어려워23'},
        {title: '게시판2', content: '아 어려워23'},
        {title: '게시판2', content: '아 어려워23'},
        {title: '게시판2', content: '아 어려워23'},
        {title: '게시판2', content: '아 어려워23'},
        {title: '게시판2', content: '아 어려워23'},
      ],
      [
        {title: '게시판3', content: '아 어려워1'},
        {title: '게시판3', content: '아 어려워23'},
        {title: '게시판3', content: '아 어려워23'},
        {title: '게시판3', content: '아 어려워23'},
        {title: '게시판3', content: '아 어려워23'},
        {title: '게시판3', content: '아 어려워23'},
        {title: '게시판3', content: '아 어려워23'},
        {title: '게시판3', content: '아 어려워23'},
        {title: '게시판3', content: '아 어려워23'},
        {title: '게시판3', content: '아 어려워23'},
      ],
      [
        {title: '게시판4', content: '아 어려워1'},
        {title: '게시판4', content: '아 어려워23'},
        {title: '게시판4', content: '아 어려워23'},
        {title: '게시판4', content: '아 어려워23'},
        {title: '게시판4', content: '아 어려워23'},
        {title: '게시판4', content: '아 어려워23'},
        {title: '게시판4', content: '아 어려워23'},
        {title: '게시판4', content: '아 어려워23'},
        {title: '게시판4', content: '아 어려워23'},
        {title: '게시판4', content: '아 어려워23'},
      ],
      [
        {title: '게시판5', content: '아 어려워1'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
      ],
      [
        {title: '게시판6', content: '아 어려워1'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
      ],
      [
        {title: '게시판7', content: '아 어려워1'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
      ],
      [
        {title: '게시판8', content: '아 어려워1'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
      ],
      [
        {title: '게시판9', content: '아 어려워1'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
      ],
      [
        {title: '게시판10', content: '아 어려워1'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
      ],
      [
        {title: '게시판11', content: '아 어려워1'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
      ],
      [
        {title: '게시판12', content: '아 어려워1'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
      ],
      [
        {title: '게시판5', content: '아 어려워1'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
        {title: '게시판5', content: '아 어려워23'},
      ],
    ]
    ,nScroll : 1
    ,arrPage : []
  },
  mutations: {
    init (state) {
      let arr = [];
      for(let i = 1; i <= state.arrThread.length; i++)
      {
        if(i > 10) break;

        arr.push(i);
      }

      state.arrPage = arr;
    }
    ,increment (state) {
      if(state.arrThread[state.nCnt] != undefined)
      {
        ++state.nCnt

        if(state.nCnt > state.nScroll * 10){
          ++state.nScroll;

          let arr = [];
          let nTmp = (state.nScroll - 1 ) * 10 + 1;
          for(let i = nTmp; i < nTmp + 10; i++){
            if(state.arrThread[i-1] != undefined) arr.push(i);
          }

          state.arrPage = arr;
        }
      }
    }
    ,decrement (state) {
      if(state.arrThread[state.nCnt - 1] != undefined)
      {
        if(state.nCnt > 1) --state.nCnt;

        if(state.nCnt <= (state.nScroll - 1) * 10){
          if(state.nScroll > 1) --state.nScroll;

          let arr = [];
          let nTmp = (state.nScroll - 1 ) * 10 + 1;
          for(let i = nTmp; i < nTmp + 10; i++){
            if(state.arrThread[i-1] != undefined) arr.push(i);
          }

          state.arrPage = arr;
        }   
      }   
    }
    ,incnMenuIdx (state) {
      state.nMenuIdx++
    }   
    ,decnMenuIdx (state) {
      state.nMenuIdx--
    }       
    ,movePageNum (state) {

    }
  },
  actions: {
  },
  modules: {
  }
})
