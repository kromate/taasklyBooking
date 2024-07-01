
import { deleteFirestoreSubCollectionDocument } from '@/firebase/firestore/delete'
import { useAlert } from '@/composables/core/notification'
import { useConfirmationModal } from '@/composables/core/confirmation'
import { useUser } from '@/composables/auth/user'

const deleteOfferingData = ref()


export const useDeleteOffering = () => {
	const loading = ref(false)
	    const { id: user_id } = useUser()

	const setDeleteOfferingId = (data: Record<string, any>) => {
		deleteOfferingData.value = data

		        useConfirmationModal().openAlert({ type: 'Alert', title: 'Delete Type', desc: `Are you sure you want to delete  ${deleteOfferingData.value.name} `, call_function: deleteOffering, loading })
	}
	const deleteOffering = async () => {
		loading.value = true
		try {
			await deleteFirestoreSubCollectionDocument('users', user_id.value!, 'booking_types', deleteOfferingData.value.id)
			loading.value = false
			useConfirmationModal().closeAlert()
			useAlert().openAlert({ type: 'SUCCESS', msg: 'Booking type Deleted successfully' })
		} catch (e: any) {
			loading.value = false
			useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
		}
	}
	return { loading, deleteOffering, setDeleteOfferingId }
}
