import React, { useEffect, useRef, useState } from "react";
import "../HomePage.css";

function Roadmap() {
    const [total, setTotal] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const activeIndex = useRef(2); // Default active index set to 2 (Q3 - 2021)

    useEffect(() => {
        const $slider = document.getElementById("slider");
        const $slides = document.querySelectorAll(".slide");

        const on = () => {
            setSliderWidth($slider.offsetWidth);
            setTotal($slides.length);
            position();
        };

        const position = () => {
            console.log(window.screen.width)
            const half = activeIndex.current;
            let x, zindex,
                scaleX, scaleY, scaleZ, z = 0, transformOrigin;
            let increment = 0;
            let multiplier = 120;
            if (window.screen.width <= 850) {
                multiplier = 90;
            }

            $slides.forEach((element, index) => {
                transformOrigin = sliderWidth / 2;
                scaleX = scaleY = scaleZ = 1;
                if (window.screen.width <= 1536) {
                    scaleX = scaleY = scaleZ = 0.9
                }
                if (window.screen.width <= 1200) {
                    scaleX = scaleY = scaleZ = 0.8
                }

                if (window.screen.width <= 820) {
                    scaleX = scaleY = scaleZ = 0.7
                    increment = 60
                }

                if (index < half) {
                    zindex = index + 1;
                    x = sliderWidth / 2 - multiplier * (half - index + 1);
                    z = -120 * (half - index + 1);
                } else if (index > half) {
                    zindex = total - index;
                    x = sliderWidth / 2 + multiplier * (index - half + 1);
                    z = -120 * (index - half + 1);
                } else {
                    zindex = total;
                    x = sliderWidth / 2;
                    z = 1;
                    scaleX = scaleY = 1.2;
                    transformOrigin = "initial";

                    if (window.screen.width <= 1536) {
                        scaleX = scaleY = scaleZ = 1.1
                    }
                    if (window.screen.width <= 1200) {
                        scaleX = scaleY = scaleZ = 0.9
                    }
                    if (window.screen.width <= 820) {
                        scaleX = scaleY = scaleZ = 0.8
                    }
                }
                const translateX = calculateX(x, 1, 400);
                element.style.transform = `translate3d(${translateX + increment}px, 0,${z}px) scale3d(${scaleX}, ${scaleY}, ${scaleZ})`;
                element.style.zIndex = zindex;
                element.style.transformOriginX = transformOrigin;
            });
        };

        const calculateX = (position, sign, width) => {
            switch (sign) {
                case 1:
                case 0:
                    return position - width / 2;
                case -1:
                    return position - width / 2;
                default:
                    return position;
            }
        };

        const recalculateSizes = () => {
            setSliderWidth($slider.offsetWidth);
            position();
        };

        const clickedImage = (index) => {
            activeIndex.current = index;
            position();
        };

        const addEvents = () => {
            window.addEventListener("resize", recalculateSizes);
            $slides.forEach((slide, index) => {
                slide.addEventListener("click", () => clickedImage(index));
            });
        };

        on();
        addEvents();

        return () => {
            window.removeEventListener("resize", recalculateSizes);
            $slides.forEach((slide, index) => {
                slide.removeEventListener("click", () => clickedImage(index));
            });
        };
    }, [activeIndex.current, sliderWidth, total]);


    return (
        <div className="container missions-container">

            <div className="row mt-5">
                <h1 className="main-title">Mission statements</h1>
                <div className="slider " id="slider">
                    <div class="slide ">
                        <div class="slide-container">
                            <h2 class="slide-title">Q1 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="slide ">
                        <div class="slide-container">
                            <h2 class="slide-title">Q2 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="slide active">
                        <div class="slide-container">
                            <h2 class="slide-title">Q3 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="slide ">
                        <div class="slide-container">
                            <h2 class="slide-title">Q4 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide ">
                        <div class="slide-container">
                            <h2 class="slide-title">Q5 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide ">
                        <div class="slide-container">
                            <h2 class="slide-title">Q5 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide ">
                        <div class="slide-container">
                            <h2 class="slide-title">Q5 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide ">
                        <div class="slide-container">
                            <h2 class="slide-title">Q5 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="slide ">
                        <div class="slide-container">
                            <h2 class="slide-title">Q5 - 2021</h2>
                            <div class="slide-description">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Nunc blandit justo ac dolor lobortis suscipit. </li>
                                    <li>Et tincidunt lectus porta sit amet. </li>
                                    <li>Nulla dignissim ligula nec faucibus feugiat. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Roadmap;
