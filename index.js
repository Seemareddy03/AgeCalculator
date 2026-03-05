

const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(){

const birthdayValue = birthdayEl.value;

if(birthdayValue===""){
alert("Please enter your birthday");
return;
}

const birthDate = new Date(birthdayValue);
const today = new Date();

let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

if(days<0){
months--;
days += 30;
}

if(months<0){
years--;
months += 12;
}

resultEl.style.opacity=1;

resultEl.innerText=
`You are ${years} years, ${months} months and ${days} days old`;
}

btnEl.addEventListener("click",calculateAge);