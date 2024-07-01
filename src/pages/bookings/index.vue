

<template>
	<div>
		bookings
	</div>
</template>

<script setup lang="ts">
import { usePageHeader } from '@/composables/utils/header'

definePageMeta({
	layout: 'dashboard',
	middleware: ['is-authenticated', () => {
usePageHeader().setPageHeader({
	title: 'Bookings',
	description: 'See upcoming and past bookings here',
	shouldShowFab: false,
	shouldShowTab: false

})
	}]
})
</script>

<style scoped>

</style>
