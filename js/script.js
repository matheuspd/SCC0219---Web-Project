"use strict"

let database = {
    "admins" : [
        {
            username: "admin",
            password: "admin",
            isAdmin: true,
            name: "Admin",
            email: "admin@gmail.com",
            telephone: "",
            address: "",
        }
    ],
    "users" : [
        {
            username: "user",
            password: "user",
            isAdmin: false,
            name: "User",
            email: "user@gmail.com",
            telephone: "(99)1234-5678",
            address: "Rua XYZ, 123",
        }
    ]
}

localStorage.setItem("database", JSON.stringify(database))
  