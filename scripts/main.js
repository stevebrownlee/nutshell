const activeUser = require("auth/activeUser")
const auth = require("auth/init")
const localDb = require("localDatabase")

// localDb.clear()
activeUser.clear()

auth.init()
