const listeners = require("tasks/addListeners")
const localDatabase = require("localDatabase")

const init = () => {
    console.log("Initialize tasks")
    listeners.init()

    const db = localDatabase.load()
    db.tasks = db.tasks || []

    const tasksEl = document.querySelector(".tasks")
    let tasks = ""

    db.tasks
        .filter(t => t.userId === 1)
        .forEach(t => {
            tasks += `
                <div id="task_${t.id}">
                    ${t.task}
                </div>
            `
        }
    )
    tasksEl.innerHTML = tasks
}

module.exports = {init}
