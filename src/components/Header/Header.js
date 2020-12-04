import React from 'react'
import Style from './Header.module.scss'

import {ReactComponent as Logo} from './logo.svg'

export default function Header() {
    return (
        <header className={Style.Header}>
            <Logo />
        </header>
    )
}
