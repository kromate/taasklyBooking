

<template>
	<main>
		{{ bookingIsEmpty }}
		<DashboardBookingsList :bookings="fetchedBookings" />
	</main>
</template>

<script setup lang="ts">
import { usePageHeader } from '@/composables/utils/header'
import { useFetchBookings } from '@/composables/dashboard/bookings/fetch'


const { bookingIsEmpty, fetchUserBookings, fetchedBookings } = useFetchBookings()
fetchUserBookings()

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
