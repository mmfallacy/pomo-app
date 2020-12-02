import create from 'zustand'

const useFormStore = create(set =>({
    // Default state
    taskid: 0,
    name: '',
    timePerSubtask: 0,
    isComplete: false,
    numberOfSubtasks: 0,
    timePerBreak: 0,
    color:"#FF4E4E",

    updateState: (formData) => set(state=>(
        {
            ...state,
            ...formData,
            timePerSubtask: (formData.timePerSubtaskMinutes * 60 ) + formData.timePerSubtaskSeconds,
            timePerBreak: (formData.timePerBreakMinutes * 60 ) + formData.timePerBreakSeconds
        }
    ))

}))


export default useFormStore