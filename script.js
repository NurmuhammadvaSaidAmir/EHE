let send = document.getElementById("send");
let list = document.getElementById("list");
let zapis = document.getElementById("zapis");

send.addEventListener("click", () => {
    let newElement = document.createElement("li");
    newElement.className = "list-item";
    newElement.innerText = "zapis.value";

    if (zapis.value =='') {
        alert("Вы ничего не ввели");
    }else{
        list.appendChild(newElement);
        zapis.value = "";
    }
})
let toggleBtn = document.getElementById("send1");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});