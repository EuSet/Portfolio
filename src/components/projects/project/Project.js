import React from "react"
import p from './Project.module.css'

export const Project = (props) => {
    return <div className={p.project}>
        <div className={p.image}>
            <div className={p.view}><a href={'#'}>view</a></div>
        </div>
        <div className={p.title}><h3>{props.title}</h3></div>
        <div className={p.description}>{props.description}</div>
    </div>
}