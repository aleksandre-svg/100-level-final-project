let name = document.getElementById("name")

let email = document.getElementById("email")

let username = document.getElementById("username")

let em = document.getElementById("em")

let pass = document.getElementById("userpass")

let profile = document.getElementById("prof")

let logout = document.getElementById("logout")
if (localStorage.getItem("user")){
    name.innerText = eval(localStorage.getItem("user"))[0]
    email.innerText = eval(localStorage.getItem("user"))[1]
    username.value = eval(localStorage.getItem("user"))[0]
    em.value = eval(localStorage.getItem("user"))[1]
    pass.value = eval(localStorage.getItem("user"))[2]
}else {
    name.innerText = "Name"
    email.innerText = "email"
    username.value = undefined
    em.value = undefined
}

logout.addEventListener("click", (e)=>{
    localStorage.setItem("status", "false")
    localStorage.setItem("AdminStatus", "false")
    location.replace("index.html")
})

window.addEventListener("DOMContentLoaded", (e)=>{
    let admin = localStorage.getItem("AdminStatus")

    if (admin && admin == "true"){
        profile.src = "images/goa2.jpg"
    }
})
