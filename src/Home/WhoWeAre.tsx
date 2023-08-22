import { motion } from "framer-motion"
import { whoWeAre } from "./HomeData";

const WhoWeAre = () => {
    return (
        <motion.div
            className=" p-unit-12 min-h-screen flex flex-col justify-center bg-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        // viewport={{ once: true }}
        >
            <motion.h1 className="text-3xl mb-12">
                Who We Are ?
            </motion.h1>
            <motion.div className="flex justify-around flex-wrap">
                {whoWeAre.map((data, k) =>
                    <motion.div className="py-4" key={k}>
                        <motion.div className="overflow-visible py-2">
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                width={360}
                            />
                        </motion.div>
                        <motion.div className="pb-0 pt-2 px-4 flex-col items-start">
                            <h4 className="font-bold text-large">{data.name}</h4>
                            <br />
                            <h4 className="font-bold text-large">Designation</h4>
                            <p className="text-tiny uppercase font-bold">{data.designation}</p>
                            <br />
                            <h4 className="font-bold text-large">Keyrole</h4>
                            <p className="text-tiny uppercase font-bold">{data.keyrole}</p>
                            <br />
                            <h4 className="font-bold text-large">Worked With</h4>
                            <p className="text-tiny uppercase font-bold">{data.workedWith}</p>
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    )
}

export default WhoWeAre;