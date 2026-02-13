import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import appRouter from './routes/emailRoutes.js'
 

dotenv.config()

const app = express()
const port = process.env.port

app.use(express.json())
app.use(cors('http://127.0.0.1:5500/OneDrive/Documents/GOUTH/GOUTH/contact.html'))

app.use('/api/contact', appRouter)

app.listen(port, () => {
    console.log(`running on port ${port}`)
})