const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')
const port = process.env.PORT || 3030
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('*', (req, res) => {
  res.send('This is tutorial App')
})
app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {
    let response = `CON What do you want to check
    1. My Account
    2. My phone number`
    res.send(response)
  } else if (text == '1') {
    let response = `CON 
    1. Account number
    2. Account balance`
    res.send(response)
  } else {
    res.status(400).send('Bad request!')
  }
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
