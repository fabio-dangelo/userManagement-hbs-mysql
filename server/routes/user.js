import express from 'express'
import {
  view,
  find,
  form,
  create,
  edit,
  update,
  viewuser,
  _delete,
} from '../controllers/userController.js'

const router = express.Router()

// Routes
router.get('/', view)
router.post('/', find)
router.get('/adduser', form)
router.post('/adduser', create)
router.get('/edituser/:id', edit)
router.post('/edituser/:id', update)
router.get('/viewuser/:id', viewuser)
router.get('/:id', _delete)

export default router
