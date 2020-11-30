window.addEventListener('load', init);

function init(){
document.getElementById("button1").addEventListener("click", onButtonClick);
}

function onButtonClick(e){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","http://localhost:3050/getemployeedata",true);

    xhr.onload = function(){
        if (this.status === 200) {
            const responce = JSON.parse(this.responseText);
            onLoadFunction(responce);
        }
        else {
            console.log("the employee detail is not found");
        }
    }

    xhr.send();

    e.preventDefault();
}

function onLoadFunction(responce){
    
    console.log(responce);

    
}