"use strict"

document.getElementById("submit").addEventListener("click", getDatabase);

function getDatabase() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(database.hasOwnProperty("users") && database.hasOwnProperty("admins")) {
        
        let user = getUser(username, password)

        if(user != null) {
            localStorage.setItem("user", user);

            if(user.isAdmin) {
                location.href = "admin.html";
            }
            else {
                location.href = "user.html";
            }
        }        
    }

    alert("User or password incorrect.")
}

function getUser(username, password) {

    for(let i = 0; i < database.admins.length; i++) {
        if(database.admins[i].username === username && database.admins[i].password === password) {
            return database.admins[i]
        }
    }

    for(let i = 0; i < database.users.length; i++) {
        if(database.users[i].username === username && database.users[i].password === password) {
            return database.users[i]
        }
    }

    return null
}