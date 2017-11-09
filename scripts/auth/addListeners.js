const user = require("./userFactory")
const activeUser = require("./activeUser")

const register = document.querySelector(".button--newAccount")
const login = document.querySelector(".button--login")

register.addEventListener("click", (event) => {
    console.log("clicked on new account");

    const username = document.querySelector("input[name='username']").value
    const email = document.querySelector("input[name='email']").value
    const newUser = user.create(username, email)
    newUser.save()
    activeUser.set(newUser)
})

console.log("added listeners")

module.exports = null
