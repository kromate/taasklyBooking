<template>
	<div class=" min-h-screen">
		<section class="flex flex-col">
			<slot />
		</section>


		<ModalBase />
		<Alert />
	</div>
</template>

<script setup lang="ts">
import { Undo2 } from 'lucide-vue-next'

import { useCustomHead } from '@/composables/core/head'

const showBackBtn = computed(() => useRouter().currentRoute.value.name !== 'b-id')


// const id = useRoute().params.id as string
// await fetchUserBoardById(id)
// if (board.value.title === undefined) {
// 	throw	createError({ statusCode: 404, statusMessage: 'Board not found' })
// }

// useCustomHead({
// 	title: `${board.value.title} | Feedback`,
// 	desc: board.value.desc,
// 	img: '/og.png'
// })



</script>

<style scoped></style>
