const listeners = require("news/addListeners")
const localDatabase = require("localDatabase")

const init = () => {
    console.log("Initialize news")
    listeners.init()

    const db = localDatabase.load()
    db.news = db.news || []

    const newsEl = document.querySelector(".news > .widget__contents")
    let news = ""

    db.news
        .filter(n => n.userId === 1)
        .forEach(n => {
            news += `
                <div id="news_${n.id}">
                    ${n.title}
                </div>
            `
        }
    )
    newsEl.innerHTML = news
}

module.exports = {init}
