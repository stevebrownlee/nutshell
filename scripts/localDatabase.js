const databaseInterface = Object.create(null, {
    load: {
        value: () => JSON.parse(localStorage.getItem("Nutshell")) || {}
    },
    save: {
        value: db => localStorage.setItem("Nutshell", JSON.stringify(db))
    },
    clear: {
        value: () => localStorage.setItem("Nutshell", JSON.stringify({}))
    }
})

module.exports = databaseInterface
