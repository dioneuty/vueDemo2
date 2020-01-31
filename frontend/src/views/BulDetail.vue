<template>
	<div class="container" id="bulPage">
		<bulletin-detail></bulletin-detail>
	</div>
</template>

<script>
import BulletinDetail from '@/components/BulletinDetail.vue'

export default {
	name: 'bulDetail',
	components: {
		'bulletin-detail' : BulletinDetail,
	}
}
</script>