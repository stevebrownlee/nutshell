const localDb = require("../localDatabase")

const userIdGenerator = function* (startFrom = 0) {
    let id = 1

    while (true) {
        yield startFrom + id
        id++
    }
}

const uuid = userIdGenerator()

const userFactory = Object.create(null, {
    "create": {
        value: (username, email) => {
            return Object.create(null, {
                "id": {
                    value: uuid.next().value
                },
                "username": {
                    value: username
                },
                "email": {
                    value: email
                },
                "save": {
                    value: function () {
                        debugger
                        const db = localDb.load()
                        db.users = db.users || []
                        db.users.push({
                            "id": this.id,
                            "username": this.username,
                            "email": this.email
                        })
                        localDb.save(db)
                        console.log(db);
                    }
                }
            })
        }
    }
})


module.exports = userFactory
