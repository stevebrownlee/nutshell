const listeners = require("chat/addListeners")
const updateDOM = require("chat/updateDOM")


const init = () => {
    console.log("Initialize chat")
    listeners.init()

    updateDOM()
}

module.exports = {init}
