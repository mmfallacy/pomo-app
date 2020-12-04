import create from 'zustand'
import {devtools} from 'zustand/middleware'

const defaultState = {
    taskid: null,
    name: 'Task Name',
    timePerSubtask: 60,
    isComplete: false,
    numberOfSubtasks: 4,
    timePerBreak: 60,
    color:"#FF4E4E",
}

const useTaskStore = create(devtools(set=>({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    createTask: (data) => 
        set(state=>{
            const newState = ({...state, tasks:[...state.tasks, {...defaultState,...data}]})
            localStorage.setItem('tasks', JSON.stringify(newState.tasks))
            return newState
    }),
    removeTask: (uuid) => 
        set(state=>{
            const newState = ({...state, tasks:state.tasks.filter(el=>el.uuid!==uuid)})
            localStorage.setItem('tasks', JSON.stringify(newState.tasks))
            return newState
    })
})),"Tasks Store")

export default useTaskStore