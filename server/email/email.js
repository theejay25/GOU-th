import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transport = nodemailer.createTransport({
    host: process.env.GOOGLE_HOST,
    port: Number(process.env.GOOGLE_PORT),
    secure: true,
    auth : {
        user: process.env.USER,
        pass: process.env.PASS,
    },
    tls : {
    rejectUnauthorized: false 
    }

})

export const Email = async (name, email, subject, content) => {
    try {
        
        await transport.sendMail({
            from: email,
            to: `jaytemporary1@gmail.com`,
            subject: `${subject}`,
            html: `
                <p>I, ${name} am writing to let you know that ${content}</p>
            `
        })

        console.log(`Email successfully sent to receiver`)

    } catch (error) {
        console.log(error)
    }
}   