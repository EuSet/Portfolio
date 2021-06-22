import React from "react"
import f from './Footer.module.scss'
import c from '../styles/Container.module.css'
import github from "./../../imges/github.png"
import linkedin from "./../../imges/linkedin.png"
import facebook from "./../../imges/facebook.png"
import telegram from "./../../imges/telegram.png"

export const Footer = () => {
    return <div className={f.footer}>
        <div className={`${c.container} ${f.footerContainer}`}>
            <div><h2>Setsko Eugene</h2></div>
            <div className={f.links}>
                <div className={f.link}>
                    <a href='https://github.com/EuSet' target="_blank"><img src={github} alt={'gh'}/></a>
                </div>
                <div className={f.link}>
                    <a href='https://www.linkedin.com/in/eugene-setsko-0a6027120/' target="_blank"><img src={linkedin} alt={'in'}/></a>
                </div>
                <div className={f.link}>
                    <a href='https://www.facebook.com/profile.php?id=100054605761467' target="_blank"><img src={facebook} alt={'fb'}/></a>
                </div>
                <div className={f.link}>
                    <a href='https://t.me/Eu_Set' target="_blank"> <img src={telegram} alt={'tg'}/></a>
                </div>
            </div>
            <div><p>@2021 All rights reserved</p></div>
        </div>
    </div>
}
