var age;
var promo;

age = prompt("What is your age? :");

if (age > 64){
    promo = "Free Friday Coffee Night for Seniors!"
    document.getElementById("verify").style.fontWeight = "bold";
    document.getElementById("verify").style.textDecoration = "underline";
}  else{
    promo = "Enjoy Music and Make Memories!"
}

document.getElementById("verify").innerHTML = promo;