import { Link, Calendar, Clock, User, Settings } from 'lucide-vue-next'

export const dashboardRoutes = () => [

	{
		icon: Link,
		name: 'Booking Types',
		route: '/booking-types',
		main: true,
		type: 'service',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	},
			{
		icon: Calendar,
		name: 'Bookings',
		route: '/bookings',
		main: true,
		type: 'service',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	},
	{
		icon: Clock,
		name: 'Availability',
		route: '/availability',
		main: true,
		type: 'service',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	},

	{
		icon: User,
		name: 'Contacts',
		route: '/contacts',
		main: true,
		type: 'all',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	},
	{
		icon: Settings,
		name: 'Settings',
		route: '/settings',
		type: 'all',
		bg: '#F7F4FF',
		color: '#4F1DEE'
	}

]
