import one from "./Logos/1.png"
import two from "./Logos/2.png"
import three from "./Logos/3.png"
import four from "./Logos/4.png"
import five from "./Logos/5.png"
import { motion } from "framer-motion"
import "./AssociatedWith.css"

const images = <div className="logos-slide">
    <img className="h-[60px]" src={one} />
    <img className="h-[60px]" src={two} />
    <img className="h-[60px]" src={three} />
    <img className="h-[60px]" src={four} />
    <img className="h-[60px]" src={five} />
</div>

const AssociatedWith = () => {

    return (
        <motion.div
            className="min-h-[50vh] flex flex-col justify-around bg-[rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        // viewport={{ once: true }}
        >
            <motion.h1 className=" text-5xl mt-10">Associated With</motion.h1>
            <motion.div
                className="logos"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {images}
                {images}
                {images}
                {images}
            </motion.div>
        </motion.div>
    )

}

export default AssociatedWith;