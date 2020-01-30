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
    <button>수정</button>
    <button><a href="#/bulletin">목록</a></button>
    <button>삭제</button>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'bulletin',
  computed: {
    ...mapState([
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
