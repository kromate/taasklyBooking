<template>
	<main class="flex flex-col gap-4 p-4">
		<TypeList :booking-types="bookingTypes" />
	</main>
</template>

<script setup lang="ts">
import { usePageHeader } from '@/composables/utils/header'
import { useFetchbookingTypes } from '@/composables/dashboard/bookingTypes/fetch'
import TypeList from '@/components/dashboard/bookingTypes/TypeList.vue'


const { bookingTypes, fetchbookingTypes, loading } = useFetchbookingTypes()

onMounted(() => {
	fetchbookingTypes()
})

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
