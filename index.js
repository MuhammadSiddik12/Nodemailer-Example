const nodemailer = require('nodemailer')
const app = require('express')()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send({ message: "Hello World" })
})

app.get('/sendMail', (req, res) => {
    sendMail()
    setTimeout(() => {
        res.send({ message: "Mail sent successFully" })
    }, 3000)
})

function sendMail() {
    transpoter.sendMail(options, (err, info) => {
        if (err) throw err;
        console.log(info.response)
    })
}

const transpoter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
})

const options = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: "Mail By Nodemailer",
    text: "This is a test mail"
}


app.listen(process.env.PORT, () => console.log(`Server is Running on port ${process.env.PORT}`))