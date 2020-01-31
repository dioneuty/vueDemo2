<template>
  <div id="bulletin">
    <h2>{{ sBuletinTitle  }} </h2>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="10%">
            번호
          </th>
          <th scope="col" width="80%">
          {{objBulThead.title}}
          </th>
          <th scope="col" width="20%">
            작성자
          </th>          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, nIndex) in arrThread[(nCnt - 1)]" v-bind:key="nIndex" v-on:click="fn_goDetail(nIndex)">
          <th scope="row">{{ nIndex + 1}}</th>
          <td><a href="#/bulletinDetail">{{ item.title }}</a></td>
          <td></td>
        </tr>  
      </tbody>  
    </table>
    <div class="center-block">
    <ul class="pagination">
      <li v-if="nScroll > 1" class="page-item">
        <a class="page-link" v-on:click="gfn_prevBlock()">←</a>
      </li>    
      <li class="page-item" v-for="(item, nIndex) in arrPage" v-bind:key="nIndex">
        <a class="page-link" v-if='item == nCnt' style="color:red; background-color : skyblue;">{{item}}</a>
        <a class="page-link" v-if='item != nCnt' style="color:blue; cursor:pointer" v-on:click="gfn_clickPage(nIndex)">{{item}} </a>
      </li>
      <li v-if="nScroll * 10 < arrThread.length" class="page-item">
        <a class="page-link" v-on:click="gfn_nextBlock()">→</a>
      </li>    
    </ul>
    </div>
    <div>
    <button v-on:click="gfn_decrement()" class="btn btn-light">prev</button>
    <button v-on:click="gfn_increment()" class="btn btn-light">next</button>   
    
    </div>
    <div>
    <div class="input-group mb-3">
      <input type="text" class="form-control"/>
      <div class="input-group-append">
        <button class="input-group-text">검색</button>
      </div>
    </div>
    <button class="btn btn-light">글쓰기</button>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'bulletin',
  created: function () {
    this.$store.commit('b/gfn_init');
  },
  computed: { //mapState, mapGetters
    ...mapState('b', [
      'nCnt',
      'nDtlIdx',
      'nScroll',
      'arrThread',
      'arrPage',
      'objBulThead',
      'sBuletinTitle',
    ]),
    ...mapGetters('b',[
      'gnCnt',
      'gnScroll',
    ]),
  },
  methods : { //mapMutations, mapActions
    fn_goDetail : function(nIdx){
      this.$store.state.nDtlIdx = nIdx;
      this.$store.commit('b/gfn_goDetail');
    },
    ...mapMutations('b', [
      'gfn_decrement',
      'gfn_increment',
      'gfn_nextBlock',
      'gfn_prevBlock',
      'gfn_clickPage',
    ]),
    ...mapActions('b', [
    ]),
    
  }

}
</script>
