<template>
	<main class="flex flex-col gap-4 p-4">
		Event Types
	</main>
</template>

<script setup lang="ts">
import { usePageHeader } from '@/composables/utils/header'

definePageMeta({
	layout: 'dashboard',
	middleware: ['is-authenticated', () => {
usePageHeader().setPageHeader({
	title: 'Booking Types',
	description: 'Configure the types of bookings you offer.',
	btnText: 'create  ',
	btnCall: () => useRouter().push('/booking-types/create'),
	shouldShowFab: true,
	shouldShowTab: usePageHeader().isLargeScreen.value

})
	}]
})
</script>

<style scoped>

</style>
