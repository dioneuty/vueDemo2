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
    ,nDtlIdx : 0
    ,arrPage : []
  },
  mutations: {
    gfn_init (state) {
      console.log('init');
      let arr = [];
      let nTmp = (state.nScroll - 1) * 10 + 1;
      console.log(nTmp);
      for(let i = nTmp; i <= nTmp + 9; i++){
        if(state.arrThread[i-1] != undefined) arr.push(i);
      }

      state.arrPage = arr;
    }
    ,gfn_increment (state) {
      if(state.arrThread[state.nCnt] != undefined){
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
    ,gfn_decrement (state) {
      if(state.arrThread[state.nCnt - 1] != undefined){
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
    ,gfn_incnMenuIdx (state) {
      state.nMenuIdx++
    }   
    ,gfn_decnMenuIdx (state) {
      state.nMenuIdx--
    }       
    ,gfn_prevBlock (state) {
      if(state.arrThread[((state.nScroll - 1) * 10) - 10] != undefined){
        state.nScroll--;
        state.nCnt = (state.nScroll * 10) - 9;

        let arr = [];
        let nTmp = (state.nScroll - 1) * 10 + 1;
        for(let i = nTmp; i < nTmp + 10; i++){
          if(state.arrThread[i-1] != undefined) arr.push(i);
        }

        state.arrPage = arr;
      }
    }
    ,gfn_nextBlock (state) {
      if(state.arrThread[((state.nScroll + 1) * 10) - 10] != undefined){
        state.nScroll++;
        state.nCnt = (state.nScroll * 10) - 9;

        let arr = [];
        let nTmp = (state.nScroll - 1) * 10 + 1;
        for(let i = nTmp; i < nTmp + 10; i++){
          if(state.arrThread[i-1] != undefined) arr.push(i);
        }

        state.arrPage = arr;

      }
    }
    ,gfn_goDetail (state) {
      console.log(state.nCnt, state.nDtlIdx);
    }
  },
  actions: {
    gfn_increment (context) {
      context.commit('gfn_increment')
    }
  },
  getters: {
    gnCnt: state => {
      return state.nCnt;
    },
    gnScroll: state => {
      return state.nScroll;
    },
  },
  modules: {
  }
})
