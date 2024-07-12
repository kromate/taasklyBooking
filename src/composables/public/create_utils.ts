import { CalendarDate } from '@internationalized/date'
import { useAlert } from '../core/notification'
import { ProfileType } from '../auth/types/profile'
import { addDurationToTimeSlotObj } from './utils'
import { timeSlotList } from '@/composables/helpers/timeSlotList'
import { getFirestoreCollectionWithWhereQuery } from '@/firebase/firestore/query'




const today = new Date()

const todayObj = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
}

const loadingState = {
    date: ref(false),
    time: ref(false)
}
const currentSelectedDatebookings = ref([] as any[])

const cal = new CalendarDate(todayObj.year, todayObj.month, todayObj.day)

const credientials = {
    contact: ref({
        name: '',
        email: '',
        phone: ''
    }),
    notes: ref(''),
    selectedDate: ref(cal),
    selectedTime: ref()
    // is_escrowed: ref(true),
    // promo_code: ref(null as Record<string, any> | null)
}


const selectedDateString = computed(() => {
    return credientials.selectedDate.value.toString()
})


const selectedBooking = ref()
const selectedAvailability = ref()


const isDateUnavailableFunction = computed(() => (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Set time to the beginning of the day for accurate comparison
    const targetDate = new Date(date.year, date.month - 1, date.day)

    if (targetDate < today) {
        return true
    }


    if (selectedAvailability.value?.default_days_of_week_data) {
        const dayOfWeek = targetDate.getDay()
        const dayAvailability = selectedAvailability.value.default_days_of_week_data.find((day) => day.value === dayOfWeek)
        return !dayAvailability || !dayAvailability.active
    } else {
        return true
    }
})


const availableTimeSlotList = computed(() => {
    if (!selectedAvailability.value?.default_days_of_week_data) return

	const selectedDate = credientials.selectedDate.value
	const dayOfWeek = selectedDate ? new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day).getDay() : null
	const dayAvailability = selectedAvailability.value.default_days_of_week_data.find((day) => day.value === dayOfWeek)

	if (!dayAvailability || !dayAvailability.active) {
		return []
	}

	const timeSlots = dayAvailability.timeSlot

	return timeSlotList.filter((time) => {
		const timeValue = time.value
        const isWithinWorkingHours = timeSlots.some((slot) => timeValue >= slot.startTime && timeValue <= slot.endTime)
		const isBooked = currentSelectedDatebookings.value.some((booking) => {
			const bookingStartTime = booking.time
			const bookingEndTime = addDurationToTimeSlotObj({ value: bookingStartTime }as any, booking.duration)!.value
			return timeValue >= bookingStartTime && timeValue < bookingEndTime
        })

		return isWithinWorkingHours && !isBooked
	})
})

const isTimeUnavailableFunction = computed(() => (time) => {
    if (!selectedAvailability.value?.default_days_of_week_data) return

	const selectedDate = credientials.selectedDate.value
	const dayOfWeek = new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day).getDay()
	const dayAvailability = selectedAvailability.value.default_days_of_week_data.find((day) => day.value === dayOfWeek)

	if (!dayAvailability || !dayAvailability.active) {
		return true
	}

	const timeSlots = dayAvailability.timeSlot
	const timeValue = time.value

	return !timeSlots.some((slot) => timeValue >= slot.startTime && timeValue <= slot.endTime)
})

const checkTimeAvailablity = async (business_id, date) => {
    loadingState.time.value = true
    if (!business_id || !date) return
    currentSelectedDatebookings.value = []
    await getFirestoreCollectionWithWhereQuery('bookings', currentSelectedDatebookings, { name: 'business_id', operator: '==', value: business_id }, { name: 'date', operator: '==', value: date })


    loadingState.time.value = false
}

export const useFetchUserByUsername = () => {
    const userQuery = ref([] as ProfileType[])
    const fetchUserByUsername = async (username: string) => {
        loadingState.date.value = true
        try {
            await getFirestoreCollectionWithWhereQuery('users', userQuery, { name: 'username', operator: '==', value: username })
            loadingState.date.value = false
        } catch (e: any) {
            loadingState.date.value = false
            useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}`, addrs: 'useFetchUserByUsername' })
        }
    }

    const selectedUser = computed(() => {
        return userQuery.value[0]
    })
    return { selectedUser, loadingState, fetchUserByUsername }
}


export const booking_create_utils = { credientials, availableTimeSlotList, selectedBooking, isTimeUnavailableFunction, selectedAvailability, isDateUnavailableFunction, selectedDateString, checkTimeAvailablity, loadingState }
