import express from 'express'
import { testController } from '../controllers/testController.js'
import { sendEmail } from '../controllers/emailController.js'

const appRouter = express.Router()

appRouter.get('/test', testController)

appRouter.post('/send', sendEmail)


export default appRouter