import { useEffect } from "react";
import ContactUs from "../ContactUs/ContactUs";
import Slider from "../Slider/Slider";
import AssociatedWith from "./AssociatedWith/AssociatedWith";
import "./Home.css"
import { imageChildrens } from "../data/HomeData";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import { useLocation } from "react-router-dom";
import Start from "./Start/Start";

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
    }, [location])

    return (<div className="home p-0 m-0" id="home">
        <Start />
        <Slider childs={imageChildrens} totalItems={3} />
        <WhatWeDo />
        <WhoWeAre />
        <AssociatedWith />
        <ContactUs />
    </div>)
}

export default Home;