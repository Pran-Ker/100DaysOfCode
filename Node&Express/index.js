const express = require('express')
const app = express()

let notes = [
  
]



app.post('/api/notes', (request, response) => {
  const note = request.body
  console.log(note)
  response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})