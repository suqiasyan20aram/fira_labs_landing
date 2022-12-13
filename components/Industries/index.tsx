import {useRef, useMemo, useEffect} from "react";

import styles from './index.module.scss'

let context: any;
let balls = new Array(0);
let tempBall: { x: number; y: number; nextx: number; nexty: number; radius: number; speed: number; angle: number; velocityx: number; velocityy: number; mass: number; };

const getSize = () => {
    return window.innerWidth > 1024 ? 'desktop' : window.innerWidth <= 1024 && window.innerWidth >= 425 ? 'tablet' : 'mobile'
}

const sizes = {
    desktop: {
        ballRadius: 110,
        numberFontSize: 60,
        numberOffset: 0,
        fontSize: 20,
        textOffset: 60,
        whiteArcOffset: -20,
        canvasHeight: 800,
    },
    tablet: {
        ballRadius: 60,
        numberFontSize: 30,
        numberOffset: -9,
        fontSize: 14,
        textOffset: 30,
        whiteArcOffset: -20,
        canvasHeight: 800,
    },
    mobile: {
        ballRadius: 40,
        numberFontSize: 20,
        numberOffset: -2,
        fontSize: 10,
        textOffset: 20,
        whiteArcOffset: -10,
        canvasHeight: 550,
    },
}

