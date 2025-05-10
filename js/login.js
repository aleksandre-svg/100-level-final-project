let form = document.getElementById("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    if (String(email)=="GoalOrientedAcademy@gmail.com" && String(password) =="Keshelava123"){
        localStorage.setItem("AdminStatus", "true")
        localStorage.setItem("user", `['Goal Oriented Academy', 'GoalOrientedAcademy@gmail.com', 'Keshelava123', 'Keshelava123']`)
        location.replace("index.html")
    }else if (localStorage.getItem("user")!=null){
        if (email==eval(localStorage.getItem("user"))[1] && password==eval(localStorage.getItem("user"))[2]){
            localStorage.setItem("status", "true")
            location.replace("index.html")
        }else {
            alert("Incorrect password or email")
        }
    }else {
            alert("Incorrect password or email")
    }
})

