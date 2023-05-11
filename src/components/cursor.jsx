import React from 'react';
import "./cursor.css";

export const CustomCursor = () => {
    const mainCursor = React.useRef(null);
    const secondaryCursor = React.useRef(null);
    const shark = React.useRef(null);

    const positionRef = React.useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        show: false,
        key: -1
    })

    React.useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;

            const mouseX = clientX;
            const mouseY = clientY;

            positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
            positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;

            // mainCursor.current.style.transform = `translate3d(${mouseX -
            //     mainCursor.current.clientWidth / 2}px, ${mouseY -
            //     mainCursor.current.clientHeight / 2}px, 0)`;
        });
        return () => { };
    }, []);

    React.useEffect(() => {
        const followMouse = () => {

            positionRef.current.key = requestAnimationFrame(followMouse);

            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
                show }
                = positionRef.current;

            if (!destinationX | !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.0075;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.0075;
                positionRef.current.show = true;

                if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.0075) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }

            if (show) {
                secondaryCursor.current.style.display = `block`;
                mainCursor.current.style.display = `block`;
            } else {
                secondaryCursor.current.style.display = `none`;
                mainCursor.current.style.display = `none`;
            }
            secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        }

        followMouse();
    }, []);

    React.useEffect(() => {
        const pointAtMouse = () => {
            positionRef.current.key = requestAnimationFrame(pointAtMouse);

            const {
                distanceX,
                distanceY,
            }
                = positionRef.current;

            if (positionRef.current.distanceX >= 0) {
                shark.current.style.transform = `rotate(${Math.atan(distanceY / distanceX)}rad) scaleX(-1)`;
            } else {
                shark.current.style.transform = `rotate(${Math.atan(distanceY / distanceX)}rad) scaleX(1)`;
            }




        }



        pointAtMouse();
    }, []);

    return (
        <div>
            <div className="main-cursor" ref={mainCursor}></div>
            <div className="secondary-cursor" ref={secondaryCursor}>
                <img src="shark.png" alt="shark" className="shark" ref={shark} />
            </div>
        </div>
    );
};