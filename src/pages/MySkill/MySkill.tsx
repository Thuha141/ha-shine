import CardPercent from '../../Components/CardPercent/CardPercent';
import ProgressExperince from '../../Components/CardPercent/ProgressExperince';
import ProgressPercent from '../../Components/CardPercent/ProgressPercent';
import NavBar from '../../Laypout/NavBar/NavBar';
import React, { useEffect } from 'react';
import './style.scss';

function MySkill() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // ================================== info ============================
    const arrCardPercent = [
        {
            id: 1,
            title: 'coding skills',
            param: [
                {
                    id: "param101",
                    name: 'html',
                    percent: '80%'
                },
                {
                    id: "param102",
                    name: 'css',
                    percent: '90%'
                },
                {
                    id: "param103",
                    name: 'js',
                    percent: '70%'
                },
                {
                    id: "param104",
                    name: 'reactjs',
                    percent: '60%'
                },
            ]
        },
        {
            id: 2,
            title: 'language skills',
            param: [
                {
                    id: "param201",
                    name: 'english',
                    percent: '80%'
                },
                {
                    id: "param202",
                    name: 'vienam',
                    percent: '90%'
                },
                {
                    id: "param203",
                    name: 'spanish',
                    percent: '70%'
                },
            ]
        }
    ];

    const arrCardExperince = [
        {
            id: 101,
            title: 'education',
            param: [
                {
                    id: 1011,
                    title: 'UNIVERSITY OF THE INCARNATE WORD',
                    time: '2019 - Present',
                    level: 'BSC IN CSS',
                    caption: 'The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia.'
                },
                {
                    id: 1012,
                    title: 'UNIVERSITY OF THE INCARNATE WORD',
                    time: '2019 - Present',
                    level: 'BSC IN CSS',
                    caption: 'The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia.'
                },
                {
                    id: 1013,
                    title: 'UNIVERSITY OF THE INCARNATE WORD',
                    time: '2019 - Present',
                    level: 'BSC IN CSS',
                    caption: 'The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia.'
                },

            ]
        },
        {
            id: 102,
            title: 'experince',
            param: [
                {
                    id: 1021,
                    title: 'UNIVERSITY OF THE INCARNATE WORD',
                    time: '2019 - Present',
                    level: 'BSC IN CSS',
                    caption: 'The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia.'
                },
                {
                    id: 1022,
                    title: 'UNIVERSITY OF THE INCARNATE WORD',
                    time: '2019 - Present',
                    level: 'BSC IN CSS',
                    caption: 'The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia.'
                },
                {
                    id: 1023,
                    title: 'UNIVERSITY OF THE INCARNATE WORD',
                    time: '2019 - Present',
                    level: 'BSC IN CSS',
                    caption: 'The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia.'
                },

            ]
        },
    ]

    // ================================== end info ============================
    return (
        <>
            <div className="mySkill">
                <NavBar check={"my-skill"}/>
                <div className="mySkill--title">
                    <h1>My <span>Skills</span></h1>
                </div>
                <div className="mySkill--container">
                    <div className="mySkill--container--percent">
                        {arrCardPercent.map((arr) => <CardPercent title={arr.title} key={arr.id} children={<ProgressPercent param={arr.param} />} />)}
                    </div>
                    <div className="mySkill--container--experince">
                        {arrCardExperince.map((arr) => <CardPercent title={arr.title} key={arr.id} children={<ProgressExperince param={arr.param} />} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MySkill
