let btn = document.querySelectorAll(".btn")
btn.forEach(function(evr){
    evr.addEventListener("click",function(event){
        document.documentElement.style.setProperty("--theme-color", event.target.dataset.color)
    })
    
})

