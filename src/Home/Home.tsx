import { useEffect } from "react";
import ContactUs from "../ContactUs/ContactUs";
import Slider from "../Slider/Slider";
import AssociatedWith from "./AssociatedWith";
// import { motion } from "framer-motion"
import "./Home.css"
import { imageChildrens } from "./HomeData";
import UpcommingProjects from "./UpcommingProjects";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import { useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();

    useEffect(() => {
        console.log("in");
        const x = document.getElementById(location.hash.substring(1));
        if (x) {
            window.scrollTo({
                top: x.offsetTop,
                behavior: "smooth",
            });
        }
        // console.log(x, location.hash, location.hash.substring(1))
    }, [location])

    return (<div className="home" id="home">
        <Slider childs={imageChildrens} totalItems={3} />
        <WhatWeDo />
        <WhoWeAre />
        <AssociatedWith />
        <UpcommingProjects />
        <ContactUs />
    </div>)
}

export default Home;