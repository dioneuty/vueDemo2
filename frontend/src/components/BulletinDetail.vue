<template>
  <div class="jumbotron">
    <form>
      <h2 class="display-5">{{ sBuletinTitle  }} </h2>
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" class="form-control" id="title" v-bind:value="arrThread[nDtlIdx].title" readonly>
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea type="text" class="form-control" id="content" v-bind:value="arrThread[nDtlIdx].content" rows="15" readonly></textarea>
      </div>
    </form>
    <div>
      <input type="hidden" ref="idx" :value="arrThread[nDtlIdx].idx" />
      <input type="hidden" ref="id" :value="arrThread[nDtlIdx].id" />
      <button class="btn btn-light">수정</button>
      <button class="btn btn-light">수정</button>
      <a v-on:click="fn_goList()">
        <button class="btn btn-primary">목록</button>
      </a>
      <button class="btn btn-light" @click="fn_deleteOne()">삭제</button>
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
    fn_deleteOne(){
      if(confirm("글을 삭제하시겠습니까?")) {
        let _store = this.$store;
        let _router = this.$router;

        AXIOS({
          url: '/deleteOneBulThreadByUserId', 
          method: 'post',
          params :{
            idx : this.$refs.idx._value,
            //id : this.$refs.id._value,
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
    }
  }
}
</script>
