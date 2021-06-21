import React from "react"
import m from './Main.module.scss'
import c from '../styles/Container.module.css'
import mainPhoto from "../../imges/Main.jpg"
import Particles from 'react-particles-js';
import AOS from "aos"
import 'aos/dist/aos.css';
import ReactTypingEffect from 'react-typing-effect';


const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area:800
            }
        }
    }
}
AOS.init()
export const Main = () => {
    return <div id={'Main'} className={m.main}>
        <div className={`${c.container} ${m.mainContainer}`}>
            <Particles className={m.particles} params={particlesOptions}/>
            <div data-aos="fade-down">
            <div className={m.description}>
                <span>Hi there</span>
                <h1>I am Eugene Setsko</h1>
                <ReactTypingEffect
                    text={["Frontend developer"]}
                />
                {/*<p>Frontend developer</p>*/}
            </div>
            </div>
            <div data-aos="fade-left">
            <div className={m.photoWrap}>
            <div><img className={m.photo} src={mainPhoto} alt={'#'}/></div>
            <span className={m.span}></span>
            </div>
            </div>
        </div>
    </div>
}
