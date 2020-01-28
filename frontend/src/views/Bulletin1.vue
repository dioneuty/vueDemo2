<template>
  <div id="bulletin">
    <h2>{{ $store.state.sBuletinTitle  }} </h2>
    <table class="table">
    <th>
      <td>
      {{$store.state.objBulThead.title}}
      </td>
      <td>
        {{$store.state.objBulThead.cont}}
        </td>
    </th>
    <tr v-for="(item, index)  in $store.state.arrThread[($store.state.nCnt - 1)]">
      <td>{{ item.title }}</td>
      <td>{{ item.content }}</td>
    </tr>  
    </table>  

    <div>
      <p>
        <span v-for="(item, nIndex) in $store.state.arrPage">
          <a v-if='item == $store.state.nCnt' style="color:red">{{item}} </a>
          <a v-if='item != $store.state.nCnt' style="color:blue; cursor:pointer" v-on:click="$store.state.nCnt = (($store.state.nScroll -1) * 10) + nIndex + 1">{{item}} </a>
        </span>
      </p>
    </div>
    <div>
    <button v-on:click="$store.commit('increment')"><<</button>    
    <button v-on:click="$store.commit('decrement')">prev</button>
    <button v-on:click="$store.commit('increment')">next</button>    
    <button v-on:click="$store.commit('increment')">>></button>    
    </div>
    <div>
    <input type="text"/>
    <button>검색</button>
    </div>
  </div>
</template>
<script>
import store from '@/store';

export default {
  name: 'bulletin',
  created: function () {
    store.commit('init');
  }  
}
</script>
