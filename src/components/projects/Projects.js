import React from "react"
import p from './Projects.module.scss'
import c from './../styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../../common/Title";
import socialNetwork from "./../../imges/socialNetwork.jpg"
import todolist from "./../../imges/todolist.jpg"

export const Projects = () => {
    const socNetwork = {
        backgroundImage: `url(${socialNetwork})`,
    }
    const toDoList = {
        backgroundImage: `url(${todolist})`,
    }
    return <div className={p.projects}>
        <div className={`${c.container} ${p.projectsContainer}`}>
            <Title title={'My Projects'}/>
            <div className={p.projectList}>
                <Project style={socNetwork} title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}/>
                <Project style={toDoList} title={'To Do List'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}/>

            </div>
        </div>
    </div>
}
