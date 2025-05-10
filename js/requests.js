window.addEventListener("DOMContentLoaded", (e)=>{
    let cont = document.getElementById("container")
    for (let i in localStorage){
        if (i.startsWith("request")){
            console.log(localStorage[i])
            cont.innerHTML += `        
            <div class="request">
                <h3>${eval(localStorage[i])[1]} ${eval(localStorage[i])[2]}</h3>
                <p>${eval(localStorage[i])[0]}</p>
                <p>${eval(localStorage[i])[3]}</p>
                <p>${eval(localStorage[i])[4]}</p>
            </div>
            `
        }
    }
})