window.addEventListener("load", init);
let hasMouseDown = false;
let context = null;

function init() {
    const canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
    
    canvas.addEventListener("mousedown", onMouseDownHandler);
    canvas.addEventListener("mousemove", onMouseMoveHandler);
    canvas.addEventListener("mouseup", onMouseUpHandler);
    
    context.lineWidth = 1;
    context.strokeStyle = "black";
    
    const clearBtnDom = document.querySelector("button");
    clearBtnDom.addEventListener("click", function(e){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
    });
}

function onMouseDownHandler(e) {
    
    hasMouseDown = true;
    context.moveTo(e.clientX,e.clientY);  
}

function onMouseMoveHandler(e) {
    if (hasMouseDown == true) {
        context.lineTo(e.clientX,e.clientY);
        context.stroke(); 
    }
}

function onMouseUpHandler(e) {
    hasMouseDown = false;
}



