import React, {createRef, useState} from 'react'
import Style from './Main.module.scss'

import {PageTemplate} from '../'
import {Container, Task, FloatingButton} from '../../components'

import {ReactComponent as Add} from './plus.svg'
import {ReactComponent as Camera} from './addCamera.svg'

import {googleVisionQuery} from '../../utils'

import {v4 as uuidv4} from 'uuid'

import {useHistory} from 'react-router-dom'

import {useTaskStore} from '../../store'

const CACHED_TEXT = ["Task 1↵Task 2↵Task 3↵Task 4↵", "Task", "1", "Task", "2", "Task", "3", "Task", "4"]

export default function Main() {
    
    const [isLoading, setLoading] = useState(false)

    const history = useHistory()

    const tasks = useTaskStore(state=>state.tasks)

    console.log(tasks)
    const createTask = useTaskStore(state=>state.createTask)

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
            parseResponse(result)
        }
        
        reader.readAsDataURL(file)
    }

    const parseResponse = async ({responses})=>{
        const result = responses[0]

        const text = result.fullTextAnnotation.text
        
        console.log(text, text.split(/\r\n|\r|\n/))

        let parsed = text.split(/\r\n|\r|\n/)

        parsed.pop()
        
        parsed.slice(0,-1).map((name)=> createTask({name, taskid: uuidv4()}))
        
         setLoading(false)
    }

    const mockAction = async () => {
        await setLoading(true)
        const result = await new Promise((resolve)=> setTimeout(()=>resolve(), 5000))
        await setLoading(false)

        parseResponse({responses:[{textAnnotations:
            CACHED_TEXT.map(e=>({description:e}))
        }]})
    }

    const addNewTask =  ()=>{
        const newId = uuidv4()
        history.push(`/newtask/${newId}`)
    }

    return (
        <PageTemplate withHeader className={Style.Main} state={isLoading}>
            <nav className={Style.NavBar}>
                <button className={Style.Option}>Tasks</button>
            </nav>

            <br />

            <Container label="Uncompleted Tasks" maxHeightInItems={5}>
                {tasks.filter(el=>!el.isComplete).map((data)=>
                    <Task key={data.taskid} {...data} />
                )}
            </Container>

            <Container label="Completed Tasks" hideable maxHeightInItems={2}>
                {tasks.filter(el=>el.isComplete).map((data)=>
                    <Task {...data} />
                )}
            </Container>

            <FloatingButton
                actions={[
                    {icon: <Add/>, action:addNewTask},
                    {icon: <Camera/>, action:promptCapture},
                ]}
            />

            <input type="file" hidden ref={uploadRef} onChange={handlePhotoChange} accept="image/png, image/jpeg" capture/>
            
        </PageTemplate>
    )
}
