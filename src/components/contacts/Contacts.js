import React from "react"
import style from './Contacts.module.css'
import c from '../styles/Container.module.css'
import {Title} from "../../common/Title";

export const Contacts = () => {
    return <div className={style.contacts}>
        <div className={`${c.container} ${style.contactsContainer}`}>
            <Title title={'Contacts'}/>
            <div className={style.form}>
                <form>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><textarea/></div>
                </form>
            </div>
            <div><button className={style.sendBtn}>Send</button></div>
        </div>
    </div>
}
