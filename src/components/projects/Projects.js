import React from "react"
import p from './Projects.module.css'
import c from './../styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return <div className={p.projects}>
        <div className={`${c.container} ${p.projectsContainer}`}>
            <div><h2>My Projects</h2></div>
            <div className={p.projectList}>
                <Project title={'Project'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}/>
                <Project title={'Project'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}/>

            </div>
        </div>
    </div>
}