const app = require('./server.js')
const router = require('./routes/main.route.js')

app.use('/', router)

module.exports = app;