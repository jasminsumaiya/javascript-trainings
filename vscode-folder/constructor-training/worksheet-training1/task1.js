

window.addEventListener('load', function () {
    var btn = document.getElementById("b1");
    btn.addEventListener("click", onButtonClick);
});

function onButtonClick(e) {

    const inputField = document.querySelector('#listName');
    // get the ul#menu
    const menu = document.querySelector('#menu');

    var result = canContainDuplicate(menu, inputField);
    if (result == true ) {
        alert("alert box open");
        return;
    }

    let li = document.createElement('li');
    li.textContent = inputField.value;
    menu.appendChild(li);
    inputField.value = "";

}

function canContainDuplicate(menu, inputField) {
    for (var i = 0; i < menu.children.length; i++) {
        var itr = menu.children[i];
        var matchInd = itr.textContent.indexOf(inputField.value);
        if (matchInd >= 0) {
            return true;
        }
    }
    return false;
}


