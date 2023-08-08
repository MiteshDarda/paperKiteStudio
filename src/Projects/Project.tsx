import { Link, useNavigate, useParams } from "react-router-dom";
import projects from "../projectData";
import { Button, Card, Image } from "@nextui-org/react";
import { RollbackOutlined, StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons";

function Project() {
    const params = useParams();
    const navigate = useNavigate();
    const category = params.category;
    const id = params.id
    const data = projects[category].data[id];

    const isPriviousAvailable = () => {
        return (id === '0' && category === '0' ? false : true);
    }

    const isNextAvailable = () => {
        return (Number(category) + 1 === projects.length && Number(id) + 1 === projects[category].data.length ? false : true)
    }

    const nextPage = () => {
        const newId = Number(id) + 1;
        if (newId === projects[Number(category)].data.length) {
            navigate(`/Projects/${Number(category) + 1}/0`);
        }
        else {
            navigate(`/Projects/${Number(category)}/${newId}`);
        }
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
    }
    return (
        <Card className=" p-12 mb-12 w-11/12 min-h-[80vh] flex flex-col justify-center">
            <div className=" flex w-11/12">
                <Link to={"/Projects"}>
                    <Button variant="bordered" color="secondary" endContent={<RollbackOutlined />}>
                        BACK
                    </Button>
                </Link>
            </div>
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
            <div className=" flex flex-wrap justify-center items-center">
                {data.images.map((image: string) => {
                    return <Image src={image} className=" m-12 w-11/12" />
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
        </Card>
    )
}

export default Project;