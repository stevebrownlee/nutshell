const user = require("./userFactory")
const activeUser = require("./activeUser")

const register = document.querySelector(".button--newAccount")
const login = document.querySelector(".button--login")

register.addEventListener("click", (event) => {
    const username = document.querySelector("input[name='username']").value
    const email = document.querySelector("input[name='email']").value

    // Create new user
    const newUser = user.create(username, email)

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
