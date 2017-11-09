const auth = require("./auth/init")
const activeUser = require("./auth/activeUser")
const localDb = require("./localDatabase")

localDb.clear()
activeUser.clear()

if (activeUser.load()) {
    auth.hide()
} else {
    auth.show()
}
