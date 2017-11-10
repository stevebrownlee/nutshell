const user = require("auth/userFactory")
const activeUser = require("auth/activeUser")
const localDatabase = require("localDatabase")

const register = document.querySelector(".button--newAccount")
const login = document.querySelector(".button--login")
const username = document.querySelector("input[name='username']")
const email = document.querySelector("input[name='email']")

login.addEventListener("click", event => {
    // Check if user is in `users` table in database
    const existingUser = localDatabase.load().users.find(
        u => u.username === username.value && u.email === email.value
    )

    if (existingUser) {
        // If so, set user as active
        activeUser.save(existingUser)

        // Hide login panel
        document.querySelector(".auth").classList.add("hidden")

        // Show app grid
        document.querySelector(".gridContainer").classList.remove("hidden")
    }
})

register.addEventListener("click", event => {
    // Create new user
    const newUser = user.create(username.value, email.value)

    // Save user to DB
    newUser.save()

    // Set user as active one in session
    activeUser.save(newUser)

    // Hide login panel
    document.querySelector(".auth").classList.add("hidden")

    // Show app grid
    document.querySelector(".gridContainer").classList.remove("hidden")
})

module.exports = null
