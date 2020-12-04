export default function defaultObject(props, defaults){
    for(const prop in props)
        defaults[prop] = props[prop]
    return defaults
}