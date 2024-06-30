<template>
	<div class="flex items-center justify-between w-full gap-4 p-4   text-dark relative">
		<div class="flex relative">
			<input ref="availabilityInput" v-model="availabilityName" :disabled="!isTitleEditable" type="text" class="input-field w-auto pr-10">
			<Icon :name="isTitleEditable ? 'lock' :'edit'" class="w-4 cursor-pointer absolute right-4 top-4" @click="isTitleEditable = !isTitleEditable" />
		</div>

		<button class="btn-primary min-w-[100px] ml-auto" type="submit" :disabled="loading" @click="edit()">
			<span v-if="!loading">Save</span>
			<Spinner v-else />
		</button>
		<hr class="w-full h-[1px] absolute left-0 border border-dark  top-[75px]">
	</div>

	<main class="px-7 pt-8 mb-60">
		<ServicesAvailabilityCreate :edit="true" :loading="idLoading" />
	</main>
</template>

<script setup lang="ts">
import { useCreateAvailability } from '@/composables/dashboard/availability/create'
import { useEditAvailability } from '@/composables/dashboard/availability/edit'


const { availabilityName } = useCreateAvailability()

const { edit, idLoading, initAvailabilityEdit, loading } = useEditAvailability()

const isTitleEditable = ref(false)
const availabilityInput = ref(null) as any




watch(() => useRoute().params.id, async (newId) => {
	initAvailabilityEdit(newId as string)
	}, { immediate: true }
)


definePageMeta({
	layout: 'dashboard',
	middleware: 'is-authenticated'
})
</script>

<style scoped>

</style>
