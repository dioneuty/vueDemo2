<template>
  <div class="jumbotron">
    <form>
      <h2 class="display-5">{{ sBuletinTitle  }} </h2>
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" class="form-control" id="title">
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea type="text" class="form-control" id="content" rows="15"></textarea>
      </div>
    </form>
    <div>
      <button class="btn btn-light">수정</button>
      <a href="#/bulletin">
        <button class="btn btn-primary">목록</button>
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
