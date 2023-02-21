import { useRef, useEffect } from "react";

const MyCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = '#330055'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        paintEarth(context);
    },[])

    const paintEarth = (ctx) => {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const radius = 20;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'lightblue';
        ctx.fill();
        ctx.closePath();

        // Южная Америка
        ctx.beginPath();
        ctx.fillStyle = '#88cc00';
        ctx.bezierCurveTo(centerX + 20, centerY, centerX - 20, centerY - 20, centerX - 10, centerY + 10);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'brown';
        ctx.bezierCurveTo(centerX, centerY + 10, centerX + 30, centerY + 10, centerX + 10, centerY);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.bezierCurveTo(centerX - 10, centerY + 18, centerX + 20, centerY + 20, centerX + 10, centerY + 10);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.bezierCurveTo(centerX + 0, centerY - 18, centerX - 25, centerY - 10, centerX + 15, centerY - 10);
        ctx.closePath();
        ctx.fill();

        // Линии широты
        ctx.beginPath();
        for (let i = centerY - radius + 1; i <= centerY + radius - 1; i += 5) {
            ctx.moveTo(centerX - 2, i);
            ctx.lineTo(centerX + 2, i);
        }
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();

        // Линии долготы
        ctx.beginPath();
        for (let i = centerX - radius + 1; i <= centerX + radius - 1; i += 5) {
            ctx.moveTo(i, centerY - 2);
            ctx.lineTo(i, centerY + 2);
        }
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    };
     
    return ( 
        <canvas ref={canvasRef} width={650+'px'} height={650+'px'}>
            Your browser doesn't support Canvas.
        </canvas>
    );
}
 
export default MyCanvas;