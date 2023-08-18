import { motion } from "framer-motion"


const images: string[] = [
    "https://images.pexels.com/photos/15272405/pexels-photo-15272405/free-photo-of-aerial-photo-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15272405/pexels-photo-15272405/free-photo-of-aerial-photo-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15272405/pexels-photo-15272405/free-photo-of-aerial-photo-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15272405/pexels-photo-15272405/free-photo-of-aerial-photo-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15272405/pexels-photo-15272405/free-photo-of-aerial-photo-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15272405/pexels-photo-15272405/free-photo-of-aerial-photo-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]

const imageChildrens = images.map((image, k) => {
    return <motion.img
        key={k}
        src={image}
        className=" h-full m-3 pointer-events-none transition-all duration-100"
        alt="NextUI Album Cover"
    />
})

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

export { whoWeAre, imageChildrens }