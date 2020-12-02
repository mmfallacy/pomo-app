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
                    name={`${name}Minutes`}
                    ref={ref}
                    placeholder="00"
                />
            
                <span className={Style.Divider}>:</span>

                <input className={Style.Input}
                    type="number"
                    min='0' max='60'
                    name={`${name}Seconds`}
                    ref={ref}
                    placeholder="00"
                />

            </div>

            <label className={Style.Label}>{label}</label>

        </div>
    )
})


export default TimeInput