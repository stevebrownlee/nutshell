const databaseInterface = Object.create(null, {
    load: {
        value: () => JSON.parse(localStorage.getItem("Nutshell")) || {}
    },
    save: {
        value: db => localStorage.setItem("Nutshell", JSON.stringify(db))
    },
    clear: {
        value: () => localStorage.removeItem("Nutshell")
    },
    seed: {
        value: function () {
            const db = {
                "users": [
                    { "id": 1, "username": "po", "email": "po@po.com" },
                    { "id": 2, "username": "Steve", "email": "steve@stevebrownlee.com" },
                    { "id": 3, "username": "Meg", "email": "meg@megducharme.com" },
                    { "id": 4, "username": "Jared", "email": "jared@jaredfuller.com" }
                ],
                "messages": [
                    { "id": 1, "message": "The quick brown fox", "userId": 1 },
                    { "id": 2, "message": "Jumped over the lazy cow", "userId": 1 },
                    { "id": 3, "message": "And the cat died in the box", "userId": 1 },
                    { "id": 4, "message": "The quick brown fox", "userId": 2 },
                    { "id": 5, "message": "Jumped over the lazy cow", "userId": 2 },
                    { "id": 6, "message": "And the cat died in the box", "userId": 3 }
                ],
                "tasks": [
                    { "id": 1, "task": "Take out garbage", "userId": 1 },
                    { "id": 2, "task": "Replace lightbulb in kitchen", "userId": 1 },
                    { "id": 3, "task": "Take dog to vet", "userId": 1 }
                ],
                "news": [
                    { "id": 1, "title": "Black holes lose information via wormholes", "userId": 1 },
                    { "id": 2, "title": "Expression trees in C#", "userId": 1 },
                    { "id": 3, "title": "Variation in bootcamp instruction", "userId": 1 }
                ],
                "events": [
                    { "id": 1, "title": "Drinks with the millers", "userId": 1 },
                    { "id": 2, "title": "Evening staff meeting", "userId": 1 },
                    { "id": 3, "title": "Car rental return", "userId": 1 }
                ]
            }

            this.save(db)
            console.log(this.load())
        }
    }
})

module.exports = databaseInterface
