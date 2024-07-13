

<template>
	<div>
		Coming soon
	</div>
</template>

<script setup lang="ts">
import { usePageHeader } from '@/composables/utils/header'

definePageMeta({
	layout: 'dashboard',
	middleware: ['is-authenticated', () => {
usePageHeader().setPageHeader({
	title: 'Integrations',
	description: 'Connect your account with other services',

	shouldShowFab: false,
	shouldShowTab: false

})
	}]
})
</script>

<style scoped>

</style>
