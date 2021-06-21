import React, {useState} from "react"
import style from './Contacts.module.scss'
import c from '../styles/Container.module.css'
import {Title} from "../../common/Title";
import emailjs from 'emailjs-com';

export const Contacts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    function sendEmail(e) {
        e.preventDefault();
        if(!name || !email || !message){
            setError(
                'Please enter your name, mail and write a message')
        } else if(email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            setError('Please enter correct email')
        } else{
        emailjs.sendForm('service_c5dnd9l', 'template_1kfnwga', e.target, 'user_fK0hSJrL4Y5jhMFAnP6jK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        }
    }
    return <div id={'Contacts'} className={style.contacts}>
        <div className={`${c.container} ${style.contactsContainer}`}>
            <Title title={'Contacts'}/>
            <div data-aos="fade-up"
                 data-aos-anchor-placement="center-bottom" className={style.form}>
                <form onSubmit={sendEmail}>
                    {error && <span>{error}</span>}
                    <div><input value={name} onChange={(e) => {
                        setName(e.target.value)
                        setError('')
                    }} placeholder={'Name'} name={'name'} /></div>
                    <div><input
                        value={email} onChange={(e) => {
                        setEmail(e.target.value)
                        setError('')}}
                        placeholder={'Email'} name={'email'} /></div>
                    <div><textarea
                        value={message} onChange={(e) => {
                        setMessage(e.target.value)
                        setError('')}}
                        placeholder={'Your message'} name={'message'}/></div>
                    <div className={style.btnWrap}><button
                        className={style.sendBtn}>Send</button></div>
                </form>
            </div>
        </div>
    </div>
}
