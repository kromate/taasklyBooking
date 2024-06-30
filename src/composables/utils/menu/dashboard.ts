import { Link, Calendar, Clock, User, Settings } from 'lucide-vue-next'

export const dashboardRoutes = () => [

	{
		icon: Link,
		name: 'Booking Types',
		route: '/booking-types',
		main: true,
		type: 'service',
		bg: '#e5e7eb',
		color: '#18181B'
	},
			{
		icon: Calendar,
		name: 'Bookings',
		route: '/bookings',
		main: true,
		type: 'service',
		bg: '#e5e7eb',
		color: '#18181B'
	},
	{
		icon: Clock,
		name: 'Availability',
		route: '/availability',
		main: true,
		type: 'service',
		bg: '#e5e7eb',
		color: '#18181B'
	},

	{
		icon: User,
		name: 'Contacts',
		route: '/contacts',
		main: true,
		type: 'all',
		bg: '#e5e7eb',
		color: '#18181B'
	},
	{
		icon: Settings,
		name: 'Settings',
		route: '/settings',
		type: 'all',
		bg: '#e5e7eb',
		color: '#18181B'
	}

]
