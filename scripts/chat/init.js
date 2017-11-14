const listeners = require("chat/addListeners")
const localDatabase = require("localDatabase")

const init = () => {
    console.log("Initialize chat")
    listeners.init()

    const db = localDatabase.load()
    db.messages = db.messages || []

    const eventsEl = document.querySelector(".messages")
    let messages = ""

    db.messages
        .filter(n => n.userId === 1)
        .forEach(n => {
            messages += `
                <div id="event_${n.id}">
                    ${n.message}
                </div>
            `
        }
    )
    eventsEl.innerHTML = messages
}

module.exports = {init}
