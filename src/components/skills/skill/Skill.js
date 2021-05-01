import React from "react"
import s from "./Skill.module.css"

export const Skill = (props) => {
    return <div className={s.skill}>
        <div className={s.icon}></div>
        <div> {props.title}</div>
        <div>{props.desc}</div>

    </div>
}