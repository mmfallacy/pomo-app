import React from 'react'
import Style from './Task.module.scss'
import {ReactComponent as Hamburger} from './hamburger.svg'
import {secondsToString} from '../../utils'

import {useHistory} from 'react-router-dom'

export default function Task(props) {

    const {
        taskid, name, 
        timePerSubtask, isComplete, 
        numberOfSubtasks, timePerBreak, 
        color="#FF4E4E"
    } = props

    const history = useHistory()

    const onPlay = () =>{
        history.push(`/run/${taskid}`)
    }
    return (
        <section className={`${Style.Task} ${isComplete?Style.Complete:''}`}>
            <div className={Style.TaskButton} style={{backgroundColor: color}} onClick={onPlay}>
                { isComplete?
                    <Check /> :
                    <Play />
                }
            </div>

            <div className={Style.TaskDetails}>
                <h3>{name}</h3>
                <p>{secondsToString(timePerSubtask)}</p>
            </div>
            
            <p className={Style.Subtasks}>
                {numberOfSubtasks && (numberOfSubtasks + ` task${numberOfSubtasks>1?'s':''}`)} 
            </p>

            <Hamburger />
        </section>
    )
}

const Play = () => (
    <svg className={Style.Play} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0V12L8 6L0 0Z" fill="#BDBDBD"/>
    </svg>
)


const Check = () => (
    <svg className={Style.Check} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.1405 3.1543H13.9801C13.8174 3.1543 13.663 3.229 13.5634 3.35684L6.71856 12.0278L3.43643 7.86914C3.38678 7.8061 3.32349 7.75513 3.25132 7.72005C3.17915 7.68497 3.09997 7.6667 3.01973 7.6666H1.85928C1.74805 7.6666 1.68662 7.79443 1.75469 7.88076L6.30186 13.6415C6.51436 13.9104 6.92275 13.9104 7.13692 13.6415L15.2451 3.3668C15.3132 3.28213 15.2518 3.1543 15.1405 3.1543V3.1543Z" fill="black"/>
    </svg>
)