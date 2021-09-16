window.addEventListener('load', window_loaded); 

let ctx: CanvasRenderingContext2D = null;

function window_loaded() {

    const theCanvas : HTMLCanvasElement = document.getElementById('theCanvas') as HTMLCanvasElement;

    ctx = theCanvas.getContext('2d');

    const radius = 200;
    const centerX = 300;
    const centerY = 300;


    function drawClock(){
        ctx.beginPath();
        ctx.moveTo(500, 500);
        ctx.lineTo(500, 100);
        ctx.moveTo(500, 100);
        ctx.lineTo(100, 100);
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 500);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(300, 300, 200, 0, Math.PI * 2);
        ctx.stroke();

        let degrees = 0;

        for(let i = 0; i < 60; i++){
            let angle = (degrees / 360) * (Math.PI * 2);
            let x = Math.cos(angle) * radius;
            let y = Math.sin(angle) * radius;
        
            if(i % 5 === 0){
                ctx.beginPath();
                ctx.moveTo(centerX + x - x / 5 ,centerY + y - y / 5);
                ctx.lineTo(centerX + x - x / 10 , centerY + y - y / 10);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.moveTo(centerX + x - x / 6 ,centerY + y - y / 6);
                ctx.lineTo(centerX + x - x / 7 , centerY + y - y / 7);
                ctx.stroke();
            }
        degrees = degrees + 6;
        }
    }



    const handDegrees = 30;
    for(let i = 0; i < 12; i ++){
        let angle = (handDegrees * i / 360) * (Math.PI * 2);
        let xTime = Math.cos(angle) * radius / 2.5;
        let yTime = Math.sin(angle) * radius / 2.5;


    }
    drawClock();


    //let angle = (handDegrees * 7 / 360) * (Math.PI * 2);
    //let xTime = Math.cos(angle) * radius / 2.5;
    //let yTime = Math.sin(angle) * radius / 2.5;

    //ctx.beginPath();
    //ctx.moveTo(centerX, centerY);
    //ctx.lineTo(centerX + xTime, centerY + yTime);
    //ctx.stroke();

    //angle = (handDegrees * 11 / 360) * (Math.PI * 2);
    //xTime = Math.cos(angle) * radius / 1.5;
    //yTime = Math.sin(angle) * radius / 1.5;

    //ctx.beginPath();
    //ctx.moveTo(centerX, centerY);
    //ctx.lineTo(centerX + xTime, centerY + yTime);
    //ctx.stroke();


}
