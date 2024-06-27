
import { v4 as uuidv4 } from 'uuid'
import { db } from '../utils/firebaseServer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)


try {
    await db.collection('users').doc(body.id).set(body)
    const availability_id = await createAvailability(body.id)
    await createBookingTypes(body.id, availability_id)
    } catch (e:any) {
        throw new Error(`Error creating user profile: ${e.message}`)
    }


  return { success: true, msg: 'User profile created successfully' }
})


const createAvailability = async (user_id:string) => {
    const id = uuidv4()
    const sentData = { default_days_of_week_data, user_id, id, name: 'Default Working Hours', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    await db.collection('users').doc(user_id).collection('availability').doc(id).set(sentData)

    return id
}

const createBookingTypes = async (user_id: string, availability_id: string) => {
    const sentData_1 = {
        user_id,
        availability_id,
        id: uuidv4(),
        name: '15 Minute Meeting',
        desc: 'Book a meeting with me for 15 minutes!',
        availability_name: 'Default Working Hours',
        price: 0,
        duration: 15,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
    const sentData_2 = {
        user_id,
        availability_id,
        id: uuidv4(),
        name: '30 Minute Meeting',
        desc: 'Book a meeting with me for 30 minutes!',
        availability_name: 'Default Working Hours',
        price: 0,
        duration: 30,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
    const sentDate_3 = {
        user_id,
        availability_id,
        id: uuidv4(),
        name: '60 Minutes Meeting',
        desc: 'Book a meeting with me for 60 minutes!',
        availability_name: 'Default Working Hours',
        price: 0,
        duration: 60,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }

    // batch write
    const batch = db.batch()
    const ref1 = db.collection('users').doc(user_id).collection('booking_types').doc(sentData_1.id)
    batch.set(ref1, sentData_1)
    const ref2 = db.collection('users').doc(user_id).collection('booking_types').doc(sentData_2.id)
    batch.set(ref2, sentData_2)
    const ref3 = db.collection('users').doc(user_id).collection('booking_types').doc(sentDate_3.id)
    batch.set(ref3, sentDate_3)
    await batch.commit()
}


const default_days_of_week_data = [
    { name: 'Sunday', value: 0, active: false, timeSlot: [{ startTime: '08:00', endTime: '17:00' }] },
    { name: 'Monday', value: 1, active: true, timeSlot: [{ startTime: '08:00', endTime: '17:00' }] },
    { name: 'Tuesday', value: 2, active: true, timeSlot: [{ startTime: '08:00', endTime: '17:00' }] },
    { name: 'Wednesday', value: 3, active: true, timeSlot: [{ startTime: '08:00', endTime: '17:00' }] },
    { name: 'Thursday', value: 4, active: true, timeSlot: [{ startTime: '08:00', endTime: '17:00' }] },
    { name: 'Friday', value: 5, active: true, timeSlot: [{ startTime: '08:00', endTime: '17:00' }] },
    { name: 'Saturday', value: 6, active: false, timeSlot: [{ startTime: '08:00', endTime: '17:00' }] }
]
