<template>
	<div class="relative" @click.stop>
		<DropdownMenuRoot>
			<DropdownMenuTrigger
				class="md:border border-dark flex gap-2.5 items-center md:py-2.5 md:px-3 rounded-md"
				aria-label="Customise options"
			>
				<Avatar :src="user!.photoURL" :name="user!.displayName ?? userProfile!.name" :size="28" />
				<span class="text-sm hidden md:block">	{{ user!.displayName ?? userProfile!.name }}</span>
			</DropdownMenuTrigger>
			<DropdownMenuPortal>
				<DropdownMenuContent
					class="w-[154px] absolute -right-7 md:-right-[4.8rem] p-4 border border-dark rounded-md shadow-lg bg-light mt-2 DropdownMenuContent"
				>
					<DropdownMenuItem
						value="LogOut" class="hover:bg-grey p-1 px-2 rounded-md text-red cursor-pointer" @click="useSignin().signOut()">
						Log Out
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenuPortal>
		</DropdownMenuRoot>
	</div>
</template>

<script setup lang="ts">

import { DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'radix-vue'
import { useSignin } from '@/composables/auth/auth'
import { useUser } from '@/composables/auth/user'

const { user, userProfile } = useUser()


</script>

<style scoped>

</style>
