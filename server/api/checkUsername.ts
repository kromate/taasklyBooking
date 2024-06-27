
import { db } from '../utils/firebaseServer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)
  const { username } = body

  if (!username) {
    return { exists: false, error: 'Username is required' }
  }
  try {
    console.log(db)
    const usernamesRef = db.collection('users').where('username', '==', username)

console.log(usernamesRef)
    const querySnapshot = await usernamesRef.get()
    console.log(querySnapshot)
    const exists = !querySnapshot.empty
console.log(exists)
  return { exists }
  } catch (error:any) {
    console.log(error)
    return { exists: false, error: error.message }
  }
})
