import logoTest from "/logoText.png"
import logo from "../images/LOGO.png"

const Start = () => {

    return (
        <div className=" h-screen flex justify-center items-center">
            <div className="flex flex-col">
                <img src={logo}></img>
                <br />
                <br />
                <img src={logoTest}></img>
            </div>
        </div >
    )

}

export default Start;