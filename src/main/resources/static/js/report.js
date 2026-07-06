const user = JSON.parse(localStorage.getItem("user"));

if(!user){

    window.location.href="index.html";

}
const userId = user.id;

async function loadReport(){

const res = await fetch(`http://localhost:8082/api/trades/summary/${userId}`);

const data = await res.json();

document.getElementById("totalTrades").innerHTML=data.totalTrades;

document.getElementById("totalAmount").innerHTML=data.totalAmount;

document.getElementById("totalConverted").innerHTML=data.totalConverted;

document.getElementById("tradeCount").innerHTML=data.totalTrades;

document.getElementById("amount").innerHTML=data.totalAmount;

document.getElementById("converted").innerHTML=data.totalConverted;

}

loadReport();