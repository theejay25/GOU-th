import express from 'express'
import { sendEmail } from '../controllers/emailController.js'

const appRouter = express.Router()


appRouter.post('/send', sendEmail)


export default appRouter