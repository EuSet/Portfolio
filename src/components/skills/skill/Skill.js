import React from "react"
import s from "./Skill.module.scss"

export const Skill = (props) => {
    return <div className={s.skill}>
        <div className={s.icon}>
            <i className={s.i}>
                <img src={props.icon}/>
            </i>
        </div>
        <div className={s.title}>{props.title}</div>
        <div>{props.desc}</div>
    </div>
}
