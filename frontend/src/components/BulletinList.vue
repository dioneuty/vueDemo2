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
        <tr v-for="(item, nIndex) in arrThread" v-bind:key="nIndex" v-on:click="gfn_goDetail(nIndex)">
          <th scope="row">{{ item.idx}}</th>
          <td><a href="#/bulletinDetail">{{ item.title }}</a></td>
          <td></td>
        </tr>  
      </tbody>  
    </table>
    <div class="center-block">
      <ul class="pagination justify-content-center">
        <li v-if="nScroll > 1" class="page-item">
          <a class="page-link" v-on:click="gfn_prevBlock()">&laquo;</a>
        </li>    
        <li class="page-item" v-for="(item, nIndex) in arrPage" v-bind:key="nIndex">
          <a class="page-link" v-if='item == nCnt' style="color:white; background-color : #007bff; border-color : #007bff;">{{item}}</a>
          <a class="page-link" v-if='item != nCnt' style="color:blue; cursor:pointer" v-on:click="gfn_clickPage(nIndex)">{{item}} </a>
        </li>
        <li v-if="nScroll * 10 < nTotCnt" class="page-item">
          <a class="page-link" v-on:click="gfn_nextBlock()">&raquo;</a>
        </li>    
      </ul>
    </div>
    <div>
      <div class="input-group mb-3">
        <input type="text" class="form-control"/>
        <div class="input-group-append">
          <button class="input-group-text">검색</button>
        </div>
      </div>
      <a href="#/bulletinWrite">
        <button class="btn btn-light">글쓰기</button>
      </a>
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
      'nTotCnt',
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
    fn_goDetail(nIdx){
      this.$store.state.nDtlIdx = nIdx;
      this.$store.commit('b/gfn_goDetail');
    },
    ...mapMutations('b', [
      'gfn_decrement',
      'gfn_increment',
      'gfn_nextBlock',
      'gfn_prevBlock',
      'gfn_clickPage',
      'gfn_goDetail',
    ]),
    ...mapActions('b', [
    ]),
    
  }

}
</script>
