import React, {createRef, useState} from 'react'
import Style from './Main.module.scss'

import {PageTemplate} from '../'
import {Container, Task, FloatingButton, LoadingOverlay} from '../../components'

import {ReactComponent as Add} from './plus.svg'
import {ReactComponent as Camera} from './addCamera.svg'

import {googleVisionQuery} from '../../utils'

const CACHED_TEXT = ["Task 1↵Task 2↵Task 3↵Task 4↵", "Task", "1", "Task", "2", "Task", "3", "Task", "4"]

export default function Main() {
    
    const [isLoading, setLoading] = useState(false)

    const uploadRef = createRef(0)
    const promptCapture = ()=>
        uploadRef.current.click()
    
    const handlePhotoChange = (e)=>{
        const file = e.target.files[0]
        if (!file) return
        const reader = new FileReader()

        reader.onload = async function(e){
            await setLoading(true)
            const result = await googleVisionQuery(e.target.result)
            await setLoading(false)
            parseResponse(result)
        }

        reader.readAsDataURL(file)
    }

    const parseResponse = ({responses})=>{
        const result = responses[0]

        const text = result.textAnnotations.map(e=>e.description)
        console.log(text)

    }

    const mockAction = async () => {
        await setLoading(true)
        const result = await new Promise((resolve)=> setTimeout(()=>resolve(), 5000))
        await setLoading(false)

        parseResponse({responses:[{textAnnotations:
            CACHED_TEXT.map(e=>({description:e}))
        }]})
    }
    return (
        <PageTemplate withHeader className={Style.Main}>
            <nav className={Style.NavBar}>
                <button className={Style.Option}>Tasks</button>
            </nav>

            <br />

            <Container label="All Tasks" maxHeightInItems={5}>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
            </Container>

            <Container label="Completed Tasks" hideable maxHeightInItems={2}>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
                <Task taskid={1} name="Pomo Session" timePerSubtask={2323} numberOfSubtasks={20}/>
            </Container>

            <FloatingButton
                actions={[
                    {icon: <Add/>, action:()=>console.log('test')},
                    {icon: <Camera/>, action:mockAction},
                ]}
            />

            <input type="file" hidden ref={uploadRef} onChange={handlePhotoChange} accept="image/png, image/jpeg" />
            
            <LoadingOverlay state={isLoading}/>
        </PageTemplate>
    )
}
