import { useModal } from '../modal'

// ==================== AUTH ===============================
import Logout from '@/components/modals/auth/logout.vue'

// ==================== CORE ===============================
import Confirmation from '@/components/modals/core/Confirmation.vue'

// ==================== BOTTOMBAR ===============================
import BottomMenu from '@/components/layouts/bottomBar/modal/Main.vue'



type AuthTypes = 'Logout'
type CoreTypes = 'Confirmation'
type BottombarTypes = 'BottomMenu'


const AuthModals = { Logout } as Record<AuthTypes, any>
const CoreModals = { Confirmation } as Record<CoreTypes, any>
const BottombarModals = { BottomMenu } as Record<BottombarTypes, any>



export const modal = useModal()
const authModal = modal.register('Auth', AuthModals)
const coreModal = modal.register('Core', CoreModals)
const bottombarModal = modal.register('Bottombar', BottombarModals)





export const useAuthModal = () => authModal
export const useCoreModal = () => coreModal
export const useBottombarModal = () => bottombarModal




