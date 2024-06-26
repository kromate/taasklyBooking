// import order from '~~/src/assets/icons/src/order.vue'
// import message from '~~/src/assets/icons/src/message.vue'
// import bag from '~~/src/assets/icons/src/bag.vue'
// import send from '~~/src/assets/icons/src/send.vue'
// import customer from '~~/src/assets/icons/src/customer.vue'
// import discount from '~~/src/assets/icons/src/discount.vue'
// import service from '~~/src/assets/icons/src/service.vue'
// import wallet from '~~/src/assets/icons/src/wallet.vue'
// import category from '~~/src/assets/icons/src/category.vue'
// import setting from '~~/src/assets/icons/src/setting.vue'

export const dashboardRoutes = () => [




	{
		icon: 'order',
		name: 'Booking Type',
		route: '/business/offerings',
		main: true,
		type: 'service',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	},
			{
		icon: 'order',
		name: 'Bookings',
		route: '/business/bookings',
		main: true,
		type: 'service',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	},
	{
		icon: 'order',
		name: 'Availability',
		route: '/business/availability',
		main: true,
		type: 'service',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	},

	{
		icon: 'customer',
		name: 'Contacts',
		route: '/business/customers',
		main: true,
		type: 'all',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	},



	{
		icon: 'setting',
		name: 'Settings',
		route: '/business/settings',
		type: 'all',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	}

]
