<template>
  <div id="bulletin">
    <h2>{{ sBuletinTitle  }} </h2>
    <table class="table">
    <th>
      <td>
      {{objBulThead.title}}
      </td>
      <td>
        {{objBulThead.cont}}
        </td>
    </th>
    <tr v-for="(item, nIndex) in arrThread[(nCnt - 1)]" v-bind:key="nIndex" v-on:click="fn_goDetail(nIndex)">
      <a href="#/bulletinDetail">
      <td>{{ item.title }}</td>
      <td>{{ item.content }}</td>
      </a>
    </tr>  
    </table>  

    <div>
      <p>
        <span v-for="(item, nIndex) in arrPage" v-bind:key="nIndex">
          <a v-if='item == nCnt' style="color:red">{{item}} </a>
          <a v-if='item != nCnt' style="color:blue; cursor:pointer" v-on:click="$store.state.nCnt = (($store.state.nScroll -1) * 10) + nIndex + 1">{{item}} </a>
        </span>
      </p>
    </div>
    <div>
    <button v-if="nScroll > 1" v-on:click="gfn_prevBlock()">←</button>    
    <button v-on:click="gfn_decrement()">prev</button>
    <button v-on:click="gfn_increment()">next</button>   
    <button v-if="nScroll * 10 < arrThread.length" v-on:click="gfn_nextBlock()">→</button>    
    </div>
    <div>
    <input type="text"/>
    <button>검색</button>
    <button>글쓰기</button>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'bulletin',
  created: function () {
    this.$store.commit('gfn_init');
  },
  computed: { //mapState, mapGetters
    ...mapState([
      'nCnt',
      'nDtlIdx',
      'nScroll',
      'arrThread',
      'arrPage',
      'objBulThead',
      'sBuletinTitle',
    ]),
    ...mapGetters([
      'gnCnt',
      'gnScroll',
    ]),
  },
  methods : { //mapMutations, mapActions
    fn_goDetail : function(nIdx){
      this.$store.state.nDtlIdx = nIdx;
      this.$store.commit('gfn_goDetail');
    },
    ...mapMutations([
      'gfn_decrement',
      'gfn_increment',
      'gfn_nextBlock',
      'gfn_prevBlock',
    ]),
    ...mapActions([
    ]),
    
  }

}
</script>
