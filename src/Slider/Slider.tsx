
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react";
import "./Slider.css"

const Slider = (props: { childs: ReactNode[], interval?: number, totalItems?: number }) => {
    const carousel = useRef<HTMLInputElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(carousel.current?.clientWidth)


    props;

    useEffect(() => {
        setCarouselWidth(carousel.current?.clientWidth)
    }, [])


    const goNext = async () => {
        await carousel.current?.scrollBy({
            left: carouselWidth,
        })
    }

    const goPrev = () => {
        carousel.current?.scrollBy({
            left: -Number(carouselWidth),
        })
    }

    return (
        <motion.div ref={carousel} className=" w-screen carousel p-6 min-h-screen flex items-center scroll-smooth overflow-auto static grow">
            <CaretRightOutlined onClick={goNext} className="carousel-button absolute top-25 right-10 z-10" />
            <CaretLeftOutlined onClick={goPrev} className="carousel-button absolute top-25 left-10 z-10" />
            {
                props.childs
            }
        </motion.div>
    )
}

export default Slider;