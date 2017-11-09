const listeners = require("./addListeners")

const authEl = document.querySelector(".auth")

const auth = Object.create(null, {
    "show": {
        value: () => authEl.classList.remove("hidden")
    },
    "hide": {
        value: () => authEl.classList.add("hidden")
    }
})

module.exports = auth
