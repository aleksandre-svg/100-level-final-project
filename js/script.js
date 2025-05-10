const form = document.querySelector("#form1")
let count = 0
let burger = document.getElementById("menu")
let menu = document.getElementById("nav-header-ul-burg")
let closebut = document.getElementById("closebut")
let search = document.getElementById("search")
let searchBut = document.getElementById("searchBut")
let overlay = document.querySelector(".overlay")
let searchCloseBut = document.querySelector("#searchclosebut")
let searchPhone = document.getElementById("searchButPhone")

form.addEventListener("submit", (e)=>{
    let email = e.target.email.value
    let firstName = e.target.firstname.value
    let lastName = e.target.lastname.value
    let country = e.target.country.value
    let phoneNum = e.target.phonenum.value
    let count = localStorage.getItem("counter");
    if (count === null) {
        count = 0;
    } else {
        count = Number(count);
    }
    
    count++;

    localStorage.setItem("counter", count);
    
    localStorage.setItem(`request${localStorage.getItem("counter")}`, `['${email}', '${firstName}', '${lastName}', '${country}', '${phoneNum}']`)
    console.log(localStorage)
})

burger.addEventListener("click", (e)=>{
    menu.style = "transform: translate(0px);"
})

closebut.addEventListener("click", (e)=>{
    menu.style = "transform: translate(300px);"
})

searchBut.addEventListener("click", (e)=>{
    search.style = "display: block;"
    overlay.style = "display: block;"
})

searchCloseBut.addEventListener("click", (e)=>{
    search.style = "display: none;"
    overlay.style = "display: none;"
})

searchPhone.addEventListener("click", (e)=>{
    search.style = "display: block;"
    overlay.style = "display: block;"
})

window.addEventListener("DOMContentLoaded", ()=>{
    let int = document.getElementById("interact")
    const burg = document.getElementById("forms")
    let men = document.getElementById("forms1")
    const userExist = localStorage.getItem("user")
    let status = localStorage.getItem("status")
    let AdminStatus = localStorage.getItem("AdminStatus")

    if (userExist && status=="true"){
        burg.innerHTML = `<a href="profile.html"><button class="user" id="profile">Profile</button></a>`
        men.innerHTML = `<a href="profile.html"><button class="user" id="login">Profile</button></a>`
    }else if (AdminStatus && AdminStatus=="true"){
        burg.innerHTML = `<a href="profile.html"><button class="user" id="profile">Profile</button></a>`
        men.innerHTML = `<a href="profile.html"><button class="user" id="login">Profile</button></a>`
        men.innerHTML += `<a href="requests.html" class="user"><button class="user">Requsts</button></a>`
        burg.innerHTML +=  `<a href="requests.html" class="user"><button class="user">Requsts</button></a>`
    }
    else {
        burg.innerHTML = `<a href="login.html"><button class="user" id="login">Log in</button></a><a href="signup.html"><button class="user" id="signup">Sign up</button></a>`
        men.innerHTML = `
            <a href="login.html"><button class="user" id="login">Log in</button></a>
            <a href="signup.html"><button class="user" id="signup">Sign up</button></a>
        `
    }
})
