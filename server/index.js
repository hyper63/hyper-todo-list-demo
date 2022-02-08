const express = require('express')
const app = express()
const { todoRouter } = require('./routes')
const PORT = 3010

// import {connect} from 'hyper-connect'
// const hyper = connect(process.env.HYPER);

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/todos', todoRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
