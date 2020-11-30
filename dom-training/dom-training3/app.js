window.addEventListener("load", init);

let inputBox;


function init(e){
    inputBox = document.querySelector("input");
    inputBox.value = 0;

    let button1 = document.querySelector(".btn1");
    button1.addEventListener("click",onButtonClick1);

    let button2 = document.querySelector(".btn2");
    button2.addEventListener("click",onButtonClick2);
}

function onButtonClick1(e){
    inputBox.value = parseInt(inputBox.value) - 1;

}

function onButtonClick2(e){
    inputBox.value = parseInt(inputBox.value) + 1;
}