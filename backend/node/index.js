const express = require('express')
const cors = require('cors')
require('dotenv').config({path: "./.env"})

const requiredEnvVars = ['WEB_APP_URL', 'STRIPE_SECRET_KEY'];
const missing = requiredEnvVars.filter(key => !process.env[key]);
if (!process.env.WEB_APP_URL || !process.env.STRIPE_SECRET_KEY) {
    console.error(`${missing.join(', ')} are not defined....`)
    process.exit(1)   
}
const createCheckoutSession = require("./api/checkout")
const webhook = require('./api/webhook')
require('dotenv').config({path: "./.env"})
const app = express()
const port = 8080

app.use(express.json({
    verify: (req, res, buffer) => req['rawBody'] = buffer,
}))
app.use(cors({origin: true}))

app.get('/', (req, res) => {
    res.send("Stripe Payment Gateway")
})

app.post('/create-checkout-session', createCheckoutSession)
app.post('/webhook', webhook)

app.listen(port, () => console.log('server is listening on port', port))