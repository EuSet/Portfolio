import React from "react"
import p from './Project.module.scss'

export const Project = (props) => {
    return <div data-aos="fade-up" className={p.project}>
        <div style={props.style} className={p.image}>
            <a href={`${props.href}`}> <div className={p.view}><span>view</span></div></a>
        </div>
        <div className={p.titleContainer}>
        <div className={p.title}><span>{props.title}</span></div>
        <div className={p.description}>{props.description}</div>
        </div>
    </div>
}
