const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.href = "index.html";
}

const userId = user.id;
const API = `http://localhost:8082/api/trades/${userId}`;

// CREATE TRADE
async function createTrade() {

    const amount = parseFloat(document.getElementById("amount").value);

    if (!amount || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const tradeType = document.getElementById("tradeType").value;

    // Get exchange rate
    const response = await fetch(`http://localhost:8082/api/currency/${fromCurrency}`);
    const currency = await response.json();

    const rate = currency.rate;
    const convertedAmount = amount * rate;

    // Save trade
    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fromCurrency,
            toCurrency,
            tradeType,
            amount,
            convertedAmount
        })
    });

    alert("Trade Executed Successfully");

    document.getElementById("amount").value = "";

    loadTrades();
}


// LOAD TRADE HISTORY
async function loadTrades() {

    const res = await fetch(API);
    const data = await res.json();

    const table = document.getElementById("trade-list");
    table.innerHTML = "";

    data.forEach(t => {

        table.innerHTML += `
            <tr>

                <td>${t.id}</td>
                <td>${t.fromCurrency}</td>
                <td>${t.toCurrency}</td>
                <td>${t.tradeType}</td>
                <td>${t.amount}</td>
                <td>${t.convertedAmount}</td>
                <td>${t.tradeDate}</td>
                <td>${t.status}</td>

                <td>
                    <button onclick="deleteTrade(${t.id})">
                        Delete
                    </button>
                </td>

            </tr>
        `;

    });

}


async function deleteTrade(id){

    if(!confirm("Delete this trade?")){
        return;
    }

    await fetch(`${API}/${id}`,{
        method:"DELETE"
    });

    alert("Trade Deleted");

    loadTrades();
}


// INITIAL LOAD
loadTrades();