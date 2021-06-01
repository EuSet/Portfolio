import React from "react"
import s from './Skills.module.scss'
import c from '../styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/Title";
import redux from "./../../imges/redux.png"
import react from "./../../imges/react.png"
import typescript from "./../../imges/typescript.png"
import javascript from "./../../imges/javascript.png"
import css from "./../../imges/css.png"
import html from "./../../imges/html.png"

export const Skills = () => {
    return <div className={s.skills}>
        <div className={`${c.container} ${s.skillsContainer}`}>
            <Title title={'My Skills'}/>
            <div className={s.skillList}>
                <Skill icon={react} title={'React'}/>
                <Skill icon={redux} title={'Redux'}/>
                <Skill icon={javascript} title={'Javascript'}/>
                <Skill icon={typescript} title={'Typescript'}/>
                <Skill icon={css} title={'CSS'}/>
                <Skill icon={html} title={'HTML'}/>
            </div>
        </div>
    </div>
}
