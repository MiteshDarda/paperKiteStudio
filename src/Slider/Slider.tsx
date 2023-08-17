
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react";
import "./Slider.css"

const Slider = (props: { children: ReactNode }) => {
    const carousel = useRef<HTMLInputElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(carousel.current?.clientWidth)

    useEffect(() => {
        setCarouselWidth(carousel.current?.clientWidth)
    }, [])

    const goNext = () => {
        carousel.current?.scrollBy({
            left: carouselWidth,
        })
    }

    const goPrev = () => {
        carousel.current?.scrollBy({
            left: -Number(carouselWidth),
        })
    }

    return (
        <motion.div ref={carousel} className=" w-screen carousel p-6 h-[40vh] flex items-center scroll-smooth overflow-auto static">
            <CaretRightOutlined onClick={goNext} className="carousel-button absolute top-50 right-10 z-10" />
            <CaretLeftOutlined onClick={goPrev} className="carousel-button absolute top-50 left-10 z-10" />
            {
                props.children
            }
        </motion.div>
    )
}

export default Slider;