"use client"
import React from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import "./Slider.css"
import StarIcon from '@mui/icons-material/Star';
import { rating } from "@/data/data"

const Slider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className="mb-14">
            <div ref={sliderRef} className="keen-slider">
                <h1 className='keen-slider__slide number-slide0
                text-amber-300 text-center'>CLIENTS LOVE THE CUTS</h1>
                {rating.map((ele, index) => (
                    <div className="keen-slider__slide number-slide1
                flex flex-col justify-center items-center md:px-16
                px-2 bg-black bg-opacity-50 gap-4 " key={index}>
                        <span className='flex flex-row text-amber-300' >
                            {Array.from({ length: ele.rating }).map((_, index) => (
                                <StarIcon key={index} />
                            ))}
                        </span>
                        <p className='text-sm lg:text-2xl opacity-75
                    text-white text-center mb-2'>{ele.text}</p>
                        <span className='text-white md:text-5xl
                    text-lg'>{ele.customer}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider;