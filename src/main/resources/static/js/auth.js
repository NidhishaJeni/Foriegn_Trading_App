// ================= LOGIN =================
async function login() {

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    alert("Enter username and password");
    return;
  }

  try {
    const res = await fetch("http://localhost:8082/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    if (res.ok) {
      const data = await res.json();

      // ✅ SAVE USER
      localStorage.setItem("user", JSON.stringify(data));

      // ✅ REDIRECT TO DASHBOARD
      window.location.href = "trade.html";

    } else {
      alert("Invalid credentials");
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
}


// ================= REGISTER =================
async function register() {

  const username = document.getElementById("regUsername").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (!username || !email || !password) {
    alert("Fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:8082/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    });

    const msg = await res.text();

    alert(msg);

if(res.ok){
    window.location.href="index.html";
}

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
}


// ================= AUTO REDIRECT (OPTIONAL) =================
// If already logged in, skip login page
window.onload = function () {
  const user = localStorage.getItem("user");

  if (user) {
    window.location.href = "dashboard.html";
  }
};