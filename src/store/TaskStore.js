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
            const newState = ({
                ...state,
                tasks:[...state.tasks, 
                    {...defaultState,...data}
                ]
            })
            localStorage.setItem('tasks', JSON.stringify(newState.tasks))
            return newState
    }),
    removeTask: (id) => 
        set(state=>{
            const newState = ({
                ...state,
                tasks:state.tasks.filter(el=>el.taskid!==id)
            })
            localStorage.setItem('tasks', JSON.stringify(newState.tasks))
            return newState
    }),
    setCompleted: (id, value) =>
        set(state=>{
            const newState = ({
                ...state, 
                tasks:[
                    ...state.tasks.map(element=>{
                        if(element.taskid === id) element.isComplete = value
                        return element
                    }),
                ]
            })
            localStorage.setItem('tasks', JSON.stringify(newState.tasks))
            return newState
    }),
})),"Tasks Store")

export default useTaskStore