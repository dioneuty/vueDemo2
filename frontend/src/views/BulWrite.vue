<template>
	<div class="container" id="bulPage">
		<bulletin-write></bulletin-write>
	</div>
</template>

<script>
import BulletinWrite from '@/components/BulletinWrite.vue'

export default {
	name: 'bulWrite',
	components: {
		'bulletin-write' : BulletinWrite,
	}
}
</script>