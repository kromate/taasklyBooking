
import { db } from '../utils/firebaseServer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username } = body

  if (!username) {
    return { exists: false, error: 'Username is required' }
  }

  const usernamesRef = db.collection('users').where('username', '==', username)


  const querySnapshot = await usernamesRef.get()
    const exists = !querySnapshot.empty

  return { exists }
})
