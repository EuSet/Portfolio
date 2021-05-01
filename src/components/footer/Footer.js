import React from "react"
import f from './Footer.module.css'
import c from '../styles/Container.module.css'

export const Footer = () => {
    return <div className={f.footer}>
        <div className={`${c.container} ${f.footerContainer}`}>
            <div><h2>Setsko Eugene</h2></div>
            <div className={f.links}>
                <div className={f.link}></div>
                <div className={f.link}></div>
                <div className={f.link}></div>
                <div className={f.link}></div>
            </div>
            <div><p>@2019 All rights reserved</p></div>
        </div>

    </div>
}