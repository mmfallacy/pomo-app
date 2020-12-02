import React from 'react'
import Style from './TimeInput.module.scss'

const TimeInput = React.forwardRef((props, ref) => {

    const {label, name} = props

    return (
        <div className={Style.Container}>

            <div className={Style.InputContainer}>
                
                <input className={Style.Input}
                    type="number"
                    min='0' max='60'
                    name={`${name}-minutes`}
                    ref={ref}
                    defaultValue={0}
                />
            
                <span className={Style.Divider}>:</span>

                <input className={Style.Input}
                    type="number"
                    min='0' max='60'
                    name={`${name}-seconds`}
                    ref={ref}
                    defaultValue={0}
                />

            </div>

            <label className={Style.Label}>{label}</label>

        </div>
    )
})


export default TimeInput