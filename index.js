window.addEventListener('load', window_loaded);
var ctx = null;
function window_loaded() {
    var theCanvas = document.getElementById('theCanvas');
    ctx = theCanvas.getContext('2d');
    var degrees1 = 360;
    ctx.beginPath();
    ctx.arc(300, 300, 200, 0, (degrees1 / 360) * (Math.PI * 2));
    ctx.fillStyle = 'red';
    //  ctx.fill();
    ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(400,400);
    // ctx.lineTo(400 + x, 400 + y);
    // ctx.stroke();
    var radius = 200;
    var centerX = 300;
    var centerY = 300;
    var degrees = 0;
    console.log();
    for (var i = 0; i < 60; i++) {
        var angle_1 = (degrees / 360) * (Math.PI * 2);
        var x = Math.cos(angle_1) * radius;
        var y = Math.sin(angle_1) * radius;
        if (i % 5 === 0) {
            ctx.beginPath();
            ctx.moveTo(centerX + x - x / 5, centerY + y - y / 5);
            ctx.lineTo(centerX + x - x / 10, centerY + y - y / 10);
            ctx.stroke();
        }
        else {
            ctx.beginPath();
            ctx.moveTo(centerX + x - x / 6, centerY + y - y / 6);
            ctx.lineTo(centerX + x - x / 7, centerY + y - y / 7);
            ctx.stroke();
        }
        degrees = degrees + 6;
    }
    var hourDegrees = 30;
    var angle = (hourDegrees * 7 / 360) * (Math.PI * 2);
    var xTime = Math.cos(angle) * radius / 2.5;
    var yTime = Math.sin(angle) * radius / 2.5;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + xTime, centerY + yTime);
    ctx.stroke();
    angle = (hourDegrees * 11 / 360) * (Math.PI * 2);
    xTime = Math.cos(angle) * radius / 1.5;
    yTime = Math.sin(angle) * radius / 1.5;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + xTime, centerY + yTime);
    ctx.stroke();
}
//# sourceMappingURL=index.js.map