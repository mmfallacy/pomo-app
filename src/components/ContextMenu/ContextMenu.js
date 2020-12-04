import React from 'react'
import Style from './ContextMenu.module.scss'

export default function ContextMenu({state, setState, options}) {

    const onClickWrapper = (e,fn) => {
        fn(e)
        setState(false)
    }

    return ( state ?
        <>
        <section className={Style.ContextMenu}>
            {options.map(el=>
                <button key={el.label} className={Style.Option} onClick={(e)=>onClickWrapper(e,el.action)}>{el.label}</button>
            )}
        </section>
        <div className={Style.Overlay} onClick={()=>setState(false)}></div>
        </>
        : null
    )
}
