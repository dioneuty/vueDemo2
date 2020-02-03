<template>
  <div class="jumbotron">
    <form>
      <h2 class="display-5">{{ sBuletinTitle  }} </h2>
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" class="form-control" id="title" v-model="sNewTitle">
      </div>
      <div class="form-group">
        <label for="title">이름</label>
        <input type="text" class="form-control" id="title" v-model="sNewName">
        <label for="title">아이디</label>
        <input type="text" class="form-control" id="title" v-model="sNewId">
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea type="text" class="form-control" id="content" rows="15" v-model="sNewCont"></textarea>
      </div>
    </form>
    <div>
      <button class="btn btn-light" v-on:click="fn_createOne()">글쓰기</button>
      <a v-on:click="fn_goList()">
        <button class="btn btn-primary">목록</button>
      </a>
      <button class="btn btn-light">삭제</button>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import axios from 'axios'

const AXIOS = axios.create({
  baseURL: `/api`,
});

export default {
  name: 'bulletin',
  data(){
    return { 
      sNewCont : '',
      sNewTitle : '',
      sNewId : '',
      sNewName : '',
    }
  },
  computed: {
    ...mapState('b', [
      'nCnt',
      'nDtlIdx',
      'nScroll',
      'arrThread',
      'arrPage',
      'objBulThead',
      'sBuletinTitle',
    ]),
  },
  methods : { //mapMutations, mapActions
    fn_goList(){
      this.$router.push('/bulletin');
    },
    fn_createOne(){
      if(confirm("글을 생성하시겠습니까?")) {
        let _store = this.$store;
        let _router = this.$router;

        AXIOS({
          url: '/createOneBulThread', 
          method: 'post',
          params :{
            title : this.sNewTitle,
            content : this.sNewCont,
            id : this.sNewId,
            name : this.sNewName,
          } 
        })
        .then(function (response) {
          // handle success
          console.log(response);
          _store.nCnt = 1;
          _router.push('/bulletin');          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })           
      }
    },
    ...mapMutations('b', [
      'gfn_createOne',
    ]),
    ...mapActions('b', [
    ]),
    
  }  
}
</script>
