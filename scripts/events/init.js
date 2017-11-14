const listeners = require("events/addListeners")
const localDatabase = require("localDatabase")

const init = () => {
    console.log("Initialize events")
    listeners.init()

    const db = localDatabase.load()
    db.events = db.events || []

    const eventsEl = document.querySelector(".events")
    let events = ""

    db.events
        .filter(n => n.userId === 1)
        .forEach(n => {
            events += `
                <div id="event_${n.id}">
                    ${n.title}
                </div>
            `
        }
    )
    eventsEl.innerHTML = events
}

module.exports = {init}
