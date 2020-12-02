import React, {useState} from 'react'
import Style from './Container.module.scss'

export default function Container({hideable, children, label, maxHeightInItems}) {

    const [isHidden, setHidden] = useState(false)
    
    const toggleHide = () => setHidden(s=>!s)
    return (
        <div className={Style.ContainerWrapper}>
            <header>
                <h4>{label}</h4>
            { hideable && 
            <button className={Style.Hide}
                onClick={toggleHide}
            >{isHidden?'Unhide':'Hide'}</button>
            }
            </header>
            <div className={`${Style.Container} ${isHidden && Style.Hidden}`} style={{maxHeight: `${maxHeightInItems * 68}px`}}>
                {children}
            </div>
        </div>
    )
}
