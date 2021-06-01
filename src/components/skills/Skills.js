import React from "react"
import s from './Skills.module.scss'
import c from '../styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/Title";
import redux from "./../../imges/redux.png"
import react from "./../../imges/react.png"
import typescript from "./../../imges/typescript.png"

export const Skills = () => {
    return <div className={s.skills}>
        <div className={`${c.container} ${s.skillsContainer}`}>
            <Title title={'My Skills'}/>
            <div className={s.skillList}>
                <Skill icon={react} title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill icon={redux} title={'Redux'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill icon={typescript} title={'Typescript'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
            </div>
        </div>
    </div>
}
