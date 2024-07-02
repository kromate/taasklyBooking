<template>
	<section class="flex flex-col gap-4">
		<article v-for="type in bookingTypes" :key="type.id" class="flex items-start border border-line rounded-md py-4 px-6 gap-3 flex-col">
			<div class="flex justify-between items-center w-full">
				<div>
					<h2 class="font-semibold text-lg flex items-center gap-2">
						{{ type.name }}
						<span class="text-xs font-light responsive ">/{{ username }}/{{ type.id }}</span>
					</h2>
					<small class="text-subtle">{{ type.desc }}</small>
				</div>
				<div class="flex items-center space-x-2">
					<Switch v-model="type.public" class="responsive" />
					<a href="#" class="card_btn responsive">
						<ExternalLink :size="16" />
						View
					</a>
					<button class="card_btn responsive">
						<Link :size="16" />
						Copy Link
					</button>
					<IconDropdown :children="dropdownChildren(type)" :data="type" />
				</div>
			</div>
			<div class="flex items-center gap-1 text-xs bg-subtle text-emphasis py-1 px-1.5 rounded bg-hover ">
				<Clock :size="16" />
				{{ type.duration }}m
			</div>
		</article>
	</section>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { Clock, ExternalLink, Link, Edit, Trash } from 'lucide-vue-next'
import { useUser } from '@/composables/auth/user'

// import IconDropdown from 'src/components/core/IconDropdown.vue';




const { username } = useUser()
interface Meeting {
    user_id: string;
    availability_id: string;
    id: string;
    name: string;
    desc: string;
    availability_name: string;
    price: number;
    duration: number;
    public: boolean,
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
}

defineProps({
    bookingTypes: {
        type: Array as PropType<Meeting[]>,
        required: true
    }
})

const { width } = useWindowSize()

const dropdownChildren = (booking) => {
    const res = [] as any[]

        if (width.value < 768) {
        res.push({ name: 'Preview ', func: (data) => (data), class: 'w-full', icon: ExternalLink })
        res.push({ name: 'Copy link to booking ', func: (data) => (data), class: 'w-full', icon: Link })
    }
    res.push({ name: 'Edit ', func: (data) => (data), class: 'w-full', icon: Edit })


    res.push({ name: 'Delete ', func: (data) => (data), class: '!text-red hover:!bg-red hover:!text-white', icon: Trash })

    // if (order.payment_status === 'UNPAID') {
    // 	res.push({ name: 'Generate Payment link', func: (data) => { shareShopPaymentLink(data.id) }, class: 'w-full' })
    // }



    return res
}
</script>

<style scoped>
.responsive {
    @apply hidden md:flex;
}
</style>
