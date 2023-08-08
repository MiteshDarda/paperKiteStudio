import { InstagramFilled, MailFilled, PhoneFilled } from "@ant-design/icons"
import { Card, Link } from "@nextui-org/react"

function ContactUs() {
    return (
        <>
            <Card shadow="sm" className="p-unit-12 mb-12 w-11/12 min-h-[80vh] flex flex-col justify-center">
                <div>
                    <Link isExternal href="https://www.instagram.com/studiopaperkites/?utm_medium=copy_link" color="foreground">
                        <InstagramFilled className=" text-3xl" />
                        <span className=" text-3xl"> &nbsp; &nbsp;
                            studiopaperkites
                        </span>
                    </Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <Link isExternal color="foreground" href="mailto:info@studiopaperkites.com">
                        <MailFilled className=" text-3xl" />
                        <span className=" text-3xl"> &nbsp; &nbsp;
                            info@studiopaperkites.com
                        </span>
                    </Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <Link isExternal color="foreground" href="tel:+91-8890733990">
                        <PhoneFilled className="text-3xl" />
                        <span className=" text-3xl"> &nbsp; &nbsp;
                            +91-8890733990
                        </span>
                    </Link>
                </div>
            </Card >
        </>
    )

}

export default ContactUs