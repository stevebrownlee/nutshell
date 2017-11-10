const activeUser = require("auth/activeUser")
const listeners = require("auth/addListeners")

const init = () => {
    if (activeUser.load()) {
        document.querySelector(".auth").classList.add("hidden")
        document.querySelector(".gridContainer").classList.remove("hidden")
    } else {
        document.querySelector(".auth").classList.remove("hidden")
        document.querySelector(".gridContainer").classList.add("hidden")
    }
}
module.exports = {init}
