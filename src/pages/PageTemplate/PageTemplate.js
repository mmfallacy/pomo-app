import React from 'react'
import Style from './PageTemplate.module.scss'
import {Header} from '../../components'

export default function PageTemplate({children, withHeader, className=''}) {
    return (
        <div className={`${Style.PageTemplate} ${className}`} style={withHeader && {paddingTop: '80px'}}>
            {withHeader && <Header />}
            {children}
        </div>
    )
}
