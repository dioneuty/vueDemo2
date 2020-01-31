//api import. 정광민
import arrBulletinList from '@/api/bulletinList'

const state = {
    nCnt : 1
    ,nMenuIdx : 0
    ,nScroll : 1
    ,nDtlIdx : 0
    ,sBuletinTitle : '게시판'
    ,objBulThead : {title: '제목', cont: '내용'}
    ,arrThread : []
    ,arrPage : []
}

const mutations = {
    gfn_init(state) {
      arrBulletinList.getArrBulletinList(payload => state.arrThread = payload)
      let arr = [];
      let nTmp = (state.nScroll - 1) * 10 + 1;
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
    ,gfn_setBulletinList (state, payload) {
      state.arrThread = payload;
    }
    ,gfn_clickPage (state, nIndex) {
      state.nCnt = ((state.nScroll -1) * 10) + nIndex + 1;
    }
}

const actions = {
  //   gafn_increment (context) {
  //     	context.commit('gfn_increment')
	// },
	// gafn_getBulletinList ({ commit }) {
	// 	arrBulletinList.getArrBulletinList(payload => {
  //     commit('gfn_setBulletinList', payload)
	// 	})
	// }
}

const getters = {
    gnCnt: state => {
      return state.nCnt;
    },
    gnScroll: state => {
      return state.nScroll;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}