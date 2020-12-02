import React, {useState} from 'react'
import Style from './FloatingButton.module.scss';
import {ReactComponent as Add} from './plus.svg'

export default function FloatingButton({actions}) {
    
    const [isExpanded, setExpanded] = useState(false)

    const toggleExpanded = () => setExpanded(s=>!s)
    return (
        <div className={Style.FloatingButtonContainer}>
            
            <button className={Style.FloatingButtonMain}
                onClick={toggleExpanded}
            >
                <Add />
            </button>

            { actions.map((el, index)=>
                <button key={index}
                    className={Style.FloatingButtonSecondary}
                    style={isExpanded ? createExpandedStyle(index) : null}
                    onClick={el.action}
                >
                    {el.icon}
                </button>
            )}
        </div>
    )
}


const createExpandedStyle = (index) => (
    {
        transform: `translateY(-${8 + (56 * (index+1))}px)`
    }
)