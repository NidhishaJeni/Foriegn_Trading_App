const API = "http://localhost:8082/api/currency";
const user = JSON.parse(localStorage.getItem("user"));

if(!user){

    window.location.href="index.html";

}
// ADD
async function addCurrency() {
  const code = document.getElementById("code").value;
  const name = document.getElementById("name").value;
  const rate = parseFloat(document.getElementById("rate").value);

  await fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ code, name, rate })
  });

  loadCurrencies();
}

// UPDATE
async function updateRate() {
  const code = document.getElementById("updateCode").value;
  const newRate = parseFloat(document.getElementById("newRate").value);

  await fetch(`${API}/update/${code}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ rate: newRate })
  });

  loadCurrencies();
}

// LOAD TABLE
async function loadCurrencies() {
  const res = await fetch(API);
  const data = await res.json();

  const table = document.getElementById("currencyTable");
  table.innerHTML = "";

  data.forEach((c, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${c.code}</td>
        <td>${c.name}</td>
        <td>${c.rate}</td>
        <td>
          <button onclick="deleteCurrency(${c.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// DELETE
async function deleteCurrency(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadCurrencies();
}

loadCurrencies();