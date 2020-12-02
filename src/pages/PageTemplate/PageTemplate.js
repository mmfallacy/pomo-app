import React from 'react'
import Style from './PageTemplate.module.scss'
import {Header,LoadingOverlay} from '../../components'

export default function PageTemplate({children, withHeader, className='',state}) {
    return (
        <div className={`${Style.PageTemplate} ${className}`} style={withHeader && {paddingTop: '80px'}}>
            {withHeader && <Header />}
            {children}
            <LoadingOverlay state={state}/>
        </div>
    )
}
