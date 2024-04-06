import { ServiceBroker } from 'moleculer'

const broker = new ServiceBroker()

function generateId() {
    return Math.floor(Math.random() * 1000) + 1
}

const users = []

broker.createService({
    name: "user",
    actions: {
        async createUser(ctx) {
            const { username, email } = ctx.params
            const newUser = {
                id: generateId(),
                username: username,
                email,
            }
            users.push(newUser)
            return newUser
        },

        async getUsers() {
            return users;
        }
    }
})

export default broker
