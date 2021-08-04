import React, { useState, useEffect } from 'react';
import './style.scss';
import { BrowserRouter, Redirect } from "react-router-dom";
import ImgAvatar from '../../assets/img/avatar01.png';
import TypewriterEffect from '../../Components/TypewriterEffect/TypewriterEffect';
import NavBar from '../../Laypout/NavBar/NavBar';

const iconLotus = <svg id="Layer_1" enableBackground="new 0 0 512 512" height={512} viewBox="0 0 512 512" width={512} xmlns="http://www.w3.org/2000/svg"><path d="m507.606 371.054c-7.224-7.224-14.923-13.757-23.051-19.606-17.316 19.999-37.648 36.808-60.572 50.041-35.508 20.505-75.893 31.452-116.875 31.711 21.762 8.776 45.224 13.38 69.396 13.38 49.524 0 96.084-19.286 131.103-54.305 2.813-2.813 4.394-6.628 4.394-10.606-.001-3.978-1.582-7.801-4.395-10.615z" /><path d="m27.445 351.448c-8.128 5.85-15.827 12.383-23.051 19.606-2.813 2.814-4.394 6.637-4.394 10.615s1.581 7.793 4.394 10.606c35.019 35.019 81.579 54.305 131.103 54.305 24.172 0 47.634-4.604 69.396-13.38-40.985-.259-81.367-11.206-116.879-31.713-22.922-13.231-43.254-30.04-60.569-50.039z" /><path d="m103.015 375.508c24.937 14.4 53.928 24.056 84.837 26.854-53.409-29.561-82.274-70.602-95.861-94.135-14.942-25.878-25.041-53.917-30.063-83.421-14.921.64-29.775 2.868-44.227 6.709-6.6 1.576-11.507 7.517-11.507 14.599 0 1.312.172 2.618.512 3.885 15.32 57.142 52.726 100.35 96.309 125.509z" /><path d="m324.148 402.362c30.908-2.799 59.9-12.454 84.837-26.854 43.583-25.159 80.989-68.367 96.31-125.508.34-1.267.512-2.573.512-3.885 0-7.082-4.907-13.023-11.507-14.599-14.452-3.841-29.306-6.07-44.227-6.709-5.022 29.504-15.121 57.543-30.063 83.421-13.588 23.533-42.419 64.554-95.862 94.134z" /><path d="m187.301 366.948c-15.157-24.483-38.696-71.48-38.696-135.903 0-32.646 6.043-64.401 17.945-94.529-16.394-9.351-33.972-16.623-52.273-21.525-8.004-2.142-16.225 2.604-18.37 10.605-16.372 61.078-4.825 121.063 22.064 167.631 16.325 28.275 39.769 54.111 69.33 73.721z" /><path d="m324.684 366.957c29.568-19.611 53.017-45.451 69.344-73.73 26.889-46.569 38.436-106.553 22.064-167.631-2.145-8.001-10.366-12.748-18.37-10.605-18.304 4.902-35.883 12.176-52.279 21.529 11.9 30.126 17.943 61.88 17.943 94.525.001 64.478-23.58 111.488-38.702 135.912z" /><path d="m266.606 69.813c-2.813-2.813-6.637-4.394-10.615-4.394s-7.793 1.581-10.606 4.394c-39.289 39.289-66.78 96.005-66.78 161.231 0 65.256 27.522 121.974 66.78 161.231 2.813 2.813 6.637 4.394 10.615 4.394s7.793-1.581 10.606-4.394c39.248-39.247 66.78-95.96 66.78-161.231.001-65.256-27.511-121.964-66.78-161.231z" /></svg>

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [toMySkill, setToMySkill] = useState(false);
    const goMySkill = () => {
        setToMySkill(!toMySkill)
    }
    return (
        <>
            {toMySkill ? <Redirect to={"my-skill"} /> : ""}
            <div className="pageHome">
                <NavBar check={"home"}/>
                <div className="homeRight">
                    <div className="homeRight--avatar">
                        <img src={ImgAvatar} alt="avatar" />
                    </div>
                </div>
                <div className="homeLeft">
                    <div className="homeLeft--iconHello">Hello</div>
                    <h1>I'M <span>THU HA DO</span></h1>
                    <div><TypewriterEffect /></div>
                    <div>
                        <p className="homeLeft--caption">With over 5+ years of job experience. I studied Information Technology at University and later honed my skills through commercial and freelance experience. My skills include PHP, Laravel, jQuery, database design, JavaScript and MySQL.</p>
                    </div>
                    <div>
                        <button className="homeLeft--button" onClick={() => goMySkill()}>
                            <span>{iconLotus}</span>
                            <p>THU HA DO</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
