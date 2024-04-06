import { ServiceBroker } from 'moleculer'

const broker = new ServiceBroker()

broker.createService({
    name: "auth",
    actions: {
        async authUser(ctx) {
            const { username, password } = ctx.params
            if (username == "admin" && password === "password") {
                return { success: true, message: "access granted" }
            } else {
                return { success: false, message: "get out" }
            }
        }
    }
})

export default broker

