import express from 'express'
import hbs from 'hbs'
import logger from 'morgan'
import livereload from 'livereload'
import connectLiveReload from 'connect-livereload'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Router
import routes from './server/routes/user.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Live reloader static files
const liveReloadServer = livereload.createServer()
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/')
  }, 100)
})

const app = express()
const port = 8000

app.use(connectLiveReload())

// Parse application/json
app.use(express.json())

// Parsing middleware
app.use(express.urlencoded({ extended: true }))

// Static Files
app.use(express.static((__dirname, 'public')))

// Partials
hbs.registerPartials(__dirname + '/views/partials')

hbs.registerPartial(
  'user-form',
  fs.readFileSync(__dirname + '/views/partials/user-form.hbs', 'utf8')
)

// Engine setup
app.set('views', (__dirname, 'views'))
app.set('view engine', 'hbs')

// Logger
app.use(logger('dev'))

// Router
app.use('/', routes)

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
)
