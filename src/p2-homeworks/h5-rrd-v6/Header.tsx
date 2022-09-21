import React from 'react'

import s from "./Header.module.css";
import {PATH} from "./Pages";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}>Pre Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} >Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} >Junior Plus</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
