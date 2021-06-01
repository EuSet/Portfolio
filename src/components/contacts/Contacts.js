import React from "react"
import style from './Contacts.module.scss'
import c from '../styles/Container.module.css'
import {Title} from "../../common/Title";

export const Contacts = () => {
    return <div className={style.contacts}>
        <div className={`${c.container} ${style.contactsContainer}`}>
            <Title title={'Contacts'}/>
            <div className={style.form}>
                <form>
                    <div><input placeholder={'Name'} /></div>
                    <div><input placeholder={'Email'} /></div>
                    <div><textarea placeholder={'Your message'}/></div>
                </form>
            </div>
            <div><button className={style.sendBtn}>Send</button></div>
        </div>
    </div>
}
