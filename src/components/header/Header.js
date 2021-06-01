import React from "react"
import h from './Header.module.scss'
import c from '../styles/Container.module.css'
import {Nav} from "./nav/Nav";

export const Header = () => {
    return <div className={h.header}>
        <div className={c.container}>
            <Nav/>
        </div>

    </div>
}
