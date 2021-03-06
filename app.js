const express = require('express')
const app = express()
const path = require('path')

app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
//  res.send('Hello World!')
  res.render(path.join(__dirname, '/html/index.html'));
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})