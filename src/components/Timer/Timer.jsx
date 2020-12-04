import React, {useState, useEffect, useRef, useCallback} from 'react'
import Style from './Timer.module.scss'
import {defaultObject} from '../../utils'

const dir = 0;

const defaultStyle = {
    background: 'none',
    stroke: 'blue',
}


const Timer = React.forwardRef((props, ref)=>{

    const {active, mins=0, secs=0, style, onFinish} = props
    const styleProp = defaultObject(style, defaultStyle)

    const [seconds, setSeconds] = useState((mins * 60)+secs)

    const decrementState = useCallback(()=>{
        setSeconds( secs => secs -1)
    }, [])

    const interval = useRef(null)

    useEffect(()=>{
        if(interval.current) clearInterval(interval.current)
        if(active) interval.current = setInterval(decrementState, 1000)
    }, [active, decrementState])

    useEffect(()=>{
        if(seconds<=0) onFinish() 
    },[seconds])

    useEffect(()=>{
        setSeconds(secs)
    },[secs])
    
    return (
        <div className={Style.Timer}>
            <svg viewBox="0 0 36 36" className={Style.CircularContainer}>
                <path className={Style.Background} 
                d={`M18 2.0845a 15.9155 15.9155 0 0 ${dir} 0 31.831 a 15.9155 15.9155 0 0 ${dir} 0 -31.831`}
                style={{fill: styleProp.background}}
                />
                <path className={Style.Fill} 
                d={`M18 2.0845  a 15.9155 15.9155 0 0 ${dir} 0 31.831 a 15.9155 15.9155 0 0 ${dir} 0 -31.831`}
                style={{stroke: styleProp.stroke}}
                />
            </svg>

            <span className={Style.Text}>
                {String(Math.floor(seconds/60)).padStart(2,'0')}:{String(seconds % 60).padStart(2,'0')}
            </span>
        </div>
    )
})

export default Timer