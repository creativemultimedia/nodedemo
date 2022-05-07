const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello this is test')
})

app.listen(3000)