"use strict"

document.getElementById("submit").addEventListener("click", getdatabase);

function getdatabase() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(database.hasOwnProperty(username) && database[username].password === password) {
        
        localStorage.setItem("usuario", JSON.stringify(database[username]));
        
        if(database[username].isAdmin) {
            location.href = "admin.html";
        }
        else {
            location.href = "user.html";
        }
    }

    alert("User or password incorrect.")
}