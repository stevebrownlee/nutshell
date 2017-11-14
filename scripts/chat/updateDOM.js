const activeUser = require("auth/activeUser")
const localDatabase = require("localDatabase")

let editing = false

const writeMessages = () => {
    // Load all messages from database table
    const db = localDatabase.load()
    db.messages = db.messages || []

    // Target element where messages will be displayed
    const messagesEl = document.querySelector(".messages > .widget__contents")

    // Listen for keypress event on input fields when editing a message
    messagesEl.addEventListener("keyup", function (event) {
        if (event.target.className.startsWith("editmessage")) {
            // If user pressed return key, and input isn't blank
            if (event.target.value && (event.keyCode === 13 || event.keyCode === 27)) {

                // Get id of message being edited
                const msgId = event.target.className.split("_")[1]

                const dbMessage = db.messages.find(m => m.id === parseInt(msgId))

                // Display old message on escape
                if (event.keyCode === 27) {
                    event.target.parentElement.innerHTML = dbMessage.message

                // Update the message in the database
                } else {
                    dbMessage.message = event.target.value
                    localDatabase.save(db)
                    // Update <span> content with new message
                    event.target.parentElement.innerHTML = event.target.value
                }


                editing = false
            }
        }
    })

    // Write all chat messages to DOM
    let messages = ""
    db.messages
        .forEach(msg => {
            const author = db.users.find(u => u.id === msg.userId)
            messages += `
                <div id="message_${msg.id}" class="usrmsg_${author.id}">
                    <span>${author.username}:</span>
                    <span id="message_${msg.id}" class="usrmsg_${author.id}--message">${msg.message}</span>
                </div>
            `
        }
    )
    messagesEl.innerHTML = messages

    // Attach event listeners to messages authored by current user
    const user = activeUser.load()
    const userMessages = document.querySelectorAll(`.usrmsg_${user.id}`)
    Array.from(userMessages).forEach(
        msg => {
            msg.addEventListener("click", function () {
                if (!editing) {
                    const msgEl = this.querySelector(`.usrmsg_${user.id}--message`)
                    msgEl.innerHTML = `
                    <input autofocus class="edit${msg.id}" type="text" value="${msgEl.innerHTML}" style="width: 80%">
                    `
                }
                editing = true
            })
        }
    )
}

module.exports = writeMessages
