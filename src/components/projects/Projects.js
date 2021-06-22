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
    return <div id={'Projects'} className={p.projects}>
        <div className={`${c.container} ${p.projectsContainer}`}>
            <Title title={'My Projects'}/>
            <div className={p.projectList}>
                <Project
                    style={socNetwork}
                    href={'https://euset.github.io/Social_Network/'}
                    title={'Social Network'}
                    description={'Libraries: React, Redux. ' +
                    'Technologies: TypeScript, function \'connect\', thunk, HOC, hooks, some class components, axios, storybook, redux-form'}/>
                <Project
                    style={toDoList}
                    href={'https://euset.github.io/ToDoList/'}
                    title={'To Do List'}
                    description={'Libraries: React, Redux.' +
                    ' Technologies: TypeScript, hooks, thunk, axios, unit-tests, storybook, material-ui, formik'}/>

            </div>
        </div>
    </div>
}
