const tasks = require("tasks/init")
const news = require("news/init")
const events = require("events/init")
const chat = require("chat/init")
// const friends = require("friends/init")

const init = () => {
    tasks.init()
    news.init()
    events.init()
    chat.init()
}

module.exports = {init}
