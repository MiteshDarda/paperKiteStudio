import one from "./Logos/1.png"
import two from "./Logos/2.png"
import three from "./Logos/3.png"
import four from "./Logos/4.png"
import five from "./Logos/5.png"
import { motion } from "framer-motion"
import "./AssociatedWith.css"

const images = <div className="logos-slide">
    <img src={one} />
    <img src={two} />
    <img src={three} />
    <img src={four} />
    <img src={five} />
</div>

const AssociatedWith = () => {

    return (
        <div className="min-h-[50vh] flex flex-col justify-center bg-[rgba(0,0,0,0.4)]">
            <motion.h1 className=" text-5xl mt-10">Associated With</motion.h1>
            <div className="logos">
                {images}
                {images}
                {images}
                {images}
                {images}
            </div>
        </div>
    )

}

export default AssociatedWith;