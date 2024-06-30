<template>
	<footer class="md:hidden fixed h-14 bottom-0 border-t  bg-light  inset-x-0 flex items-center justify-between px-5 z-[10] text-dark">
		<nuxt-link v-for="n in routes" :key="n.name" :to="n.route" class="flex flex-col justify-center items-center">
			<component :is="n.icon" class="w-5" />
			<p class="text-xs  block truncate w-auto">
				{{ truncateString(n.name, 10) }}
			</p>
		</nuxt-link>
		<div class="flex flex-col items-center" @click="drawerFunction()">
			<component :is="Menu" class="w-5" />
			<p class="text-xs ">
				more
			</p>
		</div>

		<button v-if="headstate.btnText" class="fixed bottom-20 p-2 rounded-full right-4 bg-dark min-h-12 min-w-12 center" @click="headstate.btnCall.value">
			<Plus class="w-5 text-light" />
		</button>
	</footer>
</template>

<script setup lang="ts">
import { Menu, Plus } from 'lucide-vue-next'
import { truncateString } from '@/composables/utils/formatter'
import { usePageHeader } from '@/composables/utils/header'

const { headstate } = usePageHeader()




type RouteType = {
    name: string,
    route?: string,
    icon?: any
    main?: boolean

}[]

const props = defineProps({
    routes: {
        type: Array as PropType<RouteType>,
        default: () => [],
        required: true
    },
    drawerFunction: {
        type: Function,
        default: () => { },
        required: true
    }
})

</script>
