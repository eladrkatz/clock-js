window.addEventListener('load', window_loaded);
var ctx = null;
function window_loaded() {
    var theCanvas = document.getElementById('theCanvas');
    ctx = theCanvas.getContext('2d');
    var degrees1 = 90;
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
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY + radius);
    ctx.stroke();
    var degrees = 10;
    console.log();
    for (var i = 0; i < 8; i++) {
        var angle = (degrees / 360) * (Math.PI * 2);
        var x = Math.cos(angle) * radius;
        var y = Math.sin(angle) * radius;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + x, centerY + y);
        ctx.stroke();
        degrees = degrees + 10;
    }
}
//# sourceMappingURL=index.js.map