const Industries = () => {
    let theCanvas = useRef<any>(null).current;

    const data = useMemo(() => {
        return [
            {title: 'Banking'},
            {title: 'Education'},
            {title: 'Healthcare'},
            {title: 'Fashion'},
            {title: 'Gaming'},
            {title: 'Events'},
            {title: 'Advertising'},
        ]
    }, [])


    const canvasApp = () => {

        function drawScreen() {
            context.fillStyle = "rgba(0,0,0,0)";
            context.clearRect(0, 0, theCanvas.width, theCanvas.height);

            update();
            testWalls();
            collide();
            render();
        }

        function update() {
            for (let i = 0; i < balls.length; i++) {
                const ball = balls[i];
                ball.nextx = (ball.x += ball.velocityx);
                ball.nexty = (ball.y += ball.velocityy);
            }
        }

        function testWalls() {
            let ball;

            for (let i = 0; i < balls.length; i++) {
                ball = balls[i];

                if (ball.nextx + ball.radius > theCanvas.width) {
                    ball.velocityx = ball.velocityx * -1;
                    ball.nextx = theCanvas.width - ball.radius;

                } else if (ball.nextx - ball.radius < 0) {
                    ball.velocityx = ball.velocityx * -1;
                    ball.nextx = ball.radius;

                } else if (ball.nexty + ball.radius > theCanvas.height) {
                    ball.velocityy = ball.velocityy * -1;
                    ball.nexty = theCanvas.height - ball.radius;

                } else if (ball.nexty - ball.radius < 0) {
                    ball.velocityy = ball.velocityy * -1;
                    ball.nexty = ball.radius;
                }


            }

        }

        function render() {
            let ball: { x: any; nextx: any; y: any; nexty: any; radius: any; };

            for (let i = 0; i < balls.length; i++) {
                ball = balls[i];
                ball.x = ball.nextx;
                ball.y = ball.nexty;

                context.beginPath();
                context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true);
                context.closePath();
                const grd = context.createRadialGradient(
                    ball.nextx + 60, ball.nexty - 60, 0,
                    ball.nextx, ball.nexty, 220
                );
                grd.addColorStop(0.005, "#ffffff");
                grd.addColorStop(0.05, "#313131");
                grd.addColorStop(0.66, "#000000");
                grd.addColorStop(1, "#313131");
                context.fillStyle = grd;
                context.fill();
                context.beginPath();
                context.arc(ball.x, ball.y + sizes[getSize()].whiteArcOffset, ball.radius / 3, 0, Math.PI * 2, true);
                context.fillStyle = '#ffffff';
                context.fill();
                context.closePath();
                context.fillStyle = "#000000";
                context.font = `bold ${sizes[getSize()].numberFontSize}px SF Pro, sans-serif, bold,italic`;
                context.textAlign = "center";
                context.fillText(i + 1, ball.x, ball.y + sizes[getSize()].numberOffset);
                context.fillStyle = "#cccccc";
                context.font = `${sizes[getSize()].fontSize}px SF Pro, sans-serif`;
                context.textAlign = "center";
                context.fillText(data[i].title.toUpperCase(), ball.x, ball.y + sizes[getSize()].textOffset);
                context.shadowColor = "rgba(0,0,0,0)";
                context.shadowBlur = 15;
                context.fillStyle = grd;


            }

        }

        function collide() {
            let ball;
            let testBall;
            for (let i = 0; i < balls.length; i++) {
                ball = balls[i];
                for (let j = i + 1; j < balls.length; j++) {
                    testBall = balls[j];
                    if (hitTestCircle(ball, testBall)) {
                        collideBalls(ball, testBall);
                    }
                }
            }
        }

        function hitTestCircle(ball1: any, ball2: any, a?: boolean) {
            let retval = false;
            let dx = ball1.nextx - ball2.nextx;
            let dy = ball1.nexty - ball2.nexty;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance <= (ball1.radius + ball2.radius)) {
                retval = true;
            }
            if (
                ball1.nextx + ball1.radius > theCanvas.width ||
                ball1.nextx - ball1.radius < 0 ||
                ball1.nexty + ball1.radius > theCanvas.height ||
                ball1.nexty - ball1.radius < 0
            ) {
                retval = true;
            }
            return retval;
        }

        function collideBalls(ball1: any, ball2: any) {

            let dx = ball1.nextx - ball2.nextx;
            let dy = ball1.nexty - ball2.nexty;

            let collisionAngle = Math.atan2(dy, dx);

            let speed1 = Math.sqrt(ball1.velocityx * ball1.velocityx + ball1.velocityy * ball1.velocityy);
            let speed2 = Math.sqrt(ball2.velocityx * ball2.velocityx + ball2.velocityy * ball2.velocityy);

            let direction1 = Math.atan2(ball1.velocityy, ball1.velocityx);
            let direction2 = Math.atan2(ball2.velocityy, ball2.velocityx);

            let velocityx_1 = speed1 * Math.cos(direction1 - collisionAngle);
            let velocityy_1 = speed1 * Math.sin(direction1 - collisionAngle);
            let velocityx_2 = speed2 * Math.cos(direction2 - collisionAngle);
            let velocityy_2 = speed2 * Math.sin(direction2 - collisionAngle);

            let final_velocityx_1 = ((ball1.mass - ball2.mass) * velocityx_1 + (ball2.mass + ball2.mass) * velocityx_2) / (ball1.mass + ball2.mass);
            let final_velocityx_2 = ((ball1.mass + ball1.mass) * velocityx_1 + (ball2.mass - ball1.mass) * velocityx_2) / (ball1.mass + ball2.mass);

            let final_velocityy_1 = velocityy_1;
            let final_velocityy_2 = velocityy_2;

            ball1.velocityx = Math.cos(collisionAngle) * final_velocityx_1 + Math.cos(collisionAngle + Math.PI / 2) * final_velocityy_1;
            ball1.velocityy = Math.sin(collisionAngle) * final_velocityx_1 + Math.sin(collisionAngle + Math.PI / 2) * final_velocityy_1;
            ball2.velocityx = Math.cos(collisionAngle) * final_velocityx_2 + Math.cos(collisionAngle + Math.PI / 2) * final_velocityy_2;
            ball2.velocityy = Math.sin(collisionAngle) * final_velocityx_2 + Math.sin(collisionAngle + Math.PI / 2) * final_velocityy_2;

            ball1.nextx = (ball1.nextx += ball1.velocityx);
            ball1.nexty = (ball1.nexty += ball1.velocityy);
            ball2.nextx = (ball2.nextx += ball2.velocityx);
            ball2.nexty = (ball2.nexty += ball2.velocityy);
        }

        for (let i = 0; i < data.length; i++) {
            const tempRadius = sizes[getSize()].ballRadius;
            let placeOK = false;
            while (!placeOK) {
                const tempX = tempRadius + (Math.floor(Math.random() * theCanvas.width) - tempRadius);
                const tempY = tempRadius + (Math.floor(Math.random() * theCanvas.height) - tempRadius);
                const tempSpeed = 0.2;
                const tempAngle = Math.floor(Math.random() * 360);
                const tempRadians = tempAngle * Math.PI / 180;
                const tempvelocityx = Math.cos(tempRadians) * tempSpeed;
                const tempvelocityy = Math.sin(tempRadians) * tempSpeed;

                tempBall = {
                    x: tempX,
                    y: tempY,
                    nextx: tempX,
                    nexty: tempY,
                    radius: tempRadius,
                    speed: tempSpeed,
                    angle: tempAngle,
                    velocityx: tempvelocityx,
                    velocityy: tempvelocityy,
                    mass: tempRadius,
                    // @ts-ignore
                    title: data[i].title
                };
                placeOK = canStartHere(tempBall);
            }
            balls.push(tempBall);
        }

        function canStartHere(ball: any) {
            let retval = true;
            for (let i = 0; i < balls.length; i++) {
                if (hitTestCircle(ball, balls[i], true)) {
                    retval = false;
                    break;
                }
            }
            return retval;
        }

        function gameLoop() {
            requestAnimationFrame(gameLoop)
            if (theCanvas) {
                drawScreen()
            }
        }

        requestAnimationFrame(gameLoop)
    }

    const onLoad = () => {
        theCanvas.width = window.innerWidth - 80;
        theCanvas.height = sizes[getSize()].canvasHeight;
        context = theCanvas.getContext('2d');
        canvasApp();
    }

    useEffect(() => {
        window.addEventListener('load', onLoad);
        //
        return () => {
            window.removeEventListener('load', onLoad);
        }

    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.containerInner}>
                    <div className={styles.main}>
                        <h2 className={styles.title}>Industries we embrace
                        </h2>
                        <p className={styles.description}>
                            Decentralize everything: Grow within Token Economy and build on the New Internet
                        </p>

                        <canvas ref={ref => theCanvas = ref} width={'0'} height="0" className={styles.canvas}>
                            Your browser does not support the HTML 5 Canvas.
                        </canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industries;