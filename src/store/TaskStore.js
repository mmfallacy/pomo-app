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
    tasks: [],
    createTask: (data) => set(state=>({...state, tasks:[...state.tasks, {...defaultState,...data}]})),
    removeTask: (uuid) => set(state=>({...state, tasks:state.tasks.filter(el=>el.uuid!==uuid)}))
})),"Tasks Store")

export default useTaskStore