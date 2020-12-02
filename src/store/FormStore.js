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

const useFormStore = create(devtools(set =>({
    // Default state
    ...defaultState,

    updateState: async (formData) => await set(state=>(
        {
            ...state,
            ...formData
        }
    )),
    reset: () => set(state=>({...state,...defaultState}))

})),"Form Store")


export default useFormStore