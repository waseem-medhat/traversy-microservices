import { ServiceBroker } from 'moleculer'

const broker = new ServiceBroker()

broker.createService({
    name: "email",
    actions: {
        async sendEmail(ctx) {
            const { recipient, subject, content } = ctx.params
            console.log(`Sending email "${subject}" to ${recipient}:`)
            console.log(`"${content}"`)

            return `Email sent to ${recipient}`
        }
    }
})

export default broker

