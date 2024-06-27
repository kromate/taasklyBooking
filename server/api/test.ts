export default defineEventHandler(() => {
  // Define some demo data
  const demoData = {
    message: 'Hello, this is a demo data response!',
    success: true,
    data: {
      id: 1,
      name: 'Demo Item',
      description: 'This is a description of the demo item.'
    }
  }

  // Return the demo data as a JSON response
  return demoData
})
