import defaultObject from './defaultObject'
import googleVisionQuery from './googleVisionQuery'


const secondsToString = (secs) => {
    const minutes = Math.floor(secs/60)
    const seconds = secs % 60

    if(minutes && seconds)
        return `${minutes} minute${minutes>1?'s':''} ${seconds} second${seconds>1?'s':''}`
    if(minutes)
        return `${minutes} minute${minutes>1?'s':''}`
    return `${seconds} second${seconds>1?'s':''}`
}


export {
    defaultObject,
    secondsToString,
    googleVisionQuery
}