"use strict"

let database = {
    "admin" : {
        password: "admin",
        isAdmin: true,
        name: "Admin",
        email: "admin@gmail.com",
        telephone: "",
        address: "",
    },
    "user" : {
        password: "user",
        isAdmin: false,
        name: "nome",
        email: "admin@gmail.com",
        telephone: "(99)1234-5678",
        address: "Rua XYZ, 123",
    }
}

localStorage.setItem("database", JSON.stringify(database))
  