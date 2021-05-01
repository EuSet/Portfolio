import React from "react"
import s from './Skills.module.css'
import c from '../styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return <div className={s.skills}>
        <div className={`${c.container} ${s.skillsContainer}`}>
            <div><h2>Skills</h2></div>
            <div className={s.skillList}>
                <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
            </div>
        </div>
    </div>
}