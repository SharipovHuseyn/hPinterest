import "./BannerUser.css"
import { FaAngleRight } from "react-icons/fa6";
import CirculProfile from "../CirculProfile/CirculProfile"

export default function BannerUser({children, lastLogin}){

    return (
        <div className="profil-data">
            <CirculProfile>{children}</CirculProfile>
            <div className="profil-name-lastLogin">
                <h4>{children}</h4>
                <p>{lastLogin}</p>
            </div>
            <FaAngleRight/>
        </div>
    )
}