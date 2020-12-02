import React, {createRef} from 'react'
import Style from './Main.module.scss'

import {PageTemplate} from '../'
import {Container, Task, FloatingButton} from '../../components'

import {ReactComponent as Add} from './plus.svg'
import {ReactComponent as Camera} from './addCamera.svg'


export default function Main() {

    const uploadRef = createRef(0)
    const promptCapture = ()=>
        uploadRef.current.click()
    
    const handlePhotoChange = (e)=>{
        const file = e.target.files[0]
        console.table(file)
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
                    {icon: <Camera/>, action:promptCapture},
                ]}
            />

            <input type="file" hidden ref={uploadRef} onChange={handlePhotoChange} accept="image/png, image/jpeg" />
        </PageTemplate>
    )
}
