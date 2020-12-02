import React from 'react'
import Style from './Main.module.scss'

import {PageTemplate} from '../'
import {Container, Task} from '../../components'

export default function Main() {
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

        </PageTemplate>
    )
}
