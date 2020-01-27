<template>
  <div id="bulletin">
    <h2>{{ $store.state.buletinTitle  }} </h2>
    <table class="table">
    <th>
      <td>
      {{$store.state.bulThead.title}}
      </td>
      <td>
        {{$store.state.bulThead.cont}}
        </td>
    </th>
    <tr v-for="(item, index)  in $store.state.data">
      <td>{{ item.title }}</td>
      <td>{{ item.content }}</td>
    </tr>  
    </table>  
    <button v-on:click="$store.commit('decrement')">prev</button>
    <h1>{{$store.state.count}}</h1>
    <button v-on:click="$store.commit('increment')">next</button>
  </div>
</template>
