<template>
	<div id="bulPage" class="container">
		<bulletin-list></bulletin-list>
	</div>
</template>

<script>
/* /src -> @ Alias ��밡��. �ŵ���  */
import BulletinList from '@/components/BulletinList.vue'

export default {
	name: 'bulPage',
	components: {
		'bulletin-list' : BulletinList,
	}
}
</script>