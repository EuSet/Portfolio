import React from "react"
import n from './Nav.module.scss'
import {Link} from "react-scroll";


export const Nav = () => {
    return <div className={n.nav}>
        <Link
            activeClass={n.active}
            to="Main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Home</Link>
        <Link
            activeClass={n.active}
            to="Skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Skills</Link>
        <Link
            activeClass={n.active}
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Projects</Link>
        <Link
            activeClass={n.active}
            to="Contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Contacts</Link>
    </div>
}
