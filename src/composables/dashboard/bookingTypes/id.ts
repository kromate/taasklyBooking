import { getSingleFirestoreSubDocument, getSingleFirestoreDocument } from '@/firebase/firestore/fetch'
import { useAlert } from '@/composables/core/notification'
import { useUser } from '@/composables/auth/user'


const bookingType = ref()
const loading = ref(false)

export const useFetchBookingTypeById = () => {
const { id: user_id } = useUser()

        const fetchBookingTypeById = async (id:string) => {
        loading.value = true
        try {
            await getSingleFirestoreSubDocument('users', user_id.value!, 'booking_types', id, bookingType)
            loading.value = false
        } catch (e: any) {
            loading.value = false
            useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}`, addrs: 'useFetchBookingTypeById' })
        }
    }



    return { bookingType, loading, fetchBookingTypeById }
}


export const useFetchMainBookingTypeById = () => {
    const fetchMainBookingTypeById = async (id: string) => {
        loading.value = true
            try {
            await getSingleFirestoreDocument('bookingTypes', id, bookingType)
            loading.value = false
        } catch (e: any) {
            loading.value = false
            useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}`, addrs: 'useFetchMainBookingTypeById' })
        }
    }

    return { bookingType, loading, fetchMainBookingTypeById }
}
