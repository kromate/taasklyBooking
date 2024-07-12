<template>
	<section>
		<div v-for="booking in bookings" :key="booking.id" class="">
			Yes o
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps({
    bookings: {
        type: Array as PropType<any[]>,
        required: true
    }
})
</script>

<style scoped>

</style>
