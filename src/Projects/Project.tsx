import { Link, useNavigate, useParams } from "react-router-dom";
import projects from "../projectData";
import { motion } from "framer-motion"
import { Button } from "@nextui-org/react";
import { RollbackOutlined, StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons";

function Project() {
    const params = useParams();
    const navigate = useNavigate();
    const category = params.category;
    const id = params.id
    const data = projects[Number(category)].data[Number(id)];

    const isPriviousAvailable = () => {
        return (id === '0' && category === '0' ? false : true);
    }

    const isNextAvailable = () => {
        return (Number(category) + 1 === projects.length && Number(id) + 1 === projects[Number(category)].data.length ? false : true)
    }

    const nextPage = () => {
        const newId = Number(id) + 1;
        if (newId === projects[Number(category)].data.length) {
            navigate(`/Projects/${Number(category) + 1}/0`);
        }
        else {
            navigate(`/Projects/${Number(category)}/${newId}`);
        }
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
        });
    }
    const previousPage = () => {
        let data = [];
        let length = 1;
        if (category !== '0') {
            data = projects[Number(category) - 1].data;
            length = data.length;
        }
        navigate(
            id === '0' ?
                `/Projects/${Number(category) - 1}/${length - 1}` :
                `/Projects/${category}/${Number(id) - 1}`
        );
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
        });
    }
    return (
        <motion.div
            className=" p-12 mb-12 w-11/12 min-h-[80vh] flex flex-col justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            <div className=" flex w-11/12">
                <Link to={"/Projects"}>
                    <Button variant="bordered" color="secondary" endContent={<RollbackOutlined />}>
                        BACK
                    </Button>
                </Link>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-end pr-12"
            >
                <br></br>
                <br></br>
                <h1 className=" text-5xl">{data.title}</h1>
                <br></br>
                <p>{data.info}</p>
                <br></br>
                <h2 className=" text-2xl"><b>CLIENT : </b> {data.client}</h2>
                <br></br>
                <h2 className=" text-2xl"><b>PROJECTS DETAILS : </b>{data.details}</h2>
                <br></br>
                <h2 className=" text-2xl"><b>PHOTOGRAPH : </b>{data.photographer}</h2>
                <br></br>
            </motion.div>
            <div className=" flex flex-wrap justify-center items-center">
                {data.images.map((image: string) => {
                    return <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        src={image}
                        className=" m-12 w-11/12"
                    />
                })}
            </div>
            <div className=" flex justify-between">
                <Button isDisabled={!isPriviousAvailable()} variant="bordered" onClick={previousPage} color="secondary" endContent={<StepBackwardOutlined />}>
                    Previous
                </Button>
                <Button isDisabled={!isNextAvailable()} onClick={nextPage} variant="bordered" color="secondary" endContent={<StepForwardOutlined />}>
                    Next
                </Button>
            </div>
        </motion.div>
    )
}

export default Project;