

window.addEventListener('load', function () {
    exploreCanvas();
});

function exploreCanvas() {
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");

    var startPt = { x: 50, y: 150 };
    var ctPt1 = { x: 180, y: 100 };
    var ctPt2 = { x: 120, y: 300 };
    var endPt = { x: 350, y: 150 };


    context.moveTo(startPt.x, startPt.y);
    context.bezierCurveTo(ctPt1.x, ctPt1.y, ctPt2.x, ctPt2.y, endPt.x, endPt.y);
    context.lineTo(350, 250);
    context.lineTo(50, 250);
    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = "steelblue";
    context.fillStyle = "#ff1166";

    context.stroke();
    context.fill();

    drawPoint(context, startPt);
    drawPoint(context, ctPt1);
    drawPoint(context, ctPt2);
    drawPoint(context, endPt);

    function drawPoint(context, pointObj) {

    }

    //context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(350, 300);
    //context.closePath();
    context.lineWidth = 2;
    context.strokeStyle = "blue";

    context.stroke();
    //context.fill();

    /*context.beginPath();
    context.rect(75, 250, 250, 150);
    context.closePath();
    context.lineWidth = 7;
    context.strokeStyle = '#666666';
    context.stroke();
    context.fillStyle = "#51DCFF";
    context.fill();

    context.strokeStyle = "#FF3399";
    context.strokeRect(300, 50, 50, 50);*/
    
    context.beginPath();
    context.moveTo(50, 130);
    context.lineTo(150,130);
    context.lineTo(130,200);
    //context.bezierCurveTo(300, 50, 200, 400, 490, 100);
    context.closePath();

    context.stroke();

}




