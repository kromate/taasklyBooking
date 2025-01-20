<template>
	<main class=" h-full container max-w-[1440px] grid lg:grid-cols-2 gap-9 items-center justify-start  md:py-20 py-10">
		<section class="md:text-start text-center px-4">
			<h1>
				<span class="heroTitle">Easy</span>
				<span class=" heroTitle text-primary">scheduling</span>
				<span class=" heroTitle">software for</span>
				<span class=" heroTitle text-primary">everyone</span>
			</h1>
			<p class="md:text-xl text-[#0009448A]  my-7 ">
				Transform your business with smart scheduling. Book clients, automate appointments, and accept payments with ease. Built with African businesses in mind, trusted worldwide.
			</p>
			<div class="flex gap-4 items-center w-full justify-center md:justify-start">
				<nuxt-link to="/booking-types" class="btn-primary">
					Get Started
				</nuxt-link>
			</div>
		</section>

		<section class="flex center items-start relative h-full m-5 ">
			<img src="/hero.png" class="w-full ">
		</section>
	</main>
</template>

<script lang='ts' setup>


</script>

<style scoped lang="scss">
.heroTitle {
	@apply block md:text-[76px] text-5xl font-bold tracking-wide leading-[1.1];
}
</style>
