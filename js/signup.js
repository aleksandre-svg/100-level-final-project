let form = document.getElementById("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let email = e.target.email.value
    let pass = e.target.password.value
    let rep = e.target.repeat.value
    let name = e.target.name.value

    if (String(pass)!=String(rep)){
        alert("Passwords doesnt match")
    }else {
        localStorage.setItem("user", `['${name}', '${email}', '${pass}', '${rep}']`)
        let arr = localStorage.getItem("user")
        console.log(eval(arr))
        localStorage.setItem("status", "true")
        console.log(localStorage)
        location.replace("index.html")
    }
})