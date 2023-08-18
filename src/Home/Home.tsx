import ContactUs from "../ContactUs/ContactUs";
import Slider from "../Slider/Slider";
import AssociatedWith from "./AssociatedWith";
// import { motion } from "framer-motion"
import "./Home.css"
import { imageChildrens } from "./HomeData";
import UpcommingProjects from "./UpcommingProjects";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";

function Home() {

    return (<div className="home">
        <Slider childs={imageChildrens} totalItems={3} />
        <WhatWeDo />
        <WhoWeAre />
        <AssociatedWith />
        <UpcommingProjects />
        <div className=" flex justify-center">

            <ContactUs />
        </div>
    </div>)
}

export default Home;