import React from 'react'
import Style from './TaskForm.module.scss'
import {PageTemplate} from '../'
import {ColorSelector, TimeInput} from '../../components'

const POSSIBLE_COLORS = ['#FF4E4E','#FF9C45', '#FFCE3A', '#86DFAB', '#8490FF']

export default function TaskForm() {
    return (
        <PageTemplate withHeader>
            <form className={Style.FormContainer}>

                <FormSection>
                    <input className={Style.TaskName}
                        placeholder="Task Name" 
                    />

                    <ColorSelector
                        name="color"
                        colors={POSSIBLE_COLORS}
                    />
                </FormSection>

                <header>Settings</header>
                <FormSection>
                    <TimeInput label="Subtasks" name="timePerSubtask" />
                    <TimeInput label="Break" name="timePerBreak" />
                    <div className={Style.Session}>
                        <input type="number" name="numberOfSessions" 
                            className={Style.Sessions}
                            defaultValue={0}
                        />
                        <label className={Style.Label}>Sessions</label>
                    </div>
                </FormSection>


                <div className={Style.ButtonContainer}>

                    <button className={Style.Submit}>Confirm</button>

                    <button className={Style.Discard}>Discard</button>

                </div>
            </form>
        </PageTemplate>
    )
}

const FormSection = ({children}) => <section className={Style.FormSection}>{children}</section>
