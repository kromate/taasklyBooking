<template>
	<div class="flex items-center justify-between w-full gap-4 p-4   text-dark relative">
		<div class="flex relative">
			<input ref="availabilityInput" v-model="availabilityName" :disabled="!isTitleEditable" type="text" class="input-field w-auto pr-10">
			<Icon :name="isTitleEditable ? 'lock' :'edit'" class="w-4 cursor-pointer absolute right-4 top-4" @click="isTitleEditable = !isTitleEditable" />
		</div>

		<button class="btn-primary min-w-[100px] ml-auto" type="submit" :disabled="loading" @click="create()">
			<span v-if="!loading">Save</span>
			<Spinner v-else />
		</button>
		<hr class="w-full h-[1px] absolute left-0 border border-dark  top-[75px]">
	</div>

	<main class="px-7 pt-8 mb-60">
		<ServicesAvailabilityCreate :edit="false" />
	</main>
</template>

<script setup lang="ts">
import { Delete, Edit } from 'lucide-vue-next'
import { useCreateAvailability } from '@/composables/dashboard/availability/create'
const { create, loading, availabilityName, clear_service_availability_data } = useCreateAvailability()


const isTitleEditable = ref(false)
const availabilityInput = ref(null) as any

watch(isTitleEditable, (newVal) => {
	if (newVal && availabilityInput.value) {
    availabilityInput.value.focus()
  }
})
watch(() => useRoute().name, () => {
	clear_service_availability_data()
	}, { immediate: true }
)



definePageMeta({
	layout: 'dashboard',
	middleware: 'is-authenticated'
})
</script>

<style scoped>

</style>
