import React from "react"
import m from './Main.module.css'
import c from '../styles/Container.module.css'

export const Main = () => {
    return <div className={m.main}>
        <div className={`${c.container} ${m.mainContainer}`}>
            <div className={m.description}>
                <span>Hi there</span>
                <h1>I am Jeffery Aaron</h1>
                <p>Frontend developer</p>
            </div>
            <div className={m.photo}></div>


        </div>

    </div>
}