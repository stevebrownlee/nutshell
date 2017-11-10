const activeUser = require("./activeUser")
const listeners = require("./addListeners")

const init = () => {
    if (activeUser.load()) {
        console.log("No active user")
        document.querySelector(".auth").classList.add("hidden")
        document.querySelector(".gridContainer").classList.remove("hidden")
    } else {
        console.log("Active user")
        document.querySelector(".auth").classList.remove("hidden")
        document.querySelector(".gridContainer").classList.add("hidden")
    }
}
module.exports = {init}
