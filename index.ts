window.addEventListener('load', window_loaded); 

let ctx: CanvasRenderingContext2D = null;

function window_loaded() {

    const theCanvas : HTMLCanvasElement = document.getElementById('theCanvas') as HTMLCanvasElement;

    ctx = theCanvas.getContext('2d');

     const degrees1 = 90;

     ctx.beginPath();
     ctx.arc(300, 300, 200, 0, (degrees1 / 360) * (Math.PI * 2));
     ctx.fillStyle = 'red';
    //  ctx.fill();
     ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(400,400);
    // ctx.lineTo(400 + x, 400 + y);
    // ctx.stroke();

    const radius = 200;
    const centerX = 300;
    const centerY = 300;

    ctx.beginPath();

    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(centerX,centerY);
    ctx.lineTo(centerX, centerY + radius);
    ctx.stroke();

    let degrees = 10;
    console.log();

    for(let i = 0; i < 8; i++)
    {
        let angle = (degrees / 360) * (Math.PI * 2);
        let x = Math.cos(angle) * radius;
        let y = Math.sin(angle) * radius;
    
        ctx.beginPath();
        ctx.moveTo(centerX,centerY);
        ctx.lineTo(centerX + x, centerY + y);
        ctx.stroke();
        degrees = degrees + 10;
    }
}
