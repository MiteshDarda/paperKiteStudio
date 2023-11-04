import { motion } from "framer-motion"
import whatWeDo from "../../data/whatWeDo";

const WhatWeDo = () => {
    return (<>
        <motion.div
            className="p-unit-12 min-h-screen flex flex-col justify-center bg-[rgba(0,0,0,0.8)]"
            id="about-us"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
        // viewport={{ once: true }}
        >
            <h1 className="text-3xl mb-12">
                What We Do ?
            </h1>
            <div className="flex justify-center">
                {whatWeDo}
            </div>
        </motion.div >
    </>)
}

export default WhatWeDo;