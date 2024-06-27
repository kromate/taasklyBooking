
import { db } from '../utils/firebaseServer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { username } = body

  if (!username) {
    return { exists: false, error: 'Username is required' }
  }
  try {
    const usernamesRef = db.collection('users').where('username', '==', username)
setResponseStatus(event, 200)

    const querySnapshot = await usernamesRef.get()

    const exists = !querySnapshot.empty

  return { exists }
  } catch (error: any) {
    throw createError({ status: 500, message: error.message })
  }
})
