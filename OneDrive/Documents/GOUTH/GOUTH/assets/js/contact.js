const name = document.querySelector('#lname')
const email = document.querySelector('#email')
const subject = document.querySelector('#subject')
const textArea = document.querySelector('#textarea')

async function submit () {

    if (!name.value || !email.value || !subject.value || !textArea.value) {
        return alert('⚠️ Fill all fields!')
    }

    const formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        content: textArea.value,
    }

    try {
        const response = await fetch('http://localhost:8080/api/contact/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        const data = await response.json()
        console.log('Email sent Successfully', data)

        // Reset form fields
        name.value = ''
        email.value = ''
        subject.value = ''
        textArea.value = ''

    } catch (error) {
        console.error('Error sending email:', error)
    }
    
}

window.submit = submit