<template>
  <div id="bulletin">
    <h2>{{ sBuletinTitle  }} </h2>
    <table class="table">
    <th>
      <td>
      {{arrThread[nCnt-1][nDtlIdx].title}}
      </td>
      <td>
        {{arrThread[nCnt-1][nDtlIdx].content}}
        </td>
    </th>
    </table>  

    <div>
    </div>
    <div>
    <button class="btn btn-light">수정</button>
    <a href="#/bulletin">
      <button class="btn btn-light">목록</button>
    </a>
    <button class="btn btn-light">삭제</button>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

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
}
</script>
