import React from 'react'
import Style from './ColorSelector.module.scss'

const ColorSelector = React.forwardRef((props, ref) =>{
    const {name, colors} = props

    return(
        <div className={Style.FormRadioGroup}>

            {colors.map((color)=>

                <div key={color} className={Style.RadioContainer}>

                    <input type="radio" className={Style.ColorRadio} name={name} onChange={(e)=>console.log(e.target.value)} value={color} id={`ColorRadioButton-${color}`}/>

                    <label htmlFor={`ColorRadioButton-${color}`} className={Style.ColorFacade}
                        style={{backgroundColor:color}}
                    ></label>
                </div>
            
            )}

        </div>
    )
})

export default ColorSelector