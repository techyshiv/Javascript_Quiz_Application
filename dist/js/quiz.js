let user = sessionStorage.getItem("Name");
let points = sessionStorage.getItem('Points');
let time = sessionStorage.getItem('Time');

document.querySelector(".name").innerHTML=user;
document.querySelector(".point").innerHTML=points;
document.querySelector(".time").innerHTML=time;