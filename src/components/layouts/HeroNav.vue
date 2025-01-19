<template>
	<header class=" bg-transparent border-b border-line">
		<div class="container max-w-[1440px] flex items-center justify-between py-5 md:px-5 px-4 flex-wrap ">
			<nuxt-link to="/">
				<img src="/lt.svg" alt="logo" class=" md:w-auto w-32">
			</nuxt-link>
			<!--
		<div class="flex items-center gap-5 order-3  md:order-2 mt-5 md:mt-0 mx-auto">
			<nuxt-link to="/privacy" class="underline">
				Privacy Policy
			</nuxt-link>
			<nuxt-link to="/terms" class="underline">
				Terms of Service
			</nuxt-link>
		</div> -->

			<nuxt-link v-if="!isLoggedIn" to="/auth/login" class="btn-primary">
				Login
			</nuxt-link>
			<nuxt-link v-else to="/auth/login" class="btn-primary">
				Dashboard
			</nuxt-link>
		</div>
	</header>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/auth/user'


const { isLoggedIn } = useUser()
</script>

<style scoped>

</style>
