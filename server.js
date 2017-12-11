var express = require('express')
var app = express()

app.set('port', process.env.PORT || 3000)

app.locals.title = "secret box"

app.get('/', function(request, response) {
  response.send("hello")
})

if (!module.parent) {   //try to understand this again
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on port 3000`)
  })  //when you host, you may want to be able to change the port (probs on heroku will need to fo this)
}


module.exports = app
