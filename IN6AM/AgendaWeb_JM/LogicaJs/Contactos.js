if(localStorage.getItem("name")==""){
    localStorage.setItem("name", "Usuario")
}
document.getElementById("usuario").innerHTML = localStorage.getItem("name");
