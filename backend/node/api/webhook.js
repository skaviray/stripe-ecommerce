const stripeAPI = require('../stripe')

function webhook(req, res) {
    const sig = req.headers['stripe-signature']
    console.log(sig)
    console.log(process.env.WEB_HOOK_SECRET)
    let event
    try {
        event = stripeAPI.webhooks.constructEvent(
            req['rawBody'], sig, process.env.WEB_HOOK_SECRET)
    }catch(error) {
        console.log(`${error.message}`)
        return res.status(400).send(`Webhook error ${error.message}`)
    }
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object
        console.log('Event data', session)
    }
}

module.exports = webhook