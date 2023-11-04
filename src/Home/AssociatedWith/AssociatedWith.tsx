import i1 from "./Logos/1.jpg"
import i2 from "./Logos/2.jpg"
import i3 from "./Logos/3.jpg"
import i4 from "./Logos/4.jpg"
import i5 from "./Logos/5.jpg"
import i6 from "./Logos/6.jpg"
import i7 from "./Logos/7.jpg"
import i8 from "./Logos/8.jpg"
import i9 from "./Logos/9.jpg"
import i10 from "./Logos/10.jpg"
import i11 from "./Logos/11.jpg"
import i12 from "./Logos/12.jpg"
import i13 from "./Logos/13.jpg"
import { motion } from "framer-motion"
import "./AssociatedWith.css"

const logos = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13];

const images = <div className="logos-slide">
    {
        logos.map(
            (logo, i) =>
                <img key={i} className="h-[60px] m-36" src={logo} />
        )
    }
    {/* <img className="h-[60px]" src={one} />
    <img className="h-[60px]" src={two} />
    <img className="h-[60px]" src={three} />
    <img className="h-[60px]" src={four} />
    <img className="h-[60px]" src={five} /> */}
</div>

const AssociatedWith = () => {

    return (
        <motion.div
            className="min-h-[50vh] flex flex-col justify-around bg-[rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
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
            </motion.div>
        </motion.div>
    )

}

export default AssociatedWith;