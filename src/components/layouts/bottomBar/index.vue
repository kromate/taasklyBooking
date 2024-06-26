<template>
	<footer class="sm:hidden fixed h-14 bottom-0 border border-dark  bg-light  inset-x-0 flex items-center justify-between px-5 z-[10] text-dark">
		<nuxt-link v-for="n in routes" :key="n.name" :to="n.route" class="flex flex-col items-center">
			<component :is="n.icon" class="w-5" />
			<p class="text-xs font-medium">
				{{ n.name }}
			</p>
		</nuxt-link>
		<div class="flex flex-col items-center" @click="drawerFunction()">
			<component :is="menu" class="w-5" />
			<p class="text-xs font-medium">
				more
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">

import menu from '@/assets/icons/src/menu.vue'

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
