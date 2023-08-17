import { Card, Image, Tab, Tabs } from "@nextui-org/react";
import projects from "../projectData";
import { Link } from "react-router-dom";

function Projects() {

    return <>
        <div className="flex w-screen flex-col p-6 justify-center items-center">

            <Tabs aria-label="Options" className="w-screen max-w-max tabs" variant="solid">
                <Tab title={"All"} >
                    <div className=" flex justify-around items-center flex-wrap">

                        {projects.map((project, categoryIndex) => project.data.map((data, index) => {
                            return (
                                <Link to={`/Projects/${categoryIndex}/${index}`}>
                                    <Card className="p-10">
                                        <Image width={360} src={data.images[0]} isZoomed />
                                        <h1 className=" text-3xl m-6">{data.title} {index}</h1>
                                        <h2>{data.details} {project.category} {categoryIndex}</h2>
                                    </Card>
                                </Link>
                            )
                        }))}
                    </div>
                </Tab>
                {projects.map(
                    (project, categoryIndex) =>
                        <Tab title={project.category} className=" flex justify-around items-center flex-wrap">
                            {project.data.map((data, index) => {
                                return (
                                    <Link to={`/Projects/${categoryIndex}/${index}`}>
                                        <Card className="p-10 m-3">
                                            <Image width={360} src={data.images[0]} isZoomed />
                                            <h1 className=" text-3xl m-6">{data.title} {index}</h1>
                                            <h2>{data.details} {project.category} {categoryIndex}</h2>
                                        </Card>
                                    </Link>
                                )
                            })}
                        </Tab>
                )}
            </Tabs>
        </div>
    </>
}

export default Projects