const express = require('express')
const app = express()

let notes = [
  
]



app.post('/api/notes', (req, res) => {
  const note = req.body
  console.log(note)
  res.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})