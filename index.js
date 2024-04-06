import UserService from './services/user.service.js'
import EmailService from './services/email.service.js'
import AuthService from './services/auth.service.js'

async function startApp() {
    await UserService.start()
    await EmailService.start()
    await AuthService.start()

    try {
        // User
        const newUser = await UserService.call(
            "user.createUser",
            { username: "johndoe", email: "john@doe.com" }
        )
        console.log("New user created:", newUser)

        const users = await UserService.call("user.getUsers")
        console.log("Users:", users)

        // Email
        const emailResult = await EmailService.call(
            "email.sendEmail",
            {
                recipient: newUser.email,
                subject: "Welcome!",
                content: "Thank you for signing up!\nCheers",
            }
        )

        console.log(emailResult)

        // Auth
        const authResult = await AuthService.call(
            "auth.authUser",
            {username: "admin", password: "123" }
        )

        console.log(authResult)
    } catch (err) {
        console.log("oopsie-daisy: ", err)
    } finally {
        await UserService.stop()
        await EmailService.stop()
        await AuthService.stop()
    }
}

startApp()
