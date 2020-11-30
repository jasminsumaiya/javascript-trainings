window.addEventListener("load",function(){
    var btn = document.getElementById("b1");
    btn.addEventListener("click",onButtonClick);
});

function onButtonClick(e) {
    console.log("button clicked");

    const menu = document.querySelector("#menu");
    const inputField = document.querySelector("#listName");

    menu.appendChild(newElement(inputField.value));
}

function newElement(name) {
    let li = document.createElement("li");
    li.textContent = name;
    return li;
}