import React from 'react'
import Style from './PageTemplate.module.scss'
import {Background, Header} from '../../components'

export default function PageTemplate({children, className=''}) {
    return (
        <div className={`${Style.PageTemplate} ${className}`}>
            <Header />
            {children}
            <Background />
        </div>
    )
}
