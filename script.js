function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 function lightModeFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
 }


 let btn = document.querySelector("#b2");
 let icon = btn.querySelector(".bx-moon");

 btn.onclick = function (){
    if(icon.classList.contains("bx-moon")){
         var element = document.body;
         element.classList.toggle("dark-mode");
         icon.classList.replace("bx-moon", "bxs-sun");
     }
     else{
         var element = document.body;
         element.classList.toggle("light-mode");
         icon.classList.replace("bxs-sun", "bx-moon");
     }
 }

