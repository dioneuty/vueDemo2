//api import. 정광민
import arrBulletinList from '@/api/bulletinList'
import axios from 'axios'

const state = {
    nCnt : 1
    ,nMenuIdx : 0
    ,nScroll : 1
    ,nDtlIdx : 0
    ,nTotCnt : 0
    ,sBuletinTitle : '게시판'
    ,objBulThead : {title: '제목', cont: '내용'}
    ,arrThread : []
    ,arrPage : []
}

const AXIOS = axios.create({
  baseURL: `/api`,
});

const afn_getBulList = function(){
  console.log(state.nCnt);

  AXIOS({
    url: '/getBulList', 
    method: 'post',
    params :{
      cnt : state.nCnt
    } 
  })
  .then(function (response) {
    // handle success
    //console.log(response);
    let data = response.data;
    // let arrList = [];
    //arrList.push();
    state.arrThread = data.list;
    state.nTotCnt = data.cnt;

    let arrPageList = [];
    let nTmp = (state.nScroll - 1) * 10 + 1;
    for(let i = nTmp; i <= nTmp + 9; i++){
      if(i <= state.nTotCnt) arrPageList.push(i);
    }
    state.arrPage = arrPageList;    

    // console.log(data);      
    return true;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return false;
  })   
}

const mutations = {
    async gfn_init(state) {
      await !afn_getBulList();
    }
    // ,gfn_increment (state) {
    //   if(state.arrThread[state.nCnt] != undefined){
    //     ++state.nCnt

    //     if(state.nCnt > state.nScroll * 10){
    //       ++state.nScroll;

    //       let arr = [];
    //       let nTmp = (state.nScroll - 1 ) * 10 + 1;
    //       for(let i = nTmp; i < nTmp + 10; i++){
    //         if(state.arrThread[i-1] != undefined) arr.push(i);
    //       }

    //       state.arrPage = arr;
    //     }
    //   }
    // }
    // ,gfn_decrement (state) {
    //   if(state.arrThread[state.nCnt - 1] != undefined){
    //     if(state.nCnt > 1) --state.nCnt;

    //     if(state.nCnt <= (state.nScroll - 1) * 10){
    //       if(state.nScroll > 1) --state.nScroll;

    //       let arr = [];
    //       let nTmp = (state.nScroll - 1 ) * 10 + 1;
    //       for(let i = nTmp; i < nTmp + 10; i++){
    //         if(state.arrThread[i-1] != undefined) arr.push(i);
    //       }

    //       state.arrPage = arr;
    //     }   
    //   }   
    // }
    ,gfn_incnMenuIdx (state) {
      state.nMenuIdx++
    }   
    ,gfn_decnMenuIdx (state) {
      state.nMenuIdx--
    }       
    ,gfn_prevBlock (state) {
      // if(state.arrThread[((state.nScroll - 1) * 10) - 10] != undefined){


      //   // let arr = [];
      //   // let nTmp = (state.nScroll - 1) * 10 + 1;
      //   // for(let i = nTmp; i < nTmp + 10; i++){
      //   //   if(state.arrThread[i-1] != undefined) arr.push(i);
      //   // }

      //   // state.arrPage = arr;
      // }

      if(state.nScroll * 10 > 10){
        state.nScroll--;
        state.nCnt = (state.nScroll * 10) - 9;

        afn_getBulList();
      }
    }
    ,gfn_nextBlock (state) {
      // if(state.arrThread[((state.nScroll + 1) * 10) - 10] != undefined){
        // let arr = [];
        // let nTmp = (state.nScroll - 1) * 10 + 1;
        // for(let i = nTmp; i < nTmp + 10; i++){
        //   if(state.arrThread[i-1] != undefined) arr.push(i);
        // }

        // state.arrPage = arr;
      // }

      if(state.nScroll * 10 < state.nTotCnt){
        state.nScroll++;
        state.nCnt = (state.nScroll * 10) - 9;
  
        afn_getBulList();      
      }
    }
    ,gfn_goDetail (state, nIdx) {
      state.nDtlIdx = nIdx;
      // console.log(state.nCnt, state.nDtlIdx);
    }
    ,gfn_setBulletinList (state, payload) {
      state.arrThread = payload;
    }
    ,async gfn_clickPage (state, nIndex) {
      state.nCnt = ((state.nScroll -1) * 10) + nIndex + 1;

      await !afn_getBulList();
    }
    ,gfn_createOne (state) {

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