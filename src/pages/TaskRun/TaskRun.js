import React, {useState, useEffect, useLayoutEffect, useRef} from 'react'
import Style from './TaskRun.module.scss'
import {PageTemplate} from '../'
import {ReactComponent as Chevron} from './back.svg'

import {useTaskStore} from '../../store'

import {useHistory} from 'react-router-dom'

const dir = 0


export default function TaskRun(props) {
    const taskid = props.match.params.taskid

    const history = useHistory()

    const task = useTaskStore(state=>state.tasks).find((task)=>task.taskid === taskid)

    const setCompleted = useTaskStore(state=>state.setCompleted)

    const [timeQueue, setTimeQueue] = useState(null)

    const [isDone, setDone] = useState(false)

    // On mount
    useEffect(()=>{
        let initialTimeQueue = []
        for(let i=0; i<task.numberOfSubtasks;i++){
            initialTimeQueue.push({type:'task', content:{name:task.name, subtaskNumber:i+1, time:task.timePerSubtask}})
            initialTimeQueue.push({type:'break', content:{name:'Break', time:task.timePerBreak}})
        }
        setTimeQueue(initialTimeQueue)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    // On time queue update
    useLayoutEffect(()=>{
        if (!Array.isArray(timeQueue)) return console.log("timeQueue Initializing")
        if (timeQueue.length === 0) return setDone(true)
        const current = timeQueue[0]
        setSeconds(current.content.time)
    }, [timeQueue])

    
    const [seconds, setSeconds] = useState(1)

    const intervalRef = useRef(null)

    const [isStarted, setStart] = useState(false)

    const onStart = () => {
        setStart(true)
        intervalRef.current = setInterval(decrementSeconds, 1000)
    }
    const onStop = () => {
        clearInterval(intervalRef.current)
        setStart(false)
    }

    const onSkip = () =>{
        setSeconds(0)
    }

    const decrementSeconds = () => setSeconds(s=>{
        if(s<=1) return 0
        return s - 1
    })

    const doneSound = new Audio('/done.mp3')

    // On timer done
    useEffect(()=>{
        if(seconds > 0) return
        setStart(false)
        clearInterval(intervalRef.current)
        timeQueuePop()
        doneSound.play()
    },[seconds])

    const timeQueuePop = () => setTimeQueue(s=>s.slice(1))

    // On task done,
    useEffect(()=>{
        if(!isDone) return

        setCompleted(taskid, true)
    },[isDone])
    return (
        !isDone ?
        <PageTemplate className={`${Style.TaskRun} ${isStarted && Style.Start}`}>
            <div className={Style.Timer}>
                <svg viewBox="0 0 36 36" className={Style.CircularContainer}>
                    <path className={Style.Background} 
                    d={`M18 2.0845a 15.9155 15.9155 0 0 ${dir} 0 31.831 a 15.9155 15.9155 0 0 ${dir} 0 -31.831`}
                    />
                    <path className={Style.Fill} 
                    style={ Array.isArray(timeQueue) ?
                        {strokeDasharray:`${seconds / timeQueue[0]?.content.time * 100},100`}
                        : {}
                    }
                    d={`M18 2.0845  a 15.9155 15.9155 0 0 ${dir} 0 31.831 a 15.9155 15.9155 0 0 ${dir} 0 -31.831`}
                    />
                </svg>

                <span className={Style.Text}>
                    {String(Math.floor(seconds/60)).padStart(2,'0')}:{String(seconds % 60).padStart(2,'0')}
                </span>
            </div>
        
            <button className={Style.TimerControl} onClick={isStarted? onStop: onStart}>
                {isStarted? "Stop" : "Start"}
            </button>

            <div className={Style.TimerQueue}>
                { Array.isArray(timeQueue) &&
                    <QueueItem name={timeQueue[0]?.content.name} subtaskNumber={timeQueue[0]?.content?.subtaskNumber} onSkip={onSkip}/>}
            </div>

            <button className={Style.Back}
            onClick={()=>history.push('/')}
            ><Chevron /></button>

        </PageTemplate>

        :

        <PageTemplate className={`${Style.TaskRun} ${Style.Done}`}>
            <h1 className={Style.Completed}>Completed!</h1>
            <section className={Style.ButtonGroup}>
                <button className={Style.Action}
                    onClick={()=>history.push('/')}
                >End</button>
                <button className={Style.Action}
                    onClick={()=>window.location.reload()}
                >Restart</button>
            </section>
        </PageTemplate>
    )
}

const QueueItem = ({name, subtaskNumber, onSkip})=>
    <div className={Style.QueueItem}>
        <div className={Style.TaskButton}>
        </div>

        <div className={Style.TaskDetails}>
            <h3>{name}</h3>
        </div>
        
        <p className={Style.Subtasks}>
            {subtaskNumber} 
        </p>

        <button className={Style.Skip} onClick={onSkip}>
            Skip
        </button>
    </div>
