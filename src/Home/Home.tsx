import Slider from "../Slider/Slider";
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
        className=" h-full ml-6 pointer-events-none"
        alt="NextUI Album Cover"
    />
})

function Home() {
    console.log(typeof (<></>))
    return (<>
        <Slider>
            {...imageChildrens}
        </Slider>
    </>)
}

export default Home;