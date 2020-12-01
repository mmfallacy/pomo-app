import React from 'react'
import Style from './Task.module.scss'
import {ReactComponent as Hamburger} from './hamburger.svg'

export default function Task({}) {
    return (
        <section className={Style.Task} onClick={()=>{console.log('uid')}}>
            <div className={Style.TaskButton}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V12L8 6L0 0Z" fill="#BDBDBD"/>
                </svg>
            </div>

            <div className={Style.TaskDetails}>
                <h3>Pomo session 123213213213123123ncomplete</h3>
                <p>40 mins</p>
            </div>

            <Hamburger />
        </section>
    )
}
