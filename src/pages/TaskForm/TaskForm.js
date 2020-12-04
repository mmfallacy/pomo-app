import React, {useRef} from 'react'
import Style from './TaskForm.module.scss'
import {PageTemplate} from '../'
import {ColorSelector, TimeInput} from '../../components'
import {useTaskStore} from '../../store'

import {useForm} from 'react-hook-form'

import {useHistory} from 'react-router-dom'

const POSSIBLE_COLORS = ['#FF4E4E','#FF9C45', '#FFCE3A', '#86DFAB', '#8490FF']


export default function TaskForm(props) {
    const taskid = props.match.params.uuid;
    const {register, handleSubmit} = useForm()

    const formRef = useRef()

    const history = useHistory()

    const createTask = useTaskStore(state=>state.createTask)


    const onSubmitHandler = async (data) => {
        console.log(data)
        let {
            name, color, 
            timePerBreakMinutes, timePerBreakSeconds, 
            timePerSubtaskMinutes, timePerSubtaskSeconds,
            numberOfSessions
        } = data;
        if (timePerBreakMinutes === '') timePerBreakMinutes = 0
        if (timePerBreakSeconds === '') timePerBreakSeconds = 0
        if (timePerSubtaskMinutes === '') timePerSubtaskMinutes = 0
        if (timePerSubtaskSeconds === '') timePerSubtaskSeconds = 0

        await createTask({
            name, color,
            timePerBreak: parseInt(timePerBreakMinutes)*60 + parseInt(timePerBreakSeconds),
            timePerSubtask: parseInt(timePerSubtaskMinutes)*60 + parseInt(timePerSubtaskSeconds),
            numberOfSessions:parseInt(numberOfSessions),
            taskid:taskid,
        })
        alert("Created Task!")

        onReset()
    }

    const onReset = () =>{
        formRef.current.reset()
        history.goBack()
    }

    return (
        <PageTemplate withHeader>
            <form className={Style.FormContainer}
                onSubmit={handleSubmit(onSubmitHandler)}
                ref={formRef}
            >

                <FormSection>
                    <input className={Style.TaskName}
                        placeholder="Task Name" 
                        name='name'
                        ref={register}
                    />

                    <ColorSelector
                        name="color"
                        colors={POSSIBLE_COLORS}
                        ref={register}
                    />
                </FormSection>

                <header>Settings</header>
                <FormSection>
                    <TimeInput label="Subtasks" name="timePerSubtask" ref={register} />
                    <TimeInput label="Break" name="timePerBreak" ref={register}
                    />
                    <div className={Style.Session}>
                        <input type="number" name="numberOfSessions" 
                            className={Style.Sessions}
                            placeholder="00"
                            ref={register}
                        />
                        <label className={Style.Label}>Sessions</label>
                    </div>
                </FormSection>


                <div className={Style.ButtonContainer}>

                    <button type="submit" className={Style.Submit}>Confirm</button>

                    <button type="button" 
                    onClick={(e)=>{
                        e.preventDefault()
                        onReset()
                    }} 
                    className={Style.Discard}
                    >Discard</button>

                </div>
            </form>
        </PageTemplate>
    )
}

const FormSection = ({children}) => <section className={Style.FormSection}>{children}</section>
