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

export const Email = async (name, email, content) => {
    try {
        
        await transport.sendMail({
            from: email,
            to: `jaytemporary1@gmail.com`,
            subject: `Patient Contact from ${name} `,
            html: `
                <p>${content}</p>
            `
        })

        console.log(`Email successfully sent to receiver`)

    } catch (error) {
        console.log(error)
    }
}   