const localDb = require("../localDatabase")

// Load database and sort users by id, descending
const db = localDb.load()
db.users = db.users || []

const userIdGenerator = function* (startFrom = 0) {
    let id = 1

    while (true) {
        yield startFrom + id
        id++
    }
}

let uuid = null
try {
    db.users.sort((p,n) => n.id - p.id)
    uuid = userIdGenerator(db.users[0].id)
} catch (ex) {
    console.log("No users yet", db.users);
    uuid = userIdGenerator()
}

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
