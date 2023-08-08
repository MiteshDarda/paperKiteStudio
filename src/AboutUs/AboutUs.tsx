import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"

function AboutUs() {

    const whoWeAre = [
        {
            img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            name: "name",
            designation: "PGDM Retail DesiĀn & MBA Retail ManaĀement",
            keyrole: "keyrole",
            workedWith: "safdaf"
        },
        {
            img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            name: "name 2 ",
            designation: "PGDM Retail DesiĀn & MBA Retail ManaĀement",
            keyrole: "keyrole",
            workedWith: "safdaf"
        },
        {
            img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            name: "name 3",
            designation: "PGDM Retail DesiĀn & MBA Retail ManaĀement",
            keyrole: "keyrole",
            workedWith: "safdaf"
        },
    ]

    const howWeDo = [
        { topic: "Topic1", points: ["one", "two", "three", "four"] },
        { topic: "Topic2", points: ["one", "two", "three", "four"] },
        { topic: "Topic3", points: ["one", "two", "three", "four"] },
        { topic: "Topic4", points: ["one", "two", "three", "four"] },
    ];

    return (
        <>
            <div className="w-11/12">
                <Card className="p-unit-12 min-h-[80vh] flex flex-col justify-center">
                    <h1 className="text-3xl mb-12">
                        What We Do ?
                    </h1>
                    <div className="flex justify-center">
                        We are a multi-disciplinary spatial desiĀn firm that works across architecture,
                        retail, interiors, ÿurniture & landscapinĀ.
                        We desiĀn Solutions - A complete end - to - end process which includes - detailinĀ
                        out the brieÿ, developinĀ a desiĀn concept & strateĀy, space planninĀ, 3D
                        renders, GFC drawinĀs, site execution and VM..
                    </div>
                    <br /> <br />
                    <div>
                        All our desiĀns are “user centric”. We ÿocus on creatinĀ spaces that are ÿunctional,
                        operational and aesthetically - contemporary, involvinĀ a pinch oÿ quirk, thouĀht
                        provokinĀ elements that enĀaĀe customers. Our attention to details is what
                        makes our work a notch above the rest.

                        We intricately handle every component oÿ the desiĀn process
                        ÿrom conception to execution makinĀ us a complete desiĀn and build firm.

                        Our past experiences have led us deep rooted in understandinĀ Client’s
                        requirements in detail and provide desiĀn as solution with optimum use oÿ space.
                    </div>
                </Card >
                <br /> <br />
                <Card shadow="sm" className=" p-unit-12 mb-12 min-h-[80vh] flex flex-col justify-center">
                    <h1 className="text-3xl mb-12">
                        Who We Are
                    </h1>
                    <div className="flex justify-around flex-wrap">
                        {whoWeAre.map((data) =>
                            <Card className="py-4" shadow="lg">
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        isZoomed
                                        isBlurred
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                        width={270}
                                    />
                                </CardBody>
                                <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
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
                                </CardFooter>
                            </Card>
                        )}
                    </div>
                </Card>
                <Card shadow="sm" className="p-unit-12 min-h-[80vh] flex flex-col justify-center">
                    <h1 className="text-3xl mb-12">
                        How we do ?
                    </h1>
                    <div className="flex justify-around flex-wrap">

                        {howWeDo.map((data) => <Card className=" p-8" shadow="lg">
                            <h1 className="text-xl mb-12">
                                {data.topic}
                            </h1>
                            <ul>

                                {data.points.map(point => <li>{point}</li>)}
                            </ul>
                        </Card>)}
                    </div>
                </Card>
            </div>
        </>
    )
}

export default AboutUs