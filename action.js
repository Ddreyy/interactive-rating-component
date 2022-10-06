const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2")


const submitButton = document.getElementById("submitButton")


var buttonClick = document.querySelectorAll(".btn-number").length
var outputNumber = document.querySelector(".output")



submitButton.addEventListener("click", function(){
    card1.style.display = "none"
    card2.classList.remove("hide-card2")
   
})




for(var i = 0; i < buttonClick; i++){
    document.querySelectorAll(".btn-number")[i].addEventListener("click", function(){
        outputNumber.innerHTML = this.innerHTML
       
     })
        
}