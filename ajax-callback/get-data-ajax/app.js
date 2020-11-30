window.addEventListener("load", init);

function init() {
    var btn = document.getElementById("button");
    btn.addEventListener("click", onClickButton);
}

function onClickButton(e) {
    const xhr = new XMLHttpRequest();

    let num = document.querySelector(".input-box").value;
    //console.log(num);

    xhr.open("GET", `http://api.icndb.com/jokes/random/${num}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const responce = JSON.parse(xhr.responseText);
            onLoadFunction(responce);
        }
    }

    xhr.send();

    e.preventDefault();
}

function onLoadFunction(responce) {
    
    console.log(responce);

    let output = "";
    if (responce.type === "success") {
        responce.value.forEach(jokeObj => {
            output += `<li>${jokeObj.joke}</Li>`;
        });
    } else {
        output += `<li>somthing went wrong</Li>`;
    }

    document.querySelector(".jokes").innerHTML = output;
}