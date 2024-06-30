
import { getSingleFirestoreSubDocument } from '@/firebase/firestore/fetch'
import { useAlert } from '@/composables/core/notification'
import { useUser } from '@/composables/auth/user'


const availability = ref()
    const loading = ref(false)

export const useFetchAvailabilityById = () => {
    const { id: user_id } = useUser()

        const fetchAvailabilityById = async (id:string) => {
        loading.value = true
        try {
            await getSingleFirestoreSubDocument('users', user_id.value!, 'availability', id, availability)
            loading.value = false
        } catch (e: any) {
            loading.value = false
            useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}`, addrs: 'useFetchAvailabilityById' })
        }
    }



    return { availability, loading, fetchAvailabilityById }
}

