const user = JSON.parse(localStorage.getItem("user"));

if(!user){

    window.location.href="index.html";

}
document.getElementById("id").innerHTML = user.id;

document.getElementById("username").innerHTML = user.username;

document.getElementById("email").innerHTML = user.email;

function logout(){

    localStorage.removeItem("user");

    window.location.href="index.html";

}