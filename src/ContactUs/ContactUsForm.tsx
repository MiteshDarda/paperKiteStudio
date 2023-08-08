import { Button, Input, Textarea } from "@nextui-org/react";

function ContactUsForm() {
    return <>
        <form className="flex flex-col justify-center w-full items-center" onSubmit={(event) => { event.preventDefault(); console.log(event.target) }}>
            <Input type="text" variant={"bordered"} label="Name" className=" mb-6 w-64" isClearable={true} />
            <Input type="email" variant={"bordered"} label="Email" className=" mb-6 w-64" isClearable={true} isRequired={true} />
            <Textarea
                className="mb-6 w-64"
                variant={"bordered"}
                label="Message"
                labelPlacement="inside"
            />
            <Button color="default" type="submit">
                Submit
            </Button>
        </form></>
}
export default ContactUsForm;