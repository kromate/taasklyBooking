<template>
	<header class="container flex items-center justify-between py-4 md:px-5 px-4 bg-transparent">
		<div class="flex flex-col">
			<h3 class="font-cal max-w-36 sm:max-w-72 md:max-w-80 text-emphasis truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl ">
				Booking Type
			</h3>
			<span class="hidden text-sm md:block">Create different booking types where users can book you on</span>
		</div>



		<!-- <button  class="btn-primary" @click="useSignin().signOut()">
			logout
		</button> -->
		<AvatarDropdown v-if="isLoggedIn" />
		<nuxt-link v-else to="/auth/login" class="btn-primary">
			Login
		</nuxt-link>
	</header>
</template>

<script setup lang="ts">

import { usePageHeader } from '@/composables/utils/header'
import { useUser } from '@/composables/auth/user'
import AvatarDropdown from '@/components/core/AvatarDropdown.vue'

const { headstate } = usePageHeader()

const { isLoggedIn } = useUser()
</script>

<style scoped>
.btn-primary{
@apply text-sm px-5 py-3 md:text-base md:px-10
}
</style>
