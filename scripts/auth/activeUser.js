const activeUser = Object.create(null, {
    "load": {
        value: () => JSON.parse(sessionStorage.getItem("ActiveUser"))
    },
    "save": {
        value: user => {
            sessionStorage.setItem("ActiveUser", JSON.stringify({
                "id": user.id,
                "username": user.username,
                "email": user.email
            }))
        }
    },
    "clear": {
        value: () => sessionStorage.removeItem("ActiveUser")
    }
})

module.exports = activeUser
