import { Email } from "../email/email.js"

export const sendEmail = async (req, res) => {
    const {name, email, content} = req.body

    if(!name || !email || !content) {
        return res.status(400).json({message: 'Fields incomplete', success: false})
    }

    try {

       await Email(name, email, content)

        return res.status(200).json({ message: 'message sent Successfully',  success: true})
        
    } catch (error) {
        return res.status(500).json({message: 'internal server error', success: false})
    }
}