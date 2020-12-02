import React from 'react'
import Style from './LoadingOverlay.module.scss'
import Loader from './loader.gif'

export default function LoadingOverlay({state}) {
    return ( state &&
        <div className={Style.LoadingOverlay}>
            <img src={Loader} alt="Loading" />
        </div>
    )
}
