const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.href = "index.html";
}

const userId = user.id;

const API = `http://localhost:8082/api/trades/${userId}`;


// LOAD SUMMARY

async function loadSummary() {

    const res = await fetch(`http://localhost:8082/api/trades/summary/${userId}`);

    const data = await res.json();

    document.getElementById("wallet").innerText =
        "₹" + data.wallet.toFixed(2);

    document.getElementById("totalTrades").innerText =
        data.totalTrades;

    document.getElementById("totalAmount").innerText =
        "₹" + data.totalAmount.toFixed(2);

    document.getElementById("totalConverted").innerText =
        "₹" + data.totalConverted.toFixed(2);

}



// LOAD RECENT TRADES

async function loadTrades() {

    const res = await fetch(API);

    const data = await res.json();

    const table = document.getElementById("recent-trades");

    table.innerHTML = "";

    data.slice(-5).reverse().forEach(t => {

        table.innerHTML += `

        <tr>

            <td>${t.id}</td>

            <td>${t.fromCurrency}</td>

            <td>${t.toCurrency}</td>

            <td>${t.tradeType}</td>

            <td>₹${t.amount}</td>

            <td>${t.status}</td>

        </tr>

        `;

    });

}


loadSummary();

loadTrades();