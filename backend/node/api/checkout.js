const stripeApi = require('../stripe')


async function createCheckoutSession(req, res) {
    const domainUrl = process.env.WEB_APP_URL
    const {line_items, customer_email} = req.body 
    if (!line_items || !customer_email) {
        return res.status(400).json({error: "Missing required session parameters"})
    }
    let session
    try {
        session = await stripeApi.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: 'payment',
            customer_email,
            line_items,
            success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainUrl}/cancel`,
            shipping_address_collection: {allowed_countries: ["GB","US"]}
        })
        return res.status(200).json({url: session.url})
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: "An error occuered, unable to create a session"})
    }
}

module.exports = createCheckoutSession