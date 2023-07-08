form = document.getElementById("form");
function saveName(){
    localStorage.setItem("name", document.getElementById("user").value);
    console.log(localStorage.getItem("name"));
}