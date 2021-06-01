import React from "react"
import m from './Main.module.scss'
import c from '../styles/Container.module.css'
import mainPhoto from "../../imges/Main.jpg"

export const Main = () => {
    return <div className={m.main}>
        <div className={`${c.container} ${m.mainContainer}`}>
            <div className={m.description}>
                <span>Hi there</span>
                <h1>I am Eugene Setsko</h1>
                <p>Frontend developer</p>
            </div>
            <div><img className={m.photo} src={mainPhoto} alt={'#'}/></div>
        </div>
    </div>
}
