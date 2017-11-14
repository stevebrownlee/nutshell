const activeUser = require("auth/activeUser")
const listeners = require("auth/addListeners")
const dashboard = require("dashboard")

const init = () => {
    if (activeUser.load()) {
        document.querySelector(".auth").classList.add("hidden")
        document.querySelector(".gridContainer").classList.remove("hidden")

        dashboard.init()
    } else {
        document.querySelector(".auth").classList.remove("hidden")
        document.querySelector(".gridContainer").classList.add("hidden")
    }
}
module.exports = {init}
