import { Tab, Tabs } from "@nextui-org/react";
import projects from "../projectData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import "./Projects.css"

function Projects() {

    return <>
        <div className="flex w-screen flex-col p-6 justify-center items-center">
            {/* For All Projects */}
            <Tabs aria-label="Options" className="w-screen max-w-max tabs" variant="underlined">
                <Tab title={"All"} >
                    <div className="flex justify-around items-center flex-wrap">
                        {projects.map((project, categoryIndex) => project.data.map((data, index) => {
                            return (
                                <Link key={categoryIndex * 100 + index} to={`/Projects/${categoryIndex}/${index}`} className="lg:w-3/12 md:w-4/12">
                                    <motion.div className="p-10 m-3 project-tile">
                                        <motion.img src={data.images[0]} />
                                        <motion.h1 className=" text-3xl m-6">{data.title} {index}</motion.h1>
                                        <motion.h2>{data.details} {project.category} {categoryIndex}</motion.h2>
                                    </motion.div>
                                </Link>
                            )
                        }))}
                    </div>
                </Tab>

                {/* For Individual Projects */}
                {projects.map(
                    (project, categoryIndex) =>
                        <Tab title={project.category} className=" flex justify-around items-center flex-wrap" key={categoryIndex}>
                            {project.data.map((data, index) => {
                                return (
                                    <Link to={`/Projects/${categoryIndex}/${index}`} className="lg:w-3/12 md:w-4/12" key={index}>
                                        <motion.div className="p-10 m-3 project-tile">
                                            < motion.img src={data.images[0]} />
                                            <motion.h1 className=" text-3xl m-6">{data.title} {index}</motion.h1>
                                            <motion.h2>{data.details} {project.category} {categoryIndex}</motion.h2>
                                        </motion.div>
                                    </Link>
                                )
                            })}
                        </Tab>
                )}
            </Tabs >
        </div >
    </>
}

export default Projects