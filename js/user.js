"use strict"

let user = database.users[0]

document.getElementById("name").innerHTML = user.name
document.getElementById("email").innerHTML += user.email
document.getElementById("telephone").innerHTML += user.telephone
document.getElementById("address").innerHTML += user.address
