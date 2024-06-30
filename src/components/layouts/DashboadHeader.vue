<template>
	<header class="container flex items-center justify-between py-4 md:px-5 px-4 bg-transparent border-b md:border-none">
		<div class="flex flex-col">
			<h3 class="font-cal max-w-36 sm:max-w-72 md:max-w-80 text-emphasis truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl ">
				{{ headstate.title.value }}
			</h3>
			<span class="hidden text-sm md:block">
				{{ headstate.description.value }}
			</span>
		</div>


		<div class="w-auto md:hidden block">
			<AvatarDropdown />
		</div>


		<button class="btn-primary hidden md:flex" @click="headstate.btnCall.value">
			{{ headstate.btnText.value }}
		</button>
	</header>
</template>

<script setup lang="ts">

import { usePageHeader } from '@/composables/utils/header'

import AvatarDropdown from '@/components/core/AvatarDropdown.vue'

const { headstate } = usePageHeader()


</script>

<style scoped>
.btn-primary{
@apply text-sm px-5 py-3 md:text-base md:px-10
}
</style>
