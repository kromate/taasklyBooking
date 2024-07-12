


import { booking_create_utils } from './create_utils'
import { convertObjWithRefToObj } from '@/composables/utils/formatter'
import { useUser } from '@/composables/auth/user'
import { useAlert } from '@/composables/core/notification'
import { useLoadingNotification } from '@/composables/core/verificationLoader'
import { callFirebaseFunction } from '@/firebase/functions'

import { percentageOfAmount } from '@/composables/utils/currency'
import { useFetchAvailabilityById } from '@/composables/dashboard/availability/id'






watch([booking_create_utils.credientials.selectedDate, booking_create_utils.selectedBooking], (val) => {
    if (booking_create_utils.credientials.selectedDate.value && booking_create_utils.selectedBooking.value?.business_id) {
        const date = booking_create_utils.credientials.selectedDate.value.toString()
        booking_create_utils.checkTimeAvailablity(booking_create_utils.selectedBooking.value?.business_id, date)
    }
}, { immediate: true })









export const useCreateBooking = () => {
    // const { id: user_id, username, user, userProfile } = useUser()
    const loading = ref(false)

    const initBooking = async (data) => {
        if (!data) return
        booking_create_utils.loadingState.date.value = true
        booking_create_utils.selectedBooking.value = data
        const { availability, fetchPublicAvailabilityById } = useFetchAvailabilityById()
        await fetchPublicAvailabilityById(data.user_id, data.availability_id)
        booking_create_utils.selectedAvailability.value = availability.value
        booking_create_utils.loadingState.date.value = false
    }

    const createBooking = async () => {
        try {
            const sent_data = {
                ...convertObjWithRefToObj(booking_create_utils.credientials),
                date: booking_create_utils.credientials.selectedDate.value.toString(),
                time: booking_create_utils.credientials.selectedTime.value.value,
                duration: booking_create_utils.selectedBooking.value.duration,
                availability_id: booking_create_utils.selectedBooking.value.availability_id,
                bookingType_id: booking_create_utils.selectedBooking.value.id,
                price: booking_create_utils.selectedBooking.value.price,
                user_id: booking_create_utils.selectedBooking.value.user_id,
                booking_desc: booking_create_utils.selectedBooking.value.desc,
                booking_name: booking_create_utils.selectedBooking.value.name
            }

            console.log(sent_data)


            useLoadingNotification().openLoader({ title: 'Creating Booking', msg: 'Please wait while we create your booking' })
            const res = await callFirebaseFunction('createBooking', sent_data) as any

            console.log(res)

            if (res.code === 200) {
                // send_WA_Message(res.client_template)
                // send_WA_Message(res.user_template)
                useAlert().openAlert({ type: 'SUCCESS', msg: 'Booking Created Successfully' })
                useLoadingNotification().closeLoader()
                loading.value = false
                useRouter().push(`/booking/${res.id}`)
            } else {
                useAlert().openAlert({ type: 'ERROR', msg: res.msg, addrs: 'useCreateBooking' })
                loading.value = false
                useLoadingNotification().closeLoader()
            }
        } catch (e: any) {
            useAlert().openAlert({ type: 'ERROR', msg: e.msg, addrs: 'useCreateBooking 2' })
            loading.value = false
            useLoadingNotification().closeLoader()
        }
    }




    return { createBooking, initBooking }
}

