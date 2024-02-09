const increase_btn=document.getElementById("b1");
const reset_btn=document.getElementById("b2");
const decrease_btn=document.getElementById("b3");
const para=document.getElementById("number");

let number=0;
para.textContent = number;

increase_btn.onclick = function(){
    para.textContent=++number;
}

decrease_btn.onclick = function(){
    para.textContent=--number;
}

reset_btn.onclick = function(){
    number=0;
    para.textContent=number;
}

