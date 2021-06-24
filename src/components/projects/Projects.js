import React from "react"
import p from './Projects.module.scss'
import c from './../styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../../common/Title";
import socialNetwork from "./../../imges/socialNetwork.jpg"
import todolist from "./../../imges/todolist.jpg"
import cardgame from "./../../imges/cardGame.jpg"
import reactNativeLogo from "./../../imges/react-native-logo.jpg"
export const Projects = () => {
    const socNetwork = {
        backgroundImage: `url(${socialNetwork})`,
    }
    const toDoList = {
        backgroundImage: `url(${todolist})`,
    }
    const cardGame = {
        backgroundImage: `url(${cardgame})`,
    }
    const reactNative = {
        backgroundImage: `url(${reactNativeLogo})`,
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
                    'Technologies: TypeScript, redux-thunk, HOC, hooks, some class components, axios, storybook, redux-form'}/>
                <Project
                    style={toDoList}
                    href={'https://euset.github.io/ToDoList/'}
                    title={'To Do List'}
                    description={'Libraries: React, Redux.' +
                    ' Technologies: TypeScript, hooks, redux-thunk, axios, unit-tests, storybook, material-ui, formik'}/>
                <Project
                    style={cardGame}
                    href={'https://euset.github.io/cardGame/'}
                    title={'Card Game'}
                    description={'Libraries: React, Redux.' +
                    ' Technologies: TypeScript, hooks, redux-thunk, axios, unit-tests, material-ui, formik, firebase'}/>
                <Project
                    style={reactNative}
                    href={'https://github.com/EuSet/iToDoList_ReactNative'}
                    title={'React Native To Do'}
                    description={'Libraries: React Native.' +
                    ' Technologies: TypeScript, hooks, fetch, firebase'}/>
            </div>
        </div>
    </div>
}
