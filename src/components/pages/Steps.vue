<template>
	<section class=" py-">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center flex flex-col items-center w-full">
				<span class="px-4 py-2 rounded">
					steps
				</span>
				<h2 class="mt-8 text-4xl md:text-[56px]  font-semibold leading-[1] max-w-3xl text-gray-900">
					Take control of your schedule, effortlessly
				</h2>
				<p class="mx-auto mt-6 max-w-2xl md:text-lg text-[#0009448A]">
					Focus on what matters most while we handle your bookings and keep your calendar organized
				</p>
			</div>


			<div class="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
				<div
					v-for="feature in features"
					:key="feature.id"
					class="card"
				>
					<div class="inline-flex border border-[#CFD7FF] bg-[#EEF1FF] size-8 items-center justify-center rounded  text-primary">
						{{ feature.id }}
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">
						{{ feature.title }}
					</h3>
					<p class="mt-2 text-gray-500 h-[72px] pr-4">
						{{ feature.description }}
					</p>
					<img :src="feature.image" alt="demo" class="mt-14 h-[180px]  right-0 ml-auto border-b border-[#CFD7FF] rounded-ee-3xl">
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const features = [
  {
    id: '01',
    title: 'Set your availability',
    description: 'Define your working hours and break times. Your schedule, your rules - we make it simple.',
    image: '/img/steps/one.png'
  },
  {
    id: '02',
    title: 'Create booking types',
    description: 'Offer one-on-one sessions, group events, or specialized services. Perfect for any service provider.',
    image: '/img/steps/two.png'
  },
  {
    id: '03',
    title: 'Get booked and paid',
    description: 'Accept bookings instantly and receive secure payments automatically. No hassle, no delays.',
    image: '/img/steps/three.png'
  }
]
</script>

<style scoped>
.card {
        box-shadow: 0px 1px 2px 0px #E8EBFA;

  @apply relative border border-[#CFD7FF]  rounded-3xl    text-primary p-7 pb-0 pr-0
}
</style>
