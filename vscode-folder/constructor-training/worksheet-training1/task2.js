window.addEventListener('load', init);

function init(){
    var divDom = document.getElementById("div2");
    divDom.addEventListener("click", onDiv2ClickHandler);
}

function onDiv1ClickHandler(){
    console.log("onDiv1ClickHandler");
    var firstDiv = document.getElementById("div1");
    firstDiv.click();
    
}


var div2Clicked = false;
function onDiv2ClickHandler(e){
    console.log("onDiv2ClickHandler");
    var secDiv = document.getElementById("div2");
    if(div2Clicked == true){
        div2Clicked = false;
        secDiv.style.backgroundColor = "black";
    }
    else{
        div2Clicked = true;
        secDiv.style.backgroundColor = "red";
    }  
} 
