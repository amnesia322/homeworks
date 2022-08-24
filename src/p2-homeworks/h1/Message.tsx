import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>

            <img src={props.avatar}  alt="avatar" className={s.avatar}/>

            <div className={s.angle}/>

            <div className={s.content}>
                <div className={s.userName}>{props.name}</div>
                <div className={s.textMessage}>{props.message}</div>
                <div className={s.timeMessage}>{props.time}</div>
            </div>
        </div>
    );
}


