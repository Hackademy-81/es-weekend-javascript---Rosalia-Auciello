// esercizio cambia forma colore e posizione
let btnChangeColorAndForm= document.querySelector(".changeColorandForm");
let btnChangePosition= document.querySelector(".changePosition");

let divTrasls= document.querySelectorAll(".trasl");
let divColors= document.querySelectorAll(".color");
let divForm= document.querySelector(".form")



btnChangeColorAndForm.addEventListener("click", ()=> {

    divColors.forEach((divColor)=>{
        divColor.style.backgroundColor= `rgb(${Math.floor(Math.random() * (256))},${Math.floor(Math.random() * (256))},${Math.floor(Math.random() * (256))})`; 
    });

    
    
});

btnChangeColorAndForm.addEventListener("click", ()=> {
    divForm.classList.add("circle");
});

btnChangePosition.addEventListener("click", ()=> {
       divTrasls.forEach((divTrasl)=> {
        divTrasl.classList.toggle("translation");
       });
});






