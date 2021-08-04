import React, { useState } from 'react';
import './style.scss';
import { BrowserRouter, Redirect } from "react-router-dom";
interface PropsType{
    check: string;
}
function NavBar({check}:PropsType) {
    // ======================== redirect =======================================
    const [isPage, setIsPage] = useState("");
    const getRedirect = (num: number) => {
        switch (num) {
            case 1:
                setIsPage("/home");
                break;
            case 2:
                setIsPage("/my-skill");
                break;
            case 3:
                setIsPage("/my-blog");
                break;
            case 4:
                setIsPage("/my-contact");
                break;
            default:
                break;
        }
    }
    // =========================== end redirect ================================
    // ===================== click show navbar ==============================
    const [clickNavBar, setClickNavBar] = useState(false);
    const showNavBar = () => {
        setClickNavBar(!clickNavBar)
    }
    // ===================== end click show navbar ==============================
    // ========================= render =======================================
    return (
        <>
            {isPage !== "" ? <Redirect to={isPage} /> : ""}
            <div className="navBar">
                <div className="navBar__main">
                    <div className="navBar__main--mobile">mobile</div>
                    <div className={clickNavBar == false ? "navBar__main--desktop hidden" : "navBar__main--desktop"}>
                        <ul>
                            <li onClick={() => getRedirect(1)} className={check === "home" ? "sitHere" : ""}>Home</li>
                            <li onClick={() => getRedirect(2)} className={check === "my-skill" ? "sitHere" : ""}>My Skill</li>
                            <li onClick={() => getRedirect(3)} className={check === "my-blog" ? "sitHere" : ""}>My Blog</li>
                            <li onClick={() => getRedirect(4)} className={check === "my-contact" ? "sitHere" : ""}>My Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="navBar__icon" onClick={() => showNavBar()}>
                    <span>{clickNavBar === true ? <i className="fas fa-cloud-sun"></i> : <i className="fas fa-cloud"></i>}</span>
                </div>
            </div>
        </>
    )
}

export default NavBar
