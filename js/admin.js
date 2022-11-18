"use strict"

let admin = database.admins[0]

document.getElementById("name").innerHTML = admin.name
document.getElementById("email").innerHTML += admin.email
document.getElementById("telephone").innerHTML += admin.telephone
document.getElementById("address").innerHTML += admin.address
