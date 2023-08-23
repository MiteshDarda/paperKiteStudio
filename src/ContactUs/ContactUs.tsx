import { InstagramFilled, MailFilled, PhoneFilled } from "@ant-design/icons"
import { Link } from "@nextui-org/react"
import { motion } from "framer-motion"

function ContactUs() {
    return (
        <>
            <motion.div
                className="bg-black p-unit-12 w-screen h-screen flex flex-col justify-center"
                id="contact-us"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            // viewport={{ once: true }}
            >
                <div>
                    <Link isExternal href="https://www.instagram.com/studiopaperkites/?utm_medium=copy_link" color="foreground">
                        <InstagramFilled className=" md:text-3xl" />
                        <span className=" md:text-3xl"> &nbsp; &nbsp;
                            studiopaperkites
                        </span>
                    </Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <Link isExternal color="foreground" href="mailto:info@studiopaperkites.com">
                        <MailFilled className=" md:text-3xl" />
                        <span className=" md:text-3xl"> &nbsp; &nbsp;
                            info@studiopaperkites.com
                        </span>
                    </Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <Link isExternal color="foreground" href="tel:+91-8890733990">
                        <PhoneFilled className="md:text-3xl" />
                        <span className=" md:text-3xl"> &nbsp; &nbsp;
                            +91-8890733990
                        </span>
                    </Link>
                </div>
            </motion.div>
        </>
    )

}

export default ContactUs