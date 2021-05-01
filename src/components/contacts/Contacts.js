import React from "react"
import style from './Contacts.module.css'
import c from '../styles/Container.module.css'

export const Contacts = () => {
    return <div className={style.contacts}>
        <div className={`${c.container} ${style.contactsContainer}`}>
            <div><h2>Contacts</h2></div>
            <div className={style.form}>
                <form>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><textarea type="text" /></div>
                </form>
            </div>
            <div><button className={style.sendBtn}>Send</button></div>
        </div>
    </div>
}