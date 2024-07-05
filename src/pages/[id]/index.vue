<template>
	<div class="mx-auto max-w-3xl px-4 py-24">
		<div class="mb-8 text-center">
			<span class="bg-emphasis item-center relative inline-flex aspect-square justify-center rounded-full align-top overflow-hidden w-24 h-24 min-w-24 min-h-24">
				<img :alt="data.name" class="aspect-square rounded-full w-24 h-24 min-w-24 min-h-24" :src="data.photo_url">
			</span>
			<h1 class="font-cal text-emphasis my-1 text-3xl">
				{{ data.name }}
			</h1>
			<div class="text-subtle break-words text-sm [&_a]:text-blue-500 [&_a]:underline [&_a]:hover:text-blue-600">
				<p>{{ data.bio }}</p>
			</div>
		</div>
		<div class="rounded-md border-subtle border" data-testid="event-types">
			<div v-for="booking in data.bookingTypes" :key="booking.id" class="bg-default border-subtle dark:bg-muted dark:hover:bg-emphasis hover:bg-muted group relative border-b transition first:rounded-t-md last:rounded-b-md last:border-b-0" style="display: flex;">
				<ArrowRight class="absolute right-4 top-4 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />

				<div class="block w-full p-5">
					<a :href="`/${username}/${booking.id}`">
						<div class="flex flex-wrap items-center">
							<h2 class="text-default pr-2 text-sm font-semibold">{{ booking.name }}</h2>
						</div>
						<div class="text-subtle">
							<div class="text-subtle break-words py-1 text-sm sm:max-w-[650px] [&_a]:text-blue-500 [&_a]:underline [&_a]:hover:text-blue-600 line-clamp-4 [&_*:not(:first-child)]:hidden">
								<p>{{ booking.desc }}</p>
							</div>
							<ul class="mt-2 flex flex-wrap gap-x-2 gap-y-1">
								<li>
									<div class="font-medium inline-flex items-center justify-center rounded gap-x-1 bg-subtle text-emphasis py-1 px-1.5 text-xs leading-3">

										<Clock :size="12" :stroke-width="3" />
										{{ booking.duration }}m
									</div>
								</li>
							</ul>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ArrowRight, Clock } from 'lucide-vue-next'
import { useAPI } from '@/api_factory'
import { useCustomHead } from '@/composables/core/head'

type Booking = {
  id: string;
  user_id: string;
  availability_id: string;
  name: string;
  desc: string;
  availability_name: string;
  price: number;
  created_at: string;
  duration: number;
  updated_at: string;
  public: boolean;
};

type UserWithBookings = {
  username: string;
  name: string;
  bio: string;
  photo_url: string;
  bookingTypes: Booking[];
};

const username = useRoute().params.id


	const { data, error } = await useAPI('/getUserPublicProfile', {
			method: 'POST',
			body: { username }
	}) as { data: Ref<UserWithBookings>, error: any }

useCustomHead({
	title: `${data.value.name} | Taaskly`,
	desc: data.value.bio || `Book a session with ${data.value.name}`,
	img: data.value.photo_url || '/lt.svg'
})
definePageMeta({
	layout: 'public'
})
</script>

<style scoped>

</style>